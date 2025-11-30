import { FileText } from 'lucide-react';

export function TermsOfService() {
  return (
    <div>
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="text-orange-600" size={64} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Use of Our Services
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to engage in unauthorized access, interfere with system functionality, or misuse proprietary content, automations, or AI tools provided by Everyday Workflow.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. AI-Generated Content
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Everyday Workflow may use AI models to generate text, responses, suggestions, or automation results. AI output may not always be accurate. You are responsible for reviewing all AI-generated content before use. AI output is not legal, medical, or financial advice. We are not liable for decisions made based on AI-generated information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. SMS Messaging & Consent
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By opting in through our website forms, you consent to receive transactional and/or marketing SMS messages depending on your selection. Transactional messages may include appointment confirmations, reminders, and service notifications. Marketing messages may include promotions, discounts, updates, and new service announcements. Message & data rates may apply. Message frequency may vary. Reply STOP to opt out or HELP for assistance. Consent is not required as a condition of purchase.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using our Services, you also agree to the Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. User Submissions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By submitting comments, form entries, files, or data, you grant us permission to store and use the information as required to deliver services. You confirm all information is accurate and agree not to upload harmful, illegal, or malicious content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, branding, website assets, AI-generated materials, and automations created by Everyday Workflow are proprietary unless otherwise stated. You may not copy, redistribute, modify, or reproduce any content without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Everyday Workflow is not liable for any indirect, incidental, or consequential damages. We do not guarantee uninterrupted service availability and are not responsible for errors in AI output, third-party platform outages, or SMS delivery failures. Use of the Services is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. No Guarantees of Business Results
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Everyday Workflow does not guarantee revenue increases, growth improvements, or specific performance outcomes. Actual results depend on your implementation and external factors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Third-Party Services
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Services may integrate with platforms such as Google, Meta, OpenAI, Go High Level, Cloudflare, Zapier, and similar technologies. We are not responsible for their outages, actions, or policy changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Changes to These Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms at any time. Continued use of the Services indicates your acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms, contact <a href="mailto:Legal@everydayworkflow.com" className="text-orange-600 hover:text-orange-700">Legal@everydayworkflow.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
