import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AtharCo",
  description: "AtharCo Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">AtharCo — Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Effective Date: April 8, 2026</p>

      <section className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p>AtharCo is a Palestinian digital services agency based in Ramallah, serving businesses across Palestine, Jordan, and the broader MENA region. We provide web development, QR digital menus, branding, loyalty programs, WhatsApp automation, analytics dashboards, and related digital services.</p>
          <p className="mt-3">This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, our digital products, or engage with our services.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
          <h3 className="font-semibold mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Business name and contact details (phone, WhatsApp number, email)</li>
            <li>City and country of operation</li>
            <li>Service inquiry details and project requirements</li>
            <li>Payment and billing information for contracted services</li>
            <li>Content you provide for websites, menus, and branding materials</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">2.2 Information Collected Automatically</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Device information (browser type, operating system, screen resolution)</li>
            <li>IP address and approximate geographic location</li>
            <li>Pages visited, time spent, and navigation patterns</li>
            <li>Referral source and search terms used to find our website</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">2.3 Information from Third Parties</h3>
          <p>If you use our QR menu, loyalty, or analytics services, we may process data about your customers on your behalf, including order data, loyalty points, and interaction history.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide, maintain, and improve our digital services</li>
            <li>To communicate with you about projects, support, and updates</li>
            <li>To process payments and manage billing</li>
            <li>To send WhatsApp notifications related to your account or services</li>
            <li>To analyze website traffic and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Sharing</h2>
          <p>We do not sell your personal information. We may share your data only in these circumstances:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>With service providers who help us operate our business, under strict data protection agreements</li>
            <li>With your explicit consent</li>
            <li>When required by applicable law, regulation, or legal process</li>
            <li>To protect the rights, safety, or property of AtharCo, our clients, or others</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Storage and Security</h2>
          <p>Your data is stored on secure servers. We implement industry-standard technical and organizational measures to protect your information, including encrypted connections (HTTPS), access controls, and regular security reviews.</p>
          <p className="mt-3">We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by law.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
            <li><strong>Objection:</strong> Object to certain types of data processing.</li>
            <li><strong>Portability:</strong> Request your data in a structured, commonly used format.</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us using the details below. We will respond within 30 days.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. GDPR Compliance</h2>
          <p>If you are located in the European Economic Area (EEA), we process your personal data in accordance with the General Data Protection Regulation (GDPR). Our lawful bases for processing include: performance of a contract, legitimate interests, compliance with legal obligations, and your consent where applicable.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cookies and Tracking</h2>
          <p>Our website may use cookies and similar technologies to improve functionality and analyze usage. You can control cookie preferences through your browser settings. Essential cookies required for website functionality cannot be disabled.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
          <p>Our services are designed for businesses and are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on our website with a revised effective date.</p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h2>
          <p><strong>AtharCo</strong><br />Ramallah, Palestine<br />Email: <a href="mailto:ehabtahboub@gmail.com" className="text-blue-600 underline">ehabtahboub@gmail.com</a><br />WhatsApp: <a href="https://wa.me/970599488371" className="text-blue-600 underline">+970 599 488 371</a></p>
        </div>

      </section>

      <div className="mt-12 pt-6 border-t text-sm text-gray-400 flex justify-between">
        <a href="/" className="hover:text-gray-600">← Back to AtharCo</a>
        <a href="/terms" className="hover:text-gray-600">Terms of Service →</a>
      </div>
    </main>
  );
}
