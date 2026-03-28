export default function Impact() {
  return (
    <section className="bg-forest py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Our Origin
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Palestinian-Founded. Regionally Focused.
          </h2>
          <p className="text-lg text-light-olive/70 max-w-2xl mx-auto leading-relaxed">
            AtharCo was founded in Ramallah with a simple belief: local businesses deserve
            technology that actually fits how they work. We operate across Jordan and Palestine,
            building tools for the restaurants and cafes that power our communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "Jordan & Palestine", label: "Where We Operate" },
            { value: "F&B", label: "Our Focus" },
            { value: "Month-to-month", label: "No Contracts" },
            { value: "2026", label: "Founded" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gold mb-1">{stat.value}</p>
              <p className="text-sm text-light-olive/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
