import DonationForm from '../components/DonationForm';
import { Heart, Shield, Waves } from 'lucide-react';

export default function Donate() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Support Ocean Conservation
            </h1>
            <p className="text-xl text-muted-foreground">
              Your donation directly supports marine life protection, habitat restoration, and ocean conservation efforts worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <DonationForm />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center text-foreground">
              How Your Donation Helps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">$25</h3>
                <p className="text-muted-foreground">
                  Helps clean 100 square meters of ocean from plastic waste
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">$50</h3>
                <p className="text-muted-foreground">
                  Supports monitoring and protection of endangered marine species
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">$100</h3>
                <p className="text-muted-foreground">
                  Funds coral reef restoration and marine habitat rehabilitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
              Your Trust Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're committed to transparency and ensuring every donation makes a real impact. Your contribution goes directly to ocean conservation projects and marine life protection efforts.
            </p>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-muted-foreground">
                <strong className="text-foreground">100% of your donation</strong> supports our conservation mission. We maintain full transparency in how funds are used and provide regular updates on our impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
