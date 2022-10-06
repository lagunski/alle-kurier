import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { getResult } from '../api/carriers';
import { Carrier } from '../interfaces/Carrier';

const useFetchCarriers = () => {
  const { isLoading, data } = useQuery(['fetchCarriers'], async () => {
    try {
      return getResult().then(response => response.data as Array<Carrier>);
    } catch {
      toast.warn('Something went wrong');
    }
  });
  return { isLoading, data };
};

export default useFetchCarriers;
