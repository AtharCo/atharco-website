"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const { error: dbError } = await supabase.from("waitlist").insert({
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      restaurant_name: formData.get("restaurant") as string,
      city: formData.get("city") as string,
    });

    if (dbError) {
      setError("Something went wrong. Please try again or contact us directly.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="waitlist" className="bg-light-olive py-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Get Early Access
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">
            Join the Noqta Waitlist
          </h2>
          <p className="text-lg text-olive leading-relaxed">
            Be among the first restaurants to experience AI-powered POS management.
            We&apos;re onboarding beta partners now.
          </p>
        </div>

        {submitted ? (
          /* Success State */
          <div className="bg-cream rounded-2xl p-10 text-center border border-gold">
            <h3 className="text-2xl font-bold text-forest mb-2">You&apos;re on the list!</h3>
            <p className="text-olive">
              We&apos;ll be in touch soon. In the meantime, feel free to reach out directly:
            </p>
            <a
              href="https://wa.me/972599488371"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gold text-cream px-6 py-3 rounded-lg font-semibold hover:bg-forest transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-8 md:p-10 border border-cream">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-forest mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
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
                  placeholder="+972 5XX XXX XXX"
                  className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="restaurant" className="block text-sm font-semibold text-forest mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="restaurant"
                  name="restaurant"
                  required
                  placeholder="Your restaurant or café"
                  className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-forest mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="Your city"
                  className="w-full px-4 py-3 rounded-lg border border-light-olive bg-cream text-forest placeholder:text-olive/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-gold text-cream py-4 rounded-lg text-lg font-semibold hover:bg-forest transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Join the Waitlist →"}
            </button>

            <p className="text-center text-sm text-olive mt-4">
              Or reach out directly on{" "}
              <a
                href="https://wa.me/972599488371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-forest transition-colors font-medium"
              >
                WhatsApp
              </a>{" "}
              or{" "}
              <a
                href="mailto:ehabtahboub@gmail.com"
                className="text-gold hover:text-forest transition-colors font-medium"
              >
                Email
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
