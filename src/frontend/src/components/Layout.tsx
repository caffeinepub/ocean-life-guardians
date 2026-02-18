import { Link, useNavigate } from '@tanstack/react-router';
import { Waves, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/conservation', label: 'Conservation' },
    { to: '/donate', label: 'Donate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/assets/generated/conservation-icon.dim_256x256.png" 
                alt="Ocean Life Guardians" 
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <span className="font-heading text-xl font-bold text-primary">
                Ocean Life Guardians
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  activeProps={{ className: 'text-primary' }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => navigate({ to: '/donate' })}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-ocean hover:shadow-lg"
              >
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  activeProps={{ className: 'text-primary' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  navigate({ to: '/donate' });
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all"
              >
                Donate Now
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/assets/generated/conservation-icon.dim_256x256.png" 
                  alt="Ocean Life Guardians" 
                  className="w-8 h-8"
                />
                <span className="font-heading text-lg font-bold text-primary">
                  Ocean Life Guardians
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Dedicated to protecting marine life and preserving our oceans for future generations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div>
              <h3 className="font-heading font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                Every donation helps protect endangered sea animals, restore coral reefs, and combat ocean pollution.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ocean Life Guardians. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Built with <Heart size={14} className="text-red-500 fill-red-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'ocean-life-guardians'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
