const reasons = [
  {
    title: "Affordable for any size",
    description: "Enterprise POS systems charge hundreds per month for features you don't need. We price fairly based on what you actually use.",
  },
  {
    title: "Smarter than paper",
    description: "Paper menus get lost. Stamp cards get forgotten. Manual tracking misses patterns. We digitize everything so nothing falls through the cracks.",
  },
  {
    title: "No lock-in",
    description: "Month-to-month. Cancel anytime. We earn your business every month — we don't trap you in a contract.",
  },
  {
    title: "Set up for you",
    description: "You don't need to be tech-savvy. We handle the setup, customization, and training. You just use it.",
  },
  {
    title: "Works on WhatsApp",
    description: "Your customers are already on WhatsApp. Loyalty updates, order confirmations, and promotions go where they actually check.",
  },
  {
    title: "Built for this region",
    description: "We operate in Jordan and Palestine. We understand the market, the pricing, and the way restaurants actually work here.",
  },
];

export default function WhyNoqta() {
  return (
    <section id="why" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Why Noqta
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">
            Your restaurant, <span className="text-gold">upgraded</span>.
          </h2>
          <p className="text-lg text-olive max-w-2xl mx-auto leading-relaxed">
            We&apos;re not selling you software you don&apos;t understand.
            We&apos;re solving problems you deal with every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-light-olive/40 rounded-2xl p-6 border border-light-olive hover:border-gold transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-forest mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-olive leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
