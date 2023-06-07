import axios, { AxiosInstance } from 'axios';

const handleResponseError = (error: any): Promise<never> => {
  if (error.response) {
    const { status } = error.response;

    if (status === 401) {
      console.log('Not authorized');
    } else if (status === 400) {
      console.log('Bad request');
    } else {
      console.log('Other error');
    }
  } else if (error.request) {
    console.error('Request Error:', error.request);
  } else {
    console.error('Error:', error.message);
  }

  return Promise.reject(error);
};

const useAxiosWithInterceptor = (): { axiosInstance: AxiosInstance } => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // TODO token handler
  // this only for test use
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGZhNWI4NTM0ZmI1Mzk5MzU4OTM1MDhhMDQ4ZDUzNCIsInN1YiI6IjY0N2NmZjUwMGZiMzk4MDExODBlMDUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I1e64VPS8maPzIv3IH76hs03KU7K7sDl6cFa1BLK9s4';

  // Add token to the header
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => handleResponseError(error)
  );

  return { axiosInstance };
};

export default useAxiosWithInterceptor;
