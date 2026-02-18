import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';
import { useDonation } from '../hooks/useDonation';

const PRESET_AMOUNTS = [25, 50, 100, 250];

export default function DonationForm() {
  const navigate = useNavigate();
  const { submitDonation, isSubmitting, error } = useDonation();
  
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setFormError('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setFormError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Validation
    if (!donorName.trim()) {
      setFormError('Please enter your name');
      return;
    }

    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      setFormError('Please select or enter a valid donation amount');
      return;
    }

    // Submit donation
    const success = await submitDonation({
      donorName: donorName.trim(),
      amount,
      message: message.trim(),
    });

    if (success) {
      navigate({ to: '/donate/success' });
    }
  };

  return (
    <div className="bg-card p-8 rounded-2xl border border-border shadow-ocean">
      <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Make Your Donation</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Preset Amounts */}
        <div>
          <label className="block text-sm font-semibold mb-3 text-foreground">
            Select Amount
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountSelect(amount)}
                className={`py-4 px-4 rounded-xl font-semibold transition-all ${
                  selectedAmount === amount
                    ? 'bg-primary text-primary-foreground shadow-ocean'
                    : 'bg-muted text-foreground hover:bg-accent border border-border'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label htmlFor="customAmount" className="block text-sm font-semibold mb-2 text-foreground">
            Or Enter Custom Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
              $
            </span>
            <input
              id="customAmount"
              type="number"
              min="1"
              step="1"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              placeholder="Enter amount"
              className="w-full pl-8 pr-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Donor Name */}
        <div>
          <label htmlFor="donorName" className="block text-sm font-semibold mb-2 text-foreground">
            Your Name <span className="text-destructive">*</span>
          </label>
          <input
            id="donorName"
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
            Message (Optional)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share why you're supporting ocean conservation..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>

        {/* Error Messages */}
        {(formError || error) && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
            <p className="text-destructive text-sm">{formError || error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-ocean disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Complete Donation'
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          By donating, you agree to support ocean conservation efforts. Your contribution makes a real difference.
        </p>
      </form>
    </div>
  );
}
