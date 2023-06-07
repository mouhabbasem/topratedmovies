import useAxiosWithInterceptor from "./useAxiosWithInterceptor";

type FetchResult<T> = {
  loading: boolean;
  error: any;
  data: T | null;
};

const useFetch = async <T>(url: string): Promise<FetchResult<T>> => {
  const { axiosInstance } = useAxiosWithInterceptor();

  try {
    // Set loading to true initially
    const result: FetchResult<T> = { loading: true, error: null, data: null };

    const response = await axiosInstance.get<T>(url);
    result.data = response.data;

    // Set loading to false after receiving the response
    result.loading = false;

    return result;
  } catch (error) {
    return { loading: false, error, data: null };
  }
};

export default useFetch;
