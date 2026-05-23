import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Available Rentals',
  description:
    'Browse available homes, duplexes, and apartments for rent in Jackson, Mississippi from Tisdale Properties.',
};

const PORTAL_URL =
  'https://tisdaleproperties.app.doorloop.com/tenant-portal/rental-applications/listing?source=CompanyLink';

const propertyTypes = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21H15v-6H9v6H3V9.75z" />
      </svg>
    ),
    label: 'Single-Family Homes',
    description: 'Standalone homes with yards, driveways, and room to spread out.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 21v-3.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V21" />
      </svg>
    ),
    label: 'Duplexes',
    description: 'The feel of a house with a bit more privacy and value.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h1v11H4zm15 0h1v11h-1zM9 10h6v11H9z" />
      </svg>
    ),
    label: 'Apartments',
    description: 'Updated units in well-maintained buildings across Jackson.',
  },
];

export default function ListingsPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-[#1E2A3A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Available Rentals
          </h1>
          <p className="text-white/60">
            Jackson, Mississippi
          </p>
        </div>
      </div>

      {/* Main CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3A] mb-4">
              See What&apos;s Available Now
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our current available properties — with photos, pricing, and floor plans — are listed on
              our rental portal. You can browse everything and submit an application, all in one place.
            </p>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#F5A623] hover:bg-amber-400 text-[#1E2A3A] font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              View Current Listings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="mt-4 text-slate-400 text-sm">
              Opens our secure rental portal &mdash; no account required to browse.
            </p>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1E2A3A] mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {propertyTypes.map(({ icon, label, description }) => (
              <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#F5A623]/10 text-[#F5A623] rounded-xl flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-semibold text-[#1E2A3A] mb-1">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions strip */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-slate-200 rounded-2xl px-8 py-8">
            <div>
              <h3 className="font-bold text-[#1E2A3A] text-lg mb-1">Have questions before you apply?</h3>
              <p className="text-slate-500 text-sm">We&apos;re easy to reach and happy to help you find the right fit.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:6013451078"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-[#1E2A3A] text-[#1E2A3A] font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (601) 345-1078
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1E2A3A] hover:bg-[#263548] text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
