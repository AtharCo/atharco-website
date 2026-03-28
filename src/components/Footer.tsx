export default function Footer() {
  return (
    <footer className="bg-forest py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-bold text-cream">
              Atharco<span className="text-gold">.</span>
            </span>
            <p className="text-light-olive/60 text-sm mt-1">
              Where Ambition Becomes Legacy
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm text-light-olive/60 hover:text-gold transition-colors">Services</a>
            <a href="#why" className="text-sm text-light-olive/60 hover:text-gold transition-colors">Why Noqta</a>
            <a href="#team" className="text-sm text-light-olive/60 hover:text-gold transition-colors">Team</a>
            <a href="#contact" className="text-sm text-light-olive/60 hover:text-gold transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/972599488371" target="_blank" rel="noopener noreferrer" className="text-sm text-light-olive/60 hover:text-gold transition-colors">WhatsApp</a>
            <a href="mailto:ehabtahboub@gmail.com" className="text-sm text-light-olive/60 hover:text-gold transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/ehab-tahboub/" target="_blank" rel="noopener noreferrer" className="text-sm text-light-olive/60 hover:text-gold transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-olive/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-olive/40">&copy; 2026 AtharCo Holdings. All rights reserved.</p>
          <p className="text-sm text-light-olive/40">Palestinian-Founded &middot; Jordan &amp; Palestine</p>
        </div>
      </div>
    </footer>
  );
}
