import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Contact Form Data:', formData);

    window.location.href = '/calendar';
  };

  return (
    <div>
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build Your AI Automation System
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to stop doing everything manually? Tell us about your business and we'll
            schedule a discovery call to discuss your automation needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Fill out the form and we'll reach out to discuss how Everyday Workflow can help
                you save time and grow revenue with AI-powered automations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-3 mr-4">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a
                      href="tel:4807252275"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      480-725-2275
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-3 mr-4">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:Hello@everydayworkflow.com"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      Hello@everydayworkflow.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-lg p-3 mr-4">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">311 N Pioneer</p>
                    <p className="text-gray-700">Mesa, AZ 85203</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      We'll respond within 1-2 business days
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      Schedule a 30-minute discovery call at your convenience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      Discuss your current workflows and automation opportunities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      Get a custom proposal tailored to your business
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request A Discovery Call
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Company LLC"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell Us About Your Automation Needs
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="What processes are taking up most of your time?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all font-semibold text-lg"
                  >
                    Submit & Book Your Call
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Or call us directly at{' '}
                    <a href="tel:4807252275" className="text-orange-600 hover:text-orange-700 font-semibold">
                      480-725-2275
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions Before Your Discovery Call
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How much does it cost?
              </h3>
              <p className="text-gray-700">
                Pricing varies based on your specific needs and the complexity of your automations.
                We'll provide a custom quote during your discovery call.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How long does implementation take?
              </h3>
              <p className="text-gray-700">
                Most clients are up and running within 2-4 weeks. Complex implementations may take
                longer, but we'll provide a clear timeline during your discovery call.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do you work with my existing tools?
              </h3>
              <p className="text-gray-700">
                Yes. We integrate with most popular business tools and platforms, or we can migrate
                you to the Everyday Workflow unified platform if that makes more sense.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What if I need changes later?
              </h3>
              <p className="text-gray-700">
                We provide ongoing support and optimization. As your business evolves, we'll adjust
                and add automations to match your changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
