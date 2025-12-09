import { Link } from '../router';
import type { NavigationItem } from '../types';

const footerLinks: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Voice & AI', href: '/voice-ai' },
  { label: 'Evergreen Campaigns', href: '/evergreen-campaigns' },
  { label: 'SaaS Platform', href: '/saas-platform' },
  { label: 'A2P Compliance', href: '/a2p-compliance' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Everyday Workflow</h3>
            <p className="text-gray-400 leading-relaxed">
              AI-powered automation and SaaS solutions that help small and medium businesses
              save time and generate more revenue through intelligent systems and workflows.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>311 N Pioneer</li>
              <li>Mesa, AZ 85203</li>
              <li>
                <a
                  href="tel:4807252275"
                  className="hover:text-white transition-colors"
                >
                  480-725-2275
                </a>
              </li>
              <li>
                <a
                  href="mailto:Hello@everydayworkflow.com"
                  className="hover:text-white transition-colors"
                >
                  Hello@everydayworkflow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Everyday Workflow LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/a2p-compliance"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              A2P Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
