import Link from 'next/link';
import Image from 'next/image';

const PORTAL_URL =
  'https://tisdaleproperties.app.doorloop.com/tenant-portal/rental-applications/listing?source=CompanyLink';

const propertyTypes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21H15v-6H9v6H3V9.75z" />
      </svg>
    ),
    label: 'Single-Family Homes',
    description: 'Standalone homes with yards and driveways in established Jackson neighborhoods.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 21v-3.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V21" />
      </svg>
    ),
    label: 'Duplexes',
    description: 'The comfort of a house with added privacy and great value.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h1v11H4zm15 0h1v11h-1zM9 10h6v11H9z" />
      </svg>
    ),
    label: 'Apartments',
    description: 'Updated units in well-maintained buildings across Jackson.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1E2A3A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F5A623 0, #F5A623 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            {/* Left: text */}
            <div className="max-w-xl">
              <span className="inline-block bg-[#F5A623]/20 text-[#F5A623] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                Jackson, Mississippi
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Rooted in Jackson.
                <br />
                <span className="text-[#F5A623]">Built for You.</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10">
                Quality homes in neighborhoods we actually live in. We&apos;re not a
                big company — we&apos;re your neighbors.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5A623] hover:bg-amber-400 text-[#1E2A3A] font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
                >
                  View Available Rentals
                </a>
                <Link
                  href="/contact"
                  className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: icon */}
            <div className="flex justify-center md:justify-end shrink-0">
              <Image
                src="/images/icon.png"
                alt="Tisdale Properties icon"
                width={300}
                height={300}
                className="w-48 sm:w-64 md:w-[300px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#F5A623]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[#1E2A3A] text-sm font-medium">
            {[
              'Locally Owned & Operated',
              'Thoughtfully Upgraded Homes',
              'Responsive Management',
              'Jackson Neighborhoods We Know',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2A3A] mb-5">
              A Different Kind of Landlord
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Tisdale Properties is a Jackson-based rental company with a simple belief: your home
              should feel like one. We own and manage quality single-family homes, duplexes, and
              apartments across Jackson — properties we&apos;re proud of, in neighborhoods we actually
              live in.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#F5A623] font-semibold hover:gap-3 transition-all text-sm"
            >
              Learn more about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2A3A] mb-3">
              What We Offer
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Single-family homes, duplexes, and apartments — all thoughtfully maintained across Jackson.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {propertyTypes.map(({ icon, label, description }) => (
              <div key={label} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-[#F5A623]/10 text-[#F5A623] rounded-xl flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="font-semibold text-[#1E2A3A] mb-2">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-amber-400 text-[#1E2A3A] font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Browse Available Rentals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E2A3A] rounded-2xl px-8 py-14 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Next Home?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Browse our current listings or reach out directly — we respond
              fast and are happy to answer any questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5A623] hover:bg-amber-400 text-[#1E2A3A] font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                View Listings
              </a>
              <Link
                href="/contact"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
