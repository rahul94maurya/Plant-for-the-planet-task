import { API_BASE_URL } from '@/lib/data/constants';
import axios, { AxiosError } from 'axios';

export const authenticateUser = async function (requestBody: any) {
  const loginData = { username: 'emilys', password: 'emilyspass' };
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    if (error.response) {
      //handle different error response based on status code
      if (error.response.status === 401) {
        return { error: (error.response.data as { message: string }).message };
      }
      if (error.response.status === 404) {
        return {
          error:
            (error.response.data as { message: string }).message ||
            error.response.data,
        };
      }
      return { error: (error.response.data as { message: string }).message };
    } else {
      // this else block will executed when we have no internet
      return { error: error.message };
    }
  }
};
