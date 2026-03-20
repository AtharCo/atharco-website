export default function Footer() {
  return (
    <footer className="bg-forest py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="text-2xl font-bold text-cream">
              Atharco<span className="text-gold">.</span>
            </span>
            <p className="text-light-olive/60 text-sm mt-1">
              Where Ambition Becomes Legacy
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-light-olive/60 hover:text-gold transition-colors">
              About
            </a>
            <a href="#noqta" className="text-sm text-light-olive/60 hover:text-gold transition-colors">
              Noqta
            </a>
            <a href="#team" className="text-sm text-light-olive/60 hover:text-gold transition-colors">
              Team
            </a>
            <a href="#waitlist" className="text-sm text-light-olive/60 hover:text-gold transition-colors">
              Contact
            </a>
          </div>

          {/* Social / Contact */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/972599488371"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-light-olive/60 hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:ehabtahboub@gmail.com"
              className="text-sm text-light-olive/60 hover:text-gold transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ehab-tahboub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-light-olive/60 hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-olive/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-olive/40">
            © 2026 AtharCo Holdings. All rights reserved.
          </p>
          <p className="text-sm text-light-olive/40">
            Palestinian-Founded · AI-Powered
          </p>
        </div>
      </div>
    </footer>
  );
}
