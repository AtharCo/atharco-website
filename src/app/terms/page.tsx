import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AtharCo",
  description: "AtharCo Terms of Service — the rules governing use of our products and services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">AtharCo — Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Effective Date: April 8, 2026</p>

      <section className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p>These Terms of Service govern your use of the AtharCo website, digital products, and services. AtharCo is a Palestinian digital services agency based in Ramallah, offering web development, QR digital menus, branding, loyalty programs, WhatsApp automation, analytics, and related services to businesses in Palestine, Jordan, and the MENA region.</p>
          <p className="mt-3">By accessing our website or using our services, you agree to these Terms.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Definitions</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>&quot;AtharCo,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;</strong> refers to AtharCo, based in Ramallah, Palestine.</li>
            <li><strong>&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;</strong> refers to the business or individual using our services.</li>
            <li><strong>&quot;Services&quot;</strong> refers to all digital products, platforms, and professional services offered by AtharCo.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Services</h2>
          <p>AtharCo provides digital services including but not limited to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>QR digital menus and online ordering systems</li>
            <li>Customer loyalty programs with WhatsApp notifications</li>
            <li>Staff dashboards and business analytics</li>
            <li>WhatsApp automation for orders and promotions</li>
            <li>Website and landing page design and development</li>
            <li>Branding and visual identity services</li>
            <li>Inventory and expense tracking tools</li>
            <li>Reputation management services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Client Obligations</h2>
          <p>As a client, you agree to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Provide accurate and complete information when engaging our services</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not attempt to reverse-engineer, copy, or redistribute our software or designs</li>
            <li>Maintain the confidentiality of any account credentials we provide</li>
            <li>Pay all agreed fees in a timely manner as outlined in your service agreement</li>
            <li>Ensure that any content you provide does not infringe third-party rights</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
          <p>All designs, code, software, and creative materials developed by AtharCo remain our intellectual property until full payment is received, unless otherwise agreed in writing. Upon full payment, ownership of custom deliverables transfers to the client as specified in the project agreement.</p>
          <p className="mt-3">AtharCo retains the right to use completed work in our portfolio and marketing materials unless the client requests otherwise in writing.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Payment Terms</h2>
          <p>Payment terms are as specified in the individual project or service agreement. Unless otherwise agreed:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Invoices are due within 14 days of issuance.</li>
            <li>Late payments may result in a suspension of services.</li>
            <li>All prices are quoted in the currency specified in the agreement.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Service Availability</h2>
          <p>We strive to maintain uninterrupted access to our digital products. However, we do not guarantee 100% uptime. We will make reasonable efforts to notify clients in advance of planned downtime.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, AtharCo shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability for any claim shall not exceed the total fees paid by the client in the 12 months preceding the claim.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Termination</h2>
          <p>Either party may terminate a service agreement with 30 days&apos; written notice. AtharCo reserves the right to suspend or terminate services immediately if the client violates these Terms. Upon termination, the client is responsible for any outstanding payments.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Confidentiality</h2>
          <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of the service agreement.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Dispute Resolution</h2>
          <p>Any disputes shall first be addressed through good-faith negotiation. If unresolved, disputes shall be resolved through arbitration or the competent courts, as agreed by both parties.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Governing Law</h2>
          <p>These Terms are governed by the applicable laws of Palestine. Where Palestinian law does not address a specific matter, internationally recognized commercial practices shall apply.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. We will notify active clients of significant changes via email or WhatsApp.</p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Contact Us</h2>
          <p><strong>AtharCo</strong><br />Ramallah, Palestine<br />Email: <a href="mailto:ehabtahboub@gmail.com" className="text-blue-600 underline">ehabtahboub@gmail.com</a><br />WhatsApp: <a href="https://wa.me/970599488371" className="text-blue-600 underline">+970 599 488 371</a></p>
        </div>

      </section>

      <div className="mt-12 pt-6 border-t text-sm text-gray-400 flex justify-between">
        <a href="/" className="hover:text-gray-600">← Back to AtharCo</a>
        <a href="/privacy" className="hover:text-gray-600">Privacy Policy →</a>
      </div>
    </main>
  );
}
