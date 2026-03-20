"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Noqta", href: "#noqta" },
    { label: "Vision", href: "#vision" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#waitlist" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-light-olive">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-forest">
          Atharco<span className="text-gold">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-olive hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="bg-gold text-cream px-5 py-2 rounded-lg text-sm font-semibold hover:bg-forest transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-forest"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-light-olive px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-olive hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="block bg-gold text-cream px-5 py-2 rounded-lg text-sm font-semibold text-center hover:bg-forest transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
