import { client } from './config';
import { AxiosResponse } from 'axios';
import { Carrier } from '../interfaces/Carrier';

export const fetchCarriers = (): Promise<AxiosResponse<Array<Carrier>>> => {
  return client.get('api/carriers').then(response => {
    return response;
  });
};
