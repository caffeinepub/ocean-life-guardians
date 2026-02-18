import { useState } from 'react';
import { useActor } from './useActor';

interface DonationData {
  donorName: string;
  amount: number;
  message: string;
}

export function useDonation() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitDonation = async (data: DonationData): Promise<boolean> => {
    if (!actor) {
      setError('Unable to connect to the backend. Please try again.');
      return false;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await actor.recordDonation(
        data.donorName,
        BigInt(Math.floor(data.amount)),
        data.message
      );

      if (result) {
        return true;
      } else {
        setError('Donation failed. Please check your information and try again.');
        return false;
      }
    } catch (err) {
      console.error('Donation error:', err);
      setError('An error occurred while processing your donation. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitDonation,
    isSubmitting,
    error,
  };
}
