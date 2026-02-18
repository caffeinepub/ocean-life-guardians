import { useNavigate } from '@tanstack/react-router';
import { Waves, Fish, Heart, Shield } from 'lucide-react';
import MarineLifeGallery from '../components/MarineLifeGallery';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden wave-divider">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-ocean.dim_1920x600.png"
            alt="Ocean conservation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Protect Our Oceans
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            Join us in saving marine life and preserving the beauty of our oceans for future generations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate({ to: '/donate' })}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-ocean hover:shadow-xl"
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate({ to: '/conservation' })}
              className="bg-card text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all border-2 border-border"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to protecting marine ecosystems and the incredible creatures that call our oceans home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-ocean transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Ocean Conservation</h3>
              <p className="text-muted-foreground">
                Protecting marine habitats and reducing pollution to ensure healthy oceans for all life.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-ocean transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Fish className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Wildlife Protection</h3>
              <p className="text-muted-foreground">
                Safeguarding endangered species and their habitats through research and conservation efforts.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-ocean transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Ecosystem Restoration</h3>
              <p className="text-muted-foreground">
                Rebuilding coral reefs and marine ecosystems to restore balance to our oceans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Life Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Who We're Protecting
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the incredible marine species that depend on our conservation efforts
            </p>
          </div>
          <MarineLifeGallery />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your donation directly supports marine conservation projects and helps protect endangered sea life
          </p>
          <button
            onClick={() => navigate({ to: '/donate' })}
            className="bg-primary-foreground text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/90 transition-all shadow-lg"
          >
            Start Saving Lives
          </button>
        </div>
      </section>
    </div>
  );
}
