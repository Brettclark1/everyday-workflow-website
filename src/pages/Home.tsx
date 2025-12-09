import { ArrowRight, Bot, MessageSquare, Calendar, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from '../router';

export function Home() {
  return (
    <div>
      <section className="bg-gray-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Workflows That Run Your Business on Autopilot
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
              Everyday Workflow builds AI and automation systems using voice AI, conversational AI,
              evergreen campaigns, and a managed platform. Stop juggling tools and start growing
              your business with systems that work 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Book A Discovery Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/services"
                className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              A brief call to see how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stop Doing Everything Manually
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Too many small and medium businesses struggle with the same problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Pain Points</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">✗</span>
                  <span className="text-gray-700">Too many disconnected tools and platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">✗</span>
                  <span className="text-gray-700">Leads falling through the cracks with no follow-up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">✗</span>
                  <span className="text-gray-700">Hours wasted on manual follow-ups and data entry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">✗</span>
                  <span className="text-gray-700">Inconsistent marketing with no clear system</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Everyday Workflow Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Unified platform that connects everything</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">AI agents that follow up automatically, 24/7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Set-it-and-forget-it automations that save hours daily</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Evergreen marketing that runs on autopilot</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Everyday Workflow designs and manages an end-to-end system so you don't have to think
            about tech. Focus on your business while we handle the automation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete AI automation solutions tailored to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Bot className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voice AI & Call Handling</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Phone-based AI agents that answer calls, qualify leads, and book appointments
                24/7 without human intervention.
              </p>
              <Link
                href="/voice-ai"
                className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conversational AI & SMS/Chat</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AI-powered chat and SMS agents that handle FAQs, nurture leads, and follow up
                automatically across all channels.
              </p>
              <Link
                href="/voice-ai"
                className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evergreen Campaigns</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Always-on marketing automations for lead nurture, review requests, and
                reactivation that run 24/7 without you lifting a finger.
              </p>
              <Link
                href="/evergreen-campaigns"
                className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Platform</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Unified CRM, pipelines, automations, and reporting in one place. Fully managed
                and configured for your business.
              </p>
              <Link
                href="/saas-platform"
                className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple, strategic, and designed to get results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery & Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand your existing workflows, tools, and goals. We identify opportunities
                for automation and map out a custom system designed for your business.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build & Integrate</h3>
              <p className="text-gray-600 leading-relaxed">
                We implement AI agents, automations, and the Everyday Workflow platform.
                Everything is connected and configured to work seamlessly together.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimize & Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously tune performance, add new automations as needed, and provide
                ongoing support to ensure your systems keep delivering results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-xl">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Everyday Workflow transformed how we handle leads. The AI handles calls after
                  hours and books appointments directly into our calendar. We've captured leads
                  we would have lost before."
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah M.</p>
                <p className="text-gray-600 text-sm">Home Services Business</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "The evergreen campaigns run on autopilot and consistently bring in reviews
                  and repeat business. I spend zero time on follow-ups now and my revenue is up 30%."
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Mike T.</p>
                <p className="text-gray-600 text-sm">Dental Practice Owner</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Finally, one system that does everything. No more juggling five different tools.
                  The team manages everything and I can focus on growing the business."
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Jennifer L.</p>
                <p className="text-gray-600 text-sm">Marketing Agency Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Stop Doing Everything Manually?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's build an AI-powered system that runs your business on autopilot.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
          >
            Book A Discovery Call
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            A brief call to see how we can help.
          </p>
        </div>
      </section>
    </div>
  );
}
