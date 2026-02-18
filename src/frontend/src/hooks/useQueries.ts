import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Donation } from '../backend';

export function useGetDonations() {
  const { actor, isFetching } = useActor();

  return useQuery<Donation[]>({
    queryKey: ['donations'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDonations();
    },
    enabled: !!actor && !isFetching,
  });
}
