'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Listings' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#1E2A3A] sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo-main.png"
              alt="Tisdale Properties"
              width={180}
              height={60}
              className="w-[180px] h-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-[#F5A623]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://tisdaleproperties.app.doorloop.com/tenant-portal/rental-applications/listing?source=CompanyLink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5A623] text-[#1E2A3A] text-sm font-semibold px-4 py-2 rounded-md hover:bg-amber-400 transition-colors"
            >
              View Listings
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#263548] border-t border-white/10">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium ${
                  pathname === href ? 'text-[#F5A623]' : 'text-white/80'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://tisdaleproperties.app.doorloop.com/tenant-portal/rental-applications/listing?source=CompanyLink"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#F5A623] text-[#1E2A3A] text-sm font-semibold px-4 py-2 rounded-md text-center"
            >
              View Listings
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
