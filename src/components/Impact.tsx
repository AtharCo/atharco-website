export default function Impact() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-forest rounded-3xl p-12 md:p-16 text-center">
          {/* Section Header */}
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Our Origin
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
            Palestinian-Founded<span className="text-gold">.</span> MENA-Focused<span className="text-gold">.</span> Globally Ambitious<span className="text-gold">.</span>
          </h2>
          <p className="text-lg text-light-olive max-w-2xl mx-auto leading-relaxed mb-10">
            AtharCo was founded in Ramallah with a simple belief: the businesses that power
            local economies deserve the same quality of technology that Fortune 500 companies
            get. We measure success not just in revenue — but in local businesses strengthened
            and communities connected through better technology.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-gold">MENA</div>
              <div className="text-sm text-light-olive mt-1">Target Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">F&B</div>
              <div className="text-sm text-light-olive mt-1">First Vertical</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">AI</div>
              <div className="text-sm text-light-olive mt-1">Core Technology</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">2026</div>
              <div className="text-sm text-light-olive mt-1">Launch Year</div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
