import { Phone, Clock, Filter, MessageCircle, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export function VoiceAI() {
  return (
    <div>
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Voice AI Agents Trained on Your Business
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            AI-powered phone agents that answer calls, qualify leads, and book appointments
            24/7 without human intervention. Never miss another opportunity.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your 24/7 Virtual Receptionist
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Everyday Workflow's Voice AI agents handle incoming calls just like a well-trained
                receptionist. They understand context, answer questions naturally, capture lead
                information, and can even book appointments directly into your calendar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Each voice agent is custom-configured and trained on your specific business. We feed
                it your FAQs, product details, service offerings, pricing information, and typical
                customer questions so it can represent your brand accurately.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The result? Professional, consistent call handling that works around the clock and
                never takes a day off.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-600 rounded-full mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Always Available
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your AI agent answers every call instantly, day or night, weekend or holiday.
                No more missed opportunities or voicemails going unanswered.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Common Use Cases
              </h2>
              <p className="text-lg text-gray-600">
                How businesses use Voice AI to capture more leads and save time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">After-Hours Call Handling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Capture leads that call outside business hours. The AI answers, qualifies, and
                  books appointments even when your office is closed.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missed Call Rescue</h3>
                <p className="text-gray-600 leading-relaxed">
                  When your team is busy, the AI steps in to answer calls immediately. No more
                  sending valuable leads to voicemail.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Qualification & Routing</h3>
                <p className="text-gray-600 leading-relaxed">
                  The AI asks qualifying questions, gathers key information, and routes serious
                  prospects to the right team member.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">FAQ Answering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Handle common questions instantly without tying up your staff. The AI provides
                  accurate answers based on your knowledge base.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="flex items-start mb-8">
                <BookOpen className="text-orange-600 mr-4 flex-shrink-0" size={40} />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Knowledge-Based Training
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Every AI agent is connected to a private knowledge base built specifically for your business.
                    This ensures accurate, on-brand responses every time.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    We Build Your Knowledge Base From:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Your website content and service pages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Frequently asked questions and answers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Product documentation and specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">PDFs, brochures, and marketing materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Internal notes and training documents</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Pricing structures and service packages</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    The Result
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your Voice AI agent becomes an expert on your business. It can answer detailed
                    questions, explain your services, discuss pricing options, and handle objections
                    just like your best salesperson.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As your business evolves, we update the knowledge base to keep the AI current
                    and accurate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Technical Integration
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Voice AI agents are powered by advanced language models and seamlessly integrated
                with your CRM and automation systems through the Everyday Workflow platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Comes In</h3>
                <p className="text-gray-600">
                  The AI answers instantly and begins a natural conversation based on your
                  business knowledge base.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Captured</h3>
                <p className="text-gray-600">
                  Lead information, needs, and preferences are automatically logged in your
                  CRM in real-time.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Action Triggered</h3>
                <p className="text-gray-600">
                  Appointments are booked, follow-ups are scheduled, or calls are routed based
                  on your business rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            See Voice AI in Action
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule a demo to hear how our Voice AI agents can represent your business
            and capture leads around the clock.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg inline-flex items-center"
          >
            Schedule a Demo
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
