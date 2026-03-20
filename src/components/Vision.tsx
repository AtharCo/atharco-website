const milestones = [
  {
    year: "2026",
    title: "Launch",
    description: "Noqta launches. First restaurant partners onboarded across Palestine and Jordan.",
  },
  {
    year: "2027",
    title: "Expand",
    description: "MENA expansion. App marketplace opens. Multi-vertical growth begins.",
  },
  {
    year: "2028",
    title: "Scale",
    description: "Platform at scale. Thousands of businesses. A complete AI ecosystem.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="bg-forest py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
          The Vision
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
          Where We&apos;re Going
        </h2>
        <p className="text-lg text-light-olive max-w-3xl mb-16 leading-relaxed">
          Noqta is just the beginning. AtharCo is building a portfolio of AI-native
          platforms for local economies across MENA. Restaurants today. Retail tomorrow.
          The businesses that power local economies deserve world-class technology. We&apos;re building it.
        </p>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone) => (
            <div key={milestone.year}>
              <div className="bg-olive/20 rounded-2xl p-8 border border-olive/30 h-full flex flex-col">
                <span className="text-gold text-3xl font-bold">{milestone.year}</span>
                <h3 className="text-xl font-bold text-cream mt-3 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-light-olive leading-relaxed flex-grow">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
