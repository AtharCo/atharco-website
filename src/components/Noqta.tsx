const features = [
  {
    title: "Build Your Own POS",
    description:
      "A modular ecosystem of microservices. Assemble management solutions tailored to your specific needs, no code required.",
  },
  {
    title: "Smart Loyalty System",
    description:
      "Automated loyalty programs that bring customers back — designed to maximize repeat visits and revenue per customer.",
  },
  {
    title: "AI That Actually Helps",
    description:
      "Predict which customers might stop coming back. Find out which menu items to promote. Know what to prepare before the rush. Noqta analyzes your data and tells you what to do with it.",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Know your best-selling items, your peak hours, and your most valuable customers.",
  },
  {
    title: "WhatsApp-Native",
    description:
      "Order notifications, loyalty updates, and marketing campaigns — all through the app your customers already use.",
  },
  {
    title: "Multi-Location Ready",
    description:
      "One dashboard for all your branches. Centralized menu, decentralized operations.",
  },
];

export default function Noqta() {
  return (
    <section id="noqta" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">
            Meet <span className="text-gold">Noqta</span>
          </h2>
          <p className="text-lg text-olive max-w-2xl mx-auto leading-relaxed">
            The AI-Powered POS Platform for Restaurants. Owners no longer have to change their business
            workflow to accommodate a service provider — they build the software to fit their own workflow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-light-olive/40 rounded-2xl p-6 border border-light-olive hover:border-gold transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-forest mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-olive leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA - Beta badge moved here per Arafat's feedback */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-light-olive text-forest px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            Now Accepting Beta Partners
          </div>
          <br />
          <a
            href="#waitlist"
            className="inline-block bg-gold text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest transition-colors"
          >
            Join the Noqta Waitlist →
          </a>
          <p className="text-sm text-olive mt-4">
            Currently in beta with select restaurant partners. Launching broadly in 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
