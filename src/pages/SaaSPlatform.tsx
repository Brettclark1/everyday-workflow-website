import { Inbox, Trello, Zap, Calendar, Star, BarChart3, CheckCircle2, ArrowRight, Database, Shield } from 'lucide-react';
import { Link } from '../router';

export function SaaSPlatform() {
  return (
    <div>
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            A Single Platform for Your Entire Business
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Everyday Workflow Platform brings CRM, marketing automation, communications, and reporting
            into one unified system—managed, branded, and built to scale.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg inline-flex items-center"
          >
            Request a Demo
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What the Platform Is
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Everyday Workflow Platform is a managed business operations system built for companies
                that need enterprise-grade tools without complexity. This is not DIY software—it's a
                fully managed platform designed, deployed, and supported by Everyday Workflow.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your team logs into a single system under your brand. No multiple logins, no juggling tools,
                no third-party confusion. Just a unified platform that runs your operations seamlessly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We configure everything to match your workflows, integrate with your existing systems,
                and handle ongoing support. You focus on results.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-600 rounded-full mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                One Brand. One Login. One Platform.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your clients see a single, cohesive system. No tool sprawl. No confusion.
                Just professional operations that work.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What's Included
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to run modern business operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Database className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CRM & Contact Management</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Centralized contact database with full history tracking, custom fields, tags, and
                  segmentation capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Unified contact database</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Custom fields and tags</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Activity timeline tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing & Follow-Up Automation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Build automated sequences, trigger campaigns, and ensure consistent follow-up
                  without manual work.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Trigger-based workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Multi-channel campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Lead nurturing sequences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Inbox className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email & SMS Messaging</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Unified inbox for all communications with built-in templates, automation,
                  and compliance management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Multi-channel messaging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Message templates library</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Compliance safeguards built-in</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scheduling & Pipeline Management</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Online booking, calendar management, and visual sales pipelines to track opportunities
                  through every stage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Booking pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Visual pipeline management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Automated reminders</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reporting & Dashboards</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Real-time performance insights, campaign analytics, and business health metrics
                  with customizable dashboards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Custom dashboard views</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Automated reporting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Star className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Branded Client Portal</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your clients access everything through a portal that reflects your business identity
                  and professional standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Custom domain configuration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Brand colors and logo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Professional presentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why a Unified Platform Matters
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="text-orange-600 mr-3" size={24} />
                    Brand Consistency
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Clients see one cohesive system. No third-party logos. No vendor confusion.
                    Everything reinforces your business identity.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="text-orange-600 mr-3" size={24} />
                    Operational Efficiency
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    One login. One system. No switching between tools. Your team operates faster
                    with less friction and fewer errors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="text-orange-600 mr-3" size={24} />
                    Professional Presentation
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Present as a sophisticated operation with enterprise-grade tools. Clients see
                    a polished, integrated system that reflects your standards.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="text-orange-600 mr-3" size={24} />
                    Scalable Growth
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    As your business grows, the platform scales with you. No disruptions, no migrations,
                    no retraining your team on new systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Who It's For
              </h2>
              <p className="text-lg text-gray-600">
                Built for businesses that need professional-grade operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Service Businesses</h3>
                <p className="text-gray-600 leading-relaxed">
                  Home services, contractors, and professional service companies that need to manage
                  leads, communications, and client relationships efficiently.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Service Providers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Consultants, coaches, accountants, and attorneys who need a unified system for
                  client management and streamlined operations.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Agencies</h3>
                <p className="text-gray-600 leading-relaxed">
                  Marketing agencies and consultancies that need enterprise-grade tools to manage
                  client operations and deliver results.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Straightforward deployment, managed by Everyday Workflow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Configure Your System
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We set up your custom domain, apply your branding, and configure the platform
                  to match your operational requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Deploy & Customize
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Everyday Workflow deploys your platform, integrates with existing systems, and
                  customizes workflows based on your business needs.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Operate & Scale
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your team logs in and runs daily operations. We handle updates, support, and
                  ongoing optimization as you scale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Security & Compliance
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start mb-6">
                <Shield className="text-orange-600 mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Everyday Workflow maintains security, privacy, and compliance standards across
                    all platform operations. Your data is protected with industry-standard protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Shield className="text-orange-600 mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integration-Ready</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The platform connects with your existing tools and systems through modern integration
                    standards—no technical complexity exposed to your team.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="text-orange-600 mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Managed Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We manage updates, handle troubleshooting, and provide ongoing optimization so you
                    can focus on running your business without technical interruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            See how Everyday Workflow Platform can unify your business operations under one system.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg inline-flex items-center"
          >
            Request a Demo
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
