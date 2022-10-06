import { client } from './config';
import { AxiosResponse } from 'axios';

export const getResult = (): Promise<AxiosResponse> => {
  return client.get('api/carriers').then(response => {
    return response;
  });
};
