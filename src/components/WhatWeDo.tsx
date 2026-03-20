const features = [
  {
    icon: "🧠",
    title: "AI-Native",
    description:
      "Every product is built with artificial intelligence at its core — not bolted on as an afterthought.",
  },
  {
    icon: "📊",
    title: "Data-Driven",
    description:
      "We turn every transaction, every customer interaction, and every data point into actionable intelligence.",
  },
  {
    icon: "🌱",
    title: "Builder-Driven",
    description:
      "We focus on creating high-impact infrastructure where profit is a byproduct of solving genuine problems.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="about" className="bg-light-olive py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
          Technology That Creates Legacy
        </h2>
        <p className="text-lg text-olive max-w-3xl mb-16 leading-relaxed">
          Most business software is built for Silicon Valley. We build for the rest of the world.
          AtharCo is a venture hub that builds technical infrastructure to help people and businesses
          create a lasting legacy through technology that solves real-world problems.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-cream rounded-2xl p-8 border border-cream hover:border-gold transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-forest mb-3">
                {feature.title}
              </h3>
              <p className="text-olive leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
