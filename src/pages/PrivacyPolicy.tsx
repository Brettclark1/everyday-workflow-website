import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div>
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="text-orange-600" size={64} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Everyday Workflow LLC ("Everyday Workflow," "we," "us," or "our"), based in Phoenix, Arizona,
                provides AI automation, software-as-a-service (SaaS), and consulting services designed to help
                small and medium-sized businesses streamline operations and improve customer engagement.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This Privacy Policy describes how we collect, use, disclose, and protect information when you
                use our services, access our platform, or interact with us through our website or other channels.
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect various types of information to provide and improve our services:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you sign up for our services, request information, or contact us, we may collect your name,
                email address, phone number, business name, business address, and other contact details.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account and Usage Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account or use our platform, we collect information about your interactions,
                including login credentials, activity logs, feature usage, configuration settings, and preferences.
                This helps us provide technical support and improve our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communications</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect information from your communications with us, including emails, messages, support
                conversations, and feedback. This information helps us respond to your inquiries and improve
                customer service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As part of providing our services, we may process customer data on your behalf, including contact
                information, interaction histories, and communications with your customers. You remain the data
                controller of this information, and we act as a data processor.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Usage Data</h3>
              <p className="text-gray-700 leading-relaxed">
                When you visit our website, we may automatically collect certain information through cookies and
                similar technologies, including your IP address, browser type, device information, pages visited,
                time and date of visits, and referring website addresses.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>To Provide and Manage Services:</strong> We use your information to deliver our AI
                  automation, SaaS platform, and consulting services, including configuring and maintaining
                  client automations, AI agents, and integrations.
                </li>
                <li>
                  <strong>To Communicate With You:</strong> We use contact information to respond to inquiries,
                  provide customer support, send service updates, share important notices, and process billing
                  and payment information.
                </li>
                <li>
                  <strong>To Improve Our Services:</strong> We analyze usage data and feedback to understand how
                  our services are used, identify areas for improvement, develop new features, and optimize
                  platform performance.
                </li>
                <li>
                  <strong>To Ensure Security:</strong> We monitor and analyze activity to detect, prevent, and
                  respond to security incidents, fraud, and unauthorized access.
                </li>
                <li>
                  <strong>To Comply With Legal Obligations:</strong> We may use information as required to comply
                  with applicable laws, regulations, legal processes, and enforceable governmental requests.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Legal Basis for Processing (For EU/EEA Users)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are located in the European Union or European Economic Area, our legal bases for processing
                your information include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Consent:</strong> Where you have provided explicit consent for specific processing
                  activities.
                </li>
                <li>
                  <strong>Contract Performance:</strong> Processing necessary to perform our contractual
                  obligations and deliver services to you.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests,
                  such as improving services, ensuring security, and conducting business operations, provided these
                  interests do not override your fundamental rights.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Processing required to comply with legal obligations.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information to third parties. We may share information in the
                following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with third-party service providers who perform services on our behalf, such as hosting
                infrastructure, SMS and email delivery services, payment processors, analytics providers, and
                customer support tools. These providers are contractually obligated to protect your information
                and use it only for the purposes we specify.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose information if required by law, regulation, legal process, or governmental request,
                or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information may be
                transferred to the acquiring entity. We will notify you of any such change and provide choices
                regarding your information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">With Your Consent</h3>
              <p className="text-gray-700 leading-relaxed">
                We may share information with third parties when you have given us explicit permission to do so.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your information for as long as necessary to provide our services, fulfill the purposes
                described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                Retention periods vary depending on the type of information and the nature of our relationship with you.
                When information is no longer needed, we will securely delete or anonymize it in accordance with our
                data retention policies and applicable law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement reasonable technical, administrative, and physical security measures designed to protect
                your information from unauthorized access, disclosure, alteration, and destruction. These measures
                include encryption, access controls, secure server infrastructure, and regular security assessments.
                However, no method of transmission over the internet or electronic storage is completely secure, and
                we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location and applicable law, you may have the following rights regarding your
                personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Access:</strong> You may request access to the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You may request correction of inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> You may request deletion of your personal information, subject to
                  certain legal exceptions and contractual obligations.
                </li>
                <li>
                  <strong>Portability:</strong> You may request a copy of your information in a structured,
                  commonly used format.
                </li>
                <li>
                  <strong>Objection:</strong> You may object to certain types of processing, including processing
                  for direct marketing purposes.
                </li>
                <li>
                  <strong>Restriction:</strong> You may request that we restrict the processing of your information
                  under certain circumstances.
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Where processing is based on consent, you may withdraw your
                  consent at any time.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the contact information provided at the end of
                this policy. We will respond to your request in accordance with applicable law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance user experience, analyze site
                traffic, and understand usage patterns. Cookies are small text files stored on your device that help
                us recognize you and remember your preferences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Types of cookies we may use include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function properly.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                  by collecting anonymous usage data.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and choices to provide a more
                  personalized experience.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. Please note that disabling
                certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. SMS and A2P Messaging</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services may include Application-to-Person (A2P) SMS messaging capabilities. This section
                explains how we handle SMS communications and your related rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consent to Receive SMS Messages</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By providing your mobile phone number and consenting to receive SMS messages from us or our clients
                (if you are a customer of one of our clients), you agree to receive automated text messages at the
                phone number you provided. Consent is not a condition of purchase. Message frequency varies depending
                on the type of messages you've opted in to receive.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect consent through our website forms where customers must enter their information and agree
                to receive SMS messages. Each form includes clear language about the type of messages we send and
                requires the customer to submit their information voluntarily. We also confirm consent verbally during
                client onboarding calls when applicable. All recipients can opt out at any time by replying STOP.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of SMS Messages</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SMS messages may include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Appointment reminders and confirmations</li>
                <li>Service updates and notifications</li>
                <li>Promotional offers and marketing communications</li>
                <li>Customer support and follow-up messages</li>
                <li>Two-factor authentication and security codes</li>
                <li>Review and feedback requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Message and Data Rates</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Standard message and data rates may apply based on your mobile carrier's plan. You are responsible
                for all charges incurred from receiving SMS messages. Please contact your mobile carrier for details
                about your messaging plan.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opting Out of SMS Messages</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may opt out of receiving SMS messages at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Replying <strong>STOP</strong>, <strong>END</strong>, <strong>CANCEL</strong>, <strong>UNSUBSCRIBE</strong>,
                or <strong>QUIT</strong> to any SMS message you receive from us</li>
                <li>Following opt-out instructions provided in the message</li>
                <li>Contacting us directly using the contact information at the end of this policy</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                After you opt out, you will receive one final confirmation message acknowledging your request.
                Please allow up to 48 hours for your opt-out request to be fully processed. You may continue
                to receive messages during this processing period.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Help and Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For help or more information about SMS messaging, you can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Reply <strong>HELP</strong> to any SMS message</li>
                <li>Contact us at <a href="mailto:Hello@everydayworkflow.com" className="text-orange-600 hover:text-orange-700">Hello@everydayworkflow.com</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">SMS Information Security</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your mobile phone number and SMS message history are treated as personal information and protected
                in accordance with this Privacy Policy. We implement security measures to protect this information
                from unauthorized access, disclosure, or misuse. However, please be aware that SMS messages are not
                encrypted and may not be secure.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">SMS Data Retention</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain SMS message logs and phone numbers for as long as necessary to provide services, comply
                with legal obligations, and for legitimate business purposes. If you opt out of SMS messaging, we
                will retain your phone number and opt-out status to ensure we honor your preference.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Carrier Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                We are not liable for delayed or undelivered messages. SMS delivery depends on your mobile carrier's
                network and is subject to their terms and conditions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services may integrate with or link to third-party platforms, tools, and services (such as
                SMS carriers, email providers, payment processors, CRM systems, and automation tools). These
                third parties have their own privacy policies and terms of service. We are not responsible for
                the privacy practices of third-party services, and we encourage you to review their policies
                before using them.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 13, and we do not knowingly collect
                personal information from children under 13. If we become aware that we have inadvertently collected
                information from a child under 13, we will take steps to delete such information promptly. If you
                believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                If you are accessing our services from outside the United States, please be aware that your
                information may be transferred to, stored, and processed in the United States or other countries
                where our service providers operate. These countries may have data protection laws that differ from
                those in your jurisdiction. By using our services, you consent to the transfer of your information
                to the United States and other countries.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors. When we make changes, we will update the "Last Updated" date
                at the top of this policy. We encourage you to review this policy periodically. If we make material
                changes, we will provide notice through our website, email, or other appropriate channels. Your
                continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. California Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a California resident, you may have additional rights under the California Consumer
                Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The right to know what personal information we collect, use, disclose, and sell</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of the sale of personal information (note: we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your CCPA rights</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">Everyday Workflow LLC</p>
                <p className="text-gray-700">311 N Pioneer</p>
                <p className="text-gray-700">Mesa, AZ 85203</p>
                <p className="text-gray-700 mt-2">
                  Phone: <a href="tel:4807252275" className="text-orange-600 hover:text-orange-700">
                    480-725-2275
                  </a>
                </p>
                <p className="text-gray-700">
                  Email: <a href="mailto:privacy@everydayworkflow.com" className="text-orange-600 hover:text-orange-700">
                    privacy@everydayworkflow.com
                  </a>
                </p>
                <p className="text-gray-700">
                  General Inquiries: <a href="mailto:hello@everydayworkflow.com" className="text-orange-600 hover:text-orange-700">
                    hello@everydayworkflow.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
