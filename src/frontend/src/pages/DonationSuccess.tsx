import { useNavigate } from '@tanstack/react-router';
import { CheckCircle, Heart, Home } from 'lucide-react';

export default function DonationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[600px] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 mx-auto text-primary mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Thank You for Your Donation!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your generous contribution is making a real difference in protecting our oceans and marine life
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-ocean mb-8">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">
              Your Impact
            </h2>
            <p className="text-muted-foreground mb-6">
              Thanks to supporters like you, we can continue our vital work protecting endangered sea animals, restoring coral reefs, and fighting ocean pollution. Every donation brings us closer to healthier oceans for future generations.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm text-foreground">
                You'll receive a confirmation of your donation shortly. Thank you for being an Ocean Life Guardian!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate({ to: '/' })}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-ocean inline-flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Return Home
            </button>
            <button
              onClick={() => navigate({ to: '/conservation' })}
              className="bg-card text-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent transition-all border-2 border-border"
            >
              Learn More About Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
