import { useQuery } from 'react-query';
import { fetchCarriers } from '../api/carriers';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Filters } from '../interfaces/Filters';

export const useFetchCarriers = (filters: Filters) => {
  const { isLoading, data, isError } = useQuery(['fetchCarriers'], () => fetchCarriers(), {
    select: carriers =>
      carriers.data.filter(
        carrier =>
          carrier.maxWeight >= Number(filters.maxWeight) &&
          carrier.maxHeight >= Number(filters.maxHeight) &&
          carrier.maxWidth >= Number(filters.maxWidth) &&
          carrier.maxLength >= Number(filters.maxLength) &&
          (carrier.fromPointShipment === filters?.fromPointShipment || !filters?.fromPointShipment) &&
          (carrier.fromDoorShipment === filters?.fromDoorShipment || !filters?.fromDoorShipment) &&
          (carrier.toPointDelivery === filters?.toPointDelivery || !filters?.toPointDelivery) &&
          (carrier.toDoorDelivery === filters?.toDoorDelivery || !filters?.toDoorDelivery),
      ),
  });
  useEffect(() => {
    if (isError) {
      toast.warn('Something went wrong');
    }
  });

  return { isLoading, data, isError };
};
