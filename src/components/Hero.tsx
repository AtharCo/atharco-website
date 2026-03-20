export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Tagline */}
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-6">
          Where Ambition Becomes Legacy
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-forest leading-tight mb-8">
          Scalable Tech{" "}
          <span className="text-gold">Built for Impact</span>
          <span className="text-gold">.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-olive max-w-2xl mx-auto mb-12 leading-relaxed">
          AtharCo designs and builds AI-native platforms that transform how
          businesses operate — starting with restaurants, expanding across MENA.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#noqta"
            className="bg-gold text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest transition-colors"
          >
            Meet Noqta →
          </a>
          <a
            href="#about"
            className="border-2 border-forest text-forest px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest hover:text-cream transition-colors"
          >
            Learn More ↓
          </a>
        </div>


      </div>
    </section>
  );
}
