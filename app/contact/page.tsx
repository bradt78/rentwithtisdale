import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Tisdale Properties LLC in Jackson, Mississippi. Call, email, or send us a message.',
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '(601) 345-1078',
    href: 'tel:6013451078',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'info@rentwithtisdale.com',
    href: 'mailto:info@rentwithtisdale.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Jackson, Mississippi',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#1E2A3A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Contact Us
          </h1>
          <p className="text-white/60">
            We&apos;re real people who respond quickly. Reach out any time.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-[#1E2A3A] mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Right: info */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-2xl p-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#1E2A3A] mb-1">
                  Tisdale Properties LLC
                </h3>
                <p className="text-[#F5A623] text-sm italic">
                  Rooted in Jackson. Built for You.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#F5A623]/10 text-[#F5A623] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-[#1E2A3A] font-medium text-sm hover:text-[#F5A623] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#1E2A3A] font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-slate-500 text-sm leading-relaxed">
                  Prefer to apply directly? Browse our listings and click{' '}
                  <strong className="text-[#1E2A3A]">Apply Now</strong> on any available property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
