// functions/a2p-consents-export.ts

interface Env {
  VITE_SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  ADMIN_EXPORT_TOKEN: string;
}

export async function onRequest(context: {
  request: Request;
  env: Env;
}) {
  const { request, env } = context;

  // 1) Check admin token from Authorization header
  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length).trim()
    : "";

  if (!token || token !== env.ADMIN_EXPORT_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // 2) Build Supabase REST URL for the a2p_consents table
    // VITE_SUPABASE_URL looks like: https://xxxx.supabase.co
    const baseUrl = env.VITE_SUPABASE_URL.replace(/\/+$/, "");
    const restUrl = `${baseUrl}/rest/v1/a2p_consents?select=*`;

    // 3) Fetch all consents using the service role key (bypasses RLS)
    const supabaseRes = await fetch(restUrl, {
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        Accept: "application/json",
      },
    });

    if (!supabaseRes.ok) {
      const text = await supabaseRes.text();
      console.error("Supabase error:", supabaseRes.status, text);
      return new Response("Error fetching data from Supabase", {
        status: 500,
      });
    }

    const rows: any[] = await supabaseRes.json();

    // 4) Define which columns go into the CSV (and in what order)
    const headers = [
      "id",
      "phone",
      "email",
      "consent_type",
      "consented_at",
      "source_page",
      "ip_address",
      "user_agent",
      "created_at",
    ];

    // 5) Convert rows -> CSV string
    const csvLines = [headers.join(",")];

    for (const row of rows) {
      const line = headers
        .map((field) => {
          const value = row[field] ?? "";
          // Escape double quotes and wrap in quotes
          const safe = String(value).replace(/"/g, '""');
          return `"${safe}"`;
        })
        .join(",");
      csvLines.push(line);
    }

    const csv = csvLines.join("\n");

    const dateStamp = new Date().toISOString().slice(0, 10);

    // 6) Return CSV response
    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="a2p_consents_${dateStamp}.csv"`,
      },
    });
  } catch (err) {
    console.error("Export function error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
