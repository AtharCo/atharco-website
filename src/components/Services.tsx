const services = [
  {
    title: "QR Digital Menu & Ordering",
    description: "Replace paper menus with a live digital menu. Customers scan, browse, and order from their phone. Orders go straight to your staff.",
  },
  {
    title: "Loyalty Program",
    description: "Digital points system that brings customers back. Automatic tracking, WhatsApp notifications, and reward redemption — no stamp cards needed.",
  },
  {
    title: "Staff Dashboard & Analytics",
    description: "See your orders, revenue, top-selling items, and peak hours in real time. Replace pen-and-paper tracking with one clean screen.",
  },
  {
    title: "WhatsApp Automation",
    description: "Automated order confirmations, promotional messages, and customer engagement — all through the app your customers already use.",
  },
  {
    title: "Website & Landing Page",
    description: "A professional single-page website for your restaurant. Menu, location, contact info, social links. Mobile-first, looks great on any device.",
  },
  {
    title: "Inventory & Expense Tracking",
    description: "Track daily expenses, ingredient costs, and food cost percentages. Know exactly where your money goes — digitally, not on napkins.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-light-olive py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
          What We Build For You
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
          Everything your restaurant needs to go digital
        </h2>
        <p className="text-lg text-olive max-w-3xl mb-16 leading-relaxed">
          Pick what you need. We set it up. You run your business.
          No subscriptions you don&apos;t use, no features you don&apos;t need.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-cream rounded-2xl p-8 border border-cream hover:border-gold transition-all hover:shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-bold text-forest mb-3">
                {service.title}
              </h3>
              <p className="text-olive leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cream rounded-2xl p-8 border border-gold">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-forest mb-2">Every restaurant is different</h3>
              <p className="text-olive">
                Pick one service or combine several — we tailor everything to fit your needs and budget. 
                Tell us what you&apos;re looking for and we&apos;ll put together a custom package.
              </p>
            </div>
            <a href="#contact" className="shrink-0 bg-gold text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
