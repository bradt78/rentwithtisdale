import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Tisdale Properties LLC — a Jackson, Mississippi rental company built on the belief that your home should feel like one.',
};

const differentiators = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Truly Local',
    body: 'We live in the same neighborhoods as our properties. We know the streets, the schools, and the community — because it\'s ours too.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Thoughtfully Upgraded',
    body: 'Every unit gets real attention — updated kitchens, clean finishes, working appliances. You deserve more than the bare minimum, and we mean that.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Actually Responsive',
    body: 'When something needs to be fixed, we fix it. We pick up the phone and answer messages. That\'s the standard we hold ourselves to.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Not a Corporation',
    body: 'We\'re a small, family-owned operation. You\'ll deal with real people who care about the outcome — not a call center or a property management app.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#1E2A3A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            About Tisdale Properties
          </h1>
          <p className="text-[#F5A623] italic text-lg">
            Rooted in Jackson. Built for You.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3A] mb-6">
              Our Story
            </h2>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Tisdale Properties is a Jackson-based rental company with a simple belief: your home
                should feel like one. We own and manage quality single-family homes, duplexes, and
                apartments across Jackson — properties we&apos;re proud of, in neighborhoods we actually
                live in.
              </p>
              <p>
                Every unit is thoughtfully upgraded because we think you deserve more than the bare
                minimum. New flooring, updated kitchens, clean bathrooms — the kinds of things that
                make a house feel like a real home.
              </p>
              <p>
                We&apos;re not a big company. We&apos;re not a real estate investment trust or a property
                management firm with hundreds of units managed by strangers in another city. We&apos;re
                your neighbors. And we run things the way we&apos;d want our own landlord to run them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3A] mb-12 text-center">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {differentiators.map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="w-12 h-12 bg-[#F5A623]/10 text-[#F5A623] rounded-xl flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1E2A3A] mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A3A] mb-4">
            Ready to Find a Home?
          </h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Browse available properties or get in touch with us directly. We&apos;d
            love to help you find the right fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tisdaleproperties.app.doorloop.com/tenant-portal/rental-applications/listing?source=CompanyLink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5A623] hover:bg-amber-400 text-[#1E2A3A] font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              View Listings
            </a>
            <Link
              href="/contact"
              className="bg-[#1E2A3A] hover:bg-[#263548] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
