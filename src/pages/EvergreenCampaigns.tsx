import { Repeat, Users, Star, RefreshCw, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export function EvergreenCampaigns() {
  return (
    <div>
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Always-On Marketing That Works While You Sleep
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Evergreen campaigns are automated marketing systems that continuously welcome leads,
            follow up on quotes, generate reviews, and reactivate dormant contacts without any
            manual work.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Set It and Forget It
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evergreen campaigns run continuously in the background. Once launched, they operate
                on autopilot, nurturing leads, requesting reviews, following up on quotes, and
                bringing back old customers without you lifting a finger.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These aren't one-off email blasts. They're intelligent, multi-step sequences that
                adapt based on recipient behavior. If someone opens but doesn't respond, the system
                automatically adjusts the next touchpoint.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Everyday Workflow builds, tests, launches, and continuously optimizes your evergreen
                campaigns based on real performance data.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-600 rounded-full mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                24/7 Marketing Engine
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your campaigns work around the clock, engaging prospects and customers at the
                perfect moment, every time.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Campaign Types We Build
              </h2>
              <p className="text-lg text-gray-600">
                Automated sequences designed to drive measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">New Lead Nurture</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome new leads with a series of educational messages, value-driven content,
                  and timely follow-ups designed to build trust and move them toward a decision.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Instant welcome message</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Educational content sequence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Timed call-to-action messages</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quote Follow-Up</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Automatically follow up on estimates and proposals with perfectly timed messages
                  that answer objections and encourage decisions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Quote confirmation message</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Strategic follow-up sequence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Urgency and scarcity messaging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Star className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Review Generation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Request reviews from satisfied customers at the perfect moment with automated
                  campaigns that make it easy to leave feedback.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Post-service review request</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>One-click review links</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Gentle reminder follow-ups</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reactivation Campaigns</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bring dormant leads and past customers back to life with targeted win-back
                  campaigns that offer value and incentives.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Targeted by inactivity period</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Special offers and incentives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Re-engagement sequences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seasonal Promotions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Templated campaigns for holidays and seasonal offers that can be deployed
                  year after year with minimal effort.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Holiday and event campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Reusable templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Automatic scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-orange-600 transition-colors">
                <div className="bg-gray-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Retention</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Keep existing customers engaged with regular check-ins, helpful tips, and
                  exclusive offers designed to increase lifetime value.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Regular touchpoint messages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Value-added content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Loyalty incentives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Outcome-Focused Results
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                Evergreen campaigns aren't just about sending messages. They're about driving
                measurable business outcomes.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
                  <p className="text-gray-900 font-semibold mb-2">More Booked Appointments</p>
                  <p className="text-gray-600 text-sm">
                    Automated follow-ups ensure no lead falls through the cracks
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">5x</div>
                  <p className="text-gray-900 font-semibold mb-2">More Online Reviews</p>
                  <p className="text-gray-600 text-sm">
                    Systematic review requests at the perfect moment
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
                  <p className="text-gray-900 font-semibold mb-2">Better Customer Retention</p>
                  <p className="text-gray-600 text-sm">
                    Regular touchpoints keep your business top of mind
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How We Build Your Campaigns
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analyze</h3>
                <p className="text-gray-600">
                  We study your customer journey and identify the best opportunities for
                  automated engagement.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Build</h3>
                <p className="text-gray-600">
                  We create multi-step sequences with compelling copy, perfect timing, and
                  smart conditional logic.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Test</h3>
                <p className="text-gray-600">
                  We test message timing, copy variations, and engagement paths to ensure
                  optimal performance.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimize</h3>
                <p className="text-gray-600">
                  We continuously monitor performance and refine campaigns based on real
                  engagement data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Marketing Engine?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's create evergreen campaigns that work 24/7 to grow your business.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg inline-flex items-center"
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
