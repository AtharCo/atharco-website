import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Thiqa (ثقة)",
  description: "Thiqa Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Thiqa (ثقة) — Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Effective Date: April 8, 2026</p>

      <section className="space-y-8 text-gray-700 leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p>Thiqa (ثقة) is a restaurant reputation management service operated by AtharCo, based in Ramallah, Palestine. We help restaurants across Jordan, Palestine, and the MENA region monitor, analyze, and improve their online reputation on platforms such as Google Reviews, Talabat, and Careem.</p>
          <p className="mt-3">This Privacy Policy explains how we collect, use, store, and protect information when you use our website, subscribe to our services, or interact with us.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
          <h3 className="font-semibold mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Restaurant name and business details</li>
            <li>Contact information (name, phone, WhatsApp number, email)</li>
            <li>Google Business Profile URL or listing details</li>
            <li>Social media and delivery platform account details (Talabat, Careem)</li>
            <li>Payment and billing information</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">2.2 Information from Public Sources</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google Reviews (ratings, review text, reviewer display names)</li>
            <li>Ratings and reviews on delivery platforms (Talabat, Careem)</li>
            <li>Publicly visible social media mentions and reviews</li>
            <li>Competitor review data that is publicly available</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">2.3 Information Collected Automatically</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Device and browser information</li>
            <li>IP address and approximate location</li>
            <li>Pages visited and interaction patterns</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To generate diagnostic reports analyzing your restaurant&apos;s online reputation</li>
            <li>To prepare professional responses to customer reviews on your behalf</li>
            <li>To provide monitoring reports and progress tracking</li>
            <li>To send reports and updates via WhatsApp</li>
            <li>To compare your ratings with competitors in your area</li>
            <li>To process payments and manage subscriptions</li>
            <li>To communicate with you about your account and our services</li>
            <li>To improve our service quality and develop new features</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. WhatsApp Communications</h2>
          <p>Thiqa uses WhatsApp as a primary communication channel. By subscribing to our services, you consent to receiving diagnostic reports, monitoring reports, service updates, and responses to your inquiries. You may opt out of non-essential communications at any time.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Sharing</h2>
          <p>We do not sell your personal or business information. We may share data only with AtharCo for operational support, with service providers under data protection agreements, when you authorize us to act on your behalf on public platforms, or when required by law.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Storage and Security</h2>
          <p>We store your data on secure servers with encrypted communications, access controls, and regular security assessments. We retain your data for the duration of your subscription and a reasonable period afterward. You may request deletion at any time.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Access:</strong> Request a copy of the data we hold about your business.</li>
            <li><strong>Correction:</strong> Request correction of any inaccurate information.</li>
            <li><strong>Deletion:</strong> Request deletion of your data.</li>
            <li><strong>Objection:</strong> Object to specific types of data processing.</li>
            <li><strong>Portability:</strong> Request your data in a structured format.</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw consent for non-essential communications at any time.</li>
          </ul>
          <p className="mt-3">We will respond within 30 days.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. GDPR Compliance</h2>
          <p>If you are located in the EEA, we process your data in accordance with GDPR. Our lawful bases include performance of a contract, legitimate interests, legal obligations, and your consent.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Third-Party Platforms</h2>
          <p>Our service involves interacting with third-party platforms (Google, Talabat, Careem). We collect only publicly available information and do not access private account data without your explicit authorization.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Active subscribers will be notified of significant changes via WhatsApp or email.</p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h2>
          <p><strong>Thiqa (ثقة) — by AtharCo</strong><br />Ramallah, Palestine<br />Email: <a href="mailto:ehabtahboub@gmail.com" className="text-blue-600 underline">ehabtahboub@gmail.com</a><br />WhatsApp: <a href="https://wa.me/970599488371" className="text-blue-600 underline">+970 599 488 371</a></p>
        </div>

      </section>

      <div className="mt-12 pt-6 border-t text-sm text-gray-400 flex justify-between">
        <a href="/" className="hover:text-gray-600">← Back to Thiqa</a>
        <a href="/thiqa/terms" className="hover:text-gray-600">Terms of Service →</a>
      </div>
    </main>
  );
}
