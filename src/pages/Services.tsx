import { Bot, MessageSquare, Calendar, BarChart3, Phone, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export function Services() {
  return (
    <div>
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Automation & SaaS Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Everyday Workflow is your AI automation partner, not just a software vendor. We design,
            implement, and manage complete systems that save you time and increase revenue.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="flex items-start mb-8">
              <div className="bg-orange-600 rounded-xl p-4 mr-6">
                <Phone className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Voice AI Call Handling</h2>
                <div className="h-1 w-20 bg-orange-600 mb-6"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our phone-based AI agents answer calls, qualify leads, route inquiries to the right
                  team members, capture critical information, and book appointments directly into your calendar.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Every voice agent is custom-configured and trained on your specific business, products,
                  services, and frequently asked questions. The AI speaks naturally and can handle complex
                  conversations just like a well-trained receptionist.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">24/7 call answering and after-hours coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Lead qualification and intelligent routing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Direct appointment booking with calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Instant data capture and CRM logging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Natural conversation flow trained on your business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-start mb-8">
              <div className="bg-orange-600 rounded-xl p-4 mr-6">
                <MessageSquare className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Conversational AI (SMS, Web Chat, Social DM)
                </h2>
                <div className="h-1 w-20 bg-orange-600 mb-6"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our AI agents handle inbound leads, answer frequently asked questions, send appointment
                  reminders, and follow up automatically via SMS, website chat, and social media direct messages.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Each conversational AI agent is connected to a custom knowledge base built from your
                  website content, FAQs, product documentation, service descriptions, and internal notes.
                  The result is accurate, on-brand responses that save your team hours every day.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What It Handles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Instant FAQ responses across all channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Lead nurturing and qualification via text</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Automated appointment reminders and confirmations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Follow-up sequences for quotes and proposals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Knowledge base trained on your unique content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-start mb-8">
              <div className="bg-orange-600 rounded-xl p-4 mr-6">
                <Calendar className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Evergreen Marketing Automations
                </h2>
                <div className="h-1 w-20 bg-orange-600 mb-6"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Evergreen campaigns are always-running marketing systems that welcome new leads,
                  follow up on quotes, send appointment reminders, request reviews, and reactivate
                  dormant contacts automatically.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  These are "set-it-and-forget-it" systems designed to run continuously without manual
                  intervention. We build, test, launch, and continuously optimize them based on
                  performance data.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Campaign Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">New lead welcome and nurture sequences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Automated quote and proposal follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Review generation and reputation management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Reactivation campaigns for old leads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Seasonal promotions with reusable templates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-8">
              <div className="bg-orange-600 rounded-xl p-4 mr-6">
                <BarChart3 className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Everyday Workflow SaaS Platform
                </h2>
                <div className="h-1 w-20 bg-orange-600 mb-6"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Everyday Workflow Platform is a managed business operations system that provides
                  unified CRM, pipelines, automations, calendars, communication, and reporting in
                  one cohesive environment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We configure everything, integrate it with your AI agents and automations, maintain
                  the system, and provide ongoing support. You get a professional, enterprise-grade
                  platform that works seamlessly.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Unified inbox for all communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Visual pipelines and deal management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Workflow automation builder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Integrated calendar and online booking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Reputation and review management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    <span className="text-gray-700">Real-time reporting and analytics dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Integrated</h3>
                <p className="text-gray-600">
                  All services work together seamlessly in one unified system
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Managed</h3>
                <p className="text-gray-600">
                  We handle setup, configuration, and ongoing optimization
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Trained</h3>
                <p className="text-gray-600">
                  Every AI agent is trained specifically on your business
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Talk?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how Everyday Workflow can transform your business operations
              </p>
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg inline-flex items-center"
              >
                Book A Discovery Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                A brief call to see how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
