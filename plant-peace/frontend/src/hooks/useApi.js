import axios from 'axios';

export const useApi = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  const handleError = (error) => {
    if (error.response) {
      return error.response.data.error.message;
    } else {
      console.error('Error', error.message);
      return 'An unexpected error occurred. Please check your connection and try again.';
    }
  };

  const request = async (endpoint, options = {}) => {
    try {
      const response = await axios({
        url: `${baseUrl}/${endpoint}`,
        method: options.method || 'GET',
        params: options.params || {},
        data: options.data || {},
      });
      options.onSuccess && options.onSuccess(response);
    } catch (error) {
      const message = handleError(error);
      options.onFailure && options.onFailure(message);
    }
  };

  return {
    get: (endpoint, options) => request(endpoint, { ...options, method: 'GET' }),
    post: (endpoint, options) => request(endpoint, { ...options, method: 'POST' }),
    put: (endpoint, options) => request(endpoint, { ...options, method: 'PUT' }),
    delete: (endpoint, options) => request(endpoint, { ...options, method: 'DELETE' }),
  }
};
