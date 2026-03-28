export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-6">
          Powered by Noqta
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-forest leading-tight mb-8">
          Digital tools your restaurant{" "}
          <span className="text-gold">actually needs</span>
          <span className="text-gold">.</span>
        </h1>

        <p className="text-lg md:text-xl text-olive max-w-2xl mx-auto mb-12 leading-relaxed">
          QR menus. Loyalty programs. Staff dashboards. WhatsApp automation.
          All set up for you — no tech skills required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gold text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest transition-colors"
          >
            Request a Demo
          </a>
          <a
            href="#services"
            className="border-2 border-forest text-forest px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest hover:text-cream transition-colors"
          >
            See Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
