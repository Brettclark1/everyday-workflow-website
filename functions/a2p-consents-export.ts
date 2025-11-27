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

  // Safety check: make sure the secret is actually loaded
  if (!env.ADMIN_EXPORT_TOKEN) {
    return new Response("Server config error: ADMIN_EXPORT_TOKEN is not set", {
      status: 500,
    });
  }

  // --- 1) Read token from Authorization header OR ?token= query param ---

  // Header: Authorization: Bearer <token>
  const authHeader = request.headers.get("authorization") || "";
  let headerToken = "";

  if (/^Bearer\s+/i.test(authHeader)) {
    headerToken = authHeader.substring(7).trim(); // strip "Bearer "
  }

  const url = new URL(request.url);
  const queryToken = url.searchParams.get("token") || "";

  // Prefer header token, fall back to query token
  const token = headerToken || queryToken;

  if (!token || token !== env.ADMIN_EXPORT_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // --- 2) Build Supabase REST URL for the a2p_consents table ---

    const baseUrl = env.VITE_SUPABASE_URL.replace(/\/+$/, "");
    const restUrl = `${baseUrl}/rest/v1/a2p_consents?select=*`;

    // --- 3) Fetch all consents with the service role key (bypasses RLS) ---

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

    // --- 4) Define CSV columns & order ---

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

    // --- 5) Convert rows -> CSV string ---

    const csvLines = [headers.join(",")];

    for (const row of rows) {
      const line = headers
        .map((field) => {
          const value = row[field] ?? "";
          const safe = String(value).replace(/"/g, '""');
          return `"${safe}"`;
        })
        .join(",");
      csvLines.push(line);
    }

    const csv = csvLines.join("\n");
    const dateStamp = new Date().toISOString().slice(0, 10);

    // --- 6) Return CSV as a file download ---

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

