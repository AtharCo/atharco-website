"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const { error: dbError } = await supabase.from("waitlist").insert({
      restaurant_name: formData.get("business") as string,
      city: formData.get("city") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      notes: formData.get("needs") as string,
    });

    if (dbError) {
      setError("Something went wrong. Please try again or contact us directly on WhatsApp.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-light-olive py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">
            Request a Demo
          </h2>
          <p className="text-lg text-olive leading-relaxed">
            Tell us about your restaurant and what you need.
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-cream rounded-2xl p-10 text-center border border-gold">
            <h3 className="text-2xl font-bold text-forest mb-2">We&apos;ll be in touch!</h3>
            <p className="text-olive mb-4">
              Thanks for reaching out. We&apos;ll contact you within 24 hours to schedule a demo.
            </p>
            <a
              href="https://wa.me/972599488371"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-gold text-cream px-6 py-3 rounded-lg font-semibold hover:bg-forest transition-colors"
            >
              Or chat with us now on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-8 md:p-10 border border-cream">
            <div className="space-y-5">
              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-forest mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  placeholder="Your restaurant or café name"
                  className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-forest mb-2">
                    City / Country *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="e.g. Amman, Ramallah, Nablus..."
                    className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-forest mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+962 / +970 / +972"
                    className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-forest mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="needs" className="block text-sm font-semibold text-forest mb-2">
                  What do you need? (optional)
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  rows={3}
                  placeholder="e.g. QR menu, loyalty program, dashboard..."
                  className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                />
              </div>
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-gold text-cream py-4 rounded-lg text-lg font-semibold hover:bg-forest transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Request a Demo"}
            </button>

            <p className="text-center text-sm text-olive mt-4">
              Or reach us directly on{" "}
              <a href="https://wa.me/972599488371" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-forest transition-colors font-medium">
                WhatsApp
              </a>
              {" "}or{" "}
              <a href="mailto:ehabtahboub@gmail.com" className="text-gold hover:text-forest transition-colors font-medium">
                Email
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
