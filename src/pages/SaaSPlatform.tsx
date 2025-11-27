import { Inbox, Trello, Zap, Calendar, Star, BarChart3, CheckCircle2, ArrowRight, Database, Shield } from 'lucide-react';
import { Link } from '../router';

export function SaaSPlatform() {
  return (
    <div>
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            One Unified Platform for Everything
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Everyday Workflow SaaS platform brings your CRM, automations, communications,
            and reporting together in one place. Fully managed and configured for your business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Not Just Software. A Managed Solution.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Everyday Workflow SaaS platform is powered by Go High Level, but you don't
                need to know that. We handle all the technical complexity, configuration, and
                ongoing maintenance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Instead of getting overwhelmed by features you'll never use, you get a clean,
                simplified experience focused on what actually matters for your business. We
                configure everything, connect your AI agents and automations, and provide ongoing
                support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You focus on running your business. We handle the tech.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-12 rounded-2xl">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Database className="text-orange-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Everything in One Place
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Stop juggling five different tools. Your contacts, conversations, automations,
                  and analytics live in a single, unified platform.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Key Platform Features
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to manage customer relationships and grow revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-orange-500 transition-colors">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Inbox className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unified Inbox</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All your communications in one place. SMS, email, social messages, and chat
                  conversations unified in a single inbox.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Multi-channel conversations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Team collaboration tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Message templates and quick replies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-orange-500 transition-colors">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Trello className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pipeline & Deals</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Visual pipelines that make it easy to track opportunities, forecast revenue,
                  and move deals forward.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Customizable pipeline stages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Drag-and-drop deal management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Revenue forecasting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-orange-500 transition-colors">
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Workflows</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pre-built and custom workflows that automate repetitive tasks and ensure
                  nothing falls through the cracks.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Trigger-based automations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Multi-step sequences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Conditional logic and branching</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-orange-500 transition-colors">
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Calendar & Booking</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Integrated scheduling with online booking, automated reminders, and team
                  calendar management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Online booking pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Automated appointment reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Team availability management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-orange-500 transition-colors">
                <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Star className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reputation / Reviews</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Monitor and manage your online reputation with automated review requests and
                  response management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Automated review requests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Multi-platform monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Review response templates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-orange-500 transition-colors">
                <div className="bg-pink-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-pink-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reporting & Dashboards</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Real-time insights into your business performance with customizable dashboards
                  and detailed reports.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Custom dashboard views</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Automated reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Choose a Managed Platform?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="text-orange-600 mr-3" size={24} />
                    What You Get
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">
                        <strong>Full Configuration:</strong> We set up everything based on your business needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">
                        <strong>AI Integration:</strong> Voice and conversational AI agents connected seamlessly
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">
                        <strong>Ongoing Support:</strong> Our team handles updates, troubleshooting, and optimization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">
                        <strong>Training & Onboarding:</strong> We teach your team exactly what they need to know
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">
                        <strong>Curated Experience:</strong> Simplified interface focused on features you'll actually use
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-red-600 mr-3">✗</span>
                    What You Don't Have to Deal With
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">✗</span>
                      <span className="text-gray-700">
                        Learning complex software with hundreds of features you'll never use
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">✗</span>
                      <span className="text-gray-700">
                        Configuring integrations, webhooks, and API connections yourself
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">✗</span>
                      <span className="text-gray-700">
                        Troubleshooting technical issues and software bugs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">✗</span>
                      <span className="text-gray-700">
                        Keeping up with platform updates and new features
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">✗</span>
                      <span className="text-gray-700">
                        Paying for multiple disconnected tools and subscriptions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How It All Connects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Everyday Workflow SaaS platform is the hub that ties everything together
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Central Data Hub
                  </h3>
                  <p className="text-gray-600">
                    All your contacts, conversations, deals, and activities stored in one unified database
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Automation Engine
                  </h3>
                  <p className="text-gray-600">
                    AI agents and evergreen campaigns run directly within the platform for seamless operation
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Insights Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Real-time visibility into what's working, what's not, and where to focus your efforts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Tech Stack?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Let's set up a unified platform that actually works for your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center"
          >
            Book a Strategy Call
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
