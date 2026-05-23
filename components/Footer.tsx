import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E2A3A] text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-1">Tisdale Properties LLC</p>
            <p className="text-[#F5A623] text-sm italic mb-4">
              Rooted in Jackson. Built for You.
            </p>
            <p className="text-sm leading-relaxed">
              Quality single-family homes, duplexes, and apartments across Jackson, Mississippi.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#F5A623] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://tisdaleproperties.app.doorloop.com/tenant-portal/rental-applications/listing?source=CompanyLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Available Rentals
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-3">Contact Us</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:6013451078" className="hover:text-[#F5A623] transition-colors">
                  (601) 345-1078
                </a>
              </li>
              <li>
                <a href="mailto:info@rentwithtisdale.com" className="hover:text-[#F5A623] transition-colors">
                  info@rentwithtisdale.com
                </a>
              </li>
              <li>Jackson, Mississippi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Tisdale Properties LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
