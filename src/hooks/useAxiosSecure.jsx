import {  useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';


const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base URL
  });

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('access-token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 403) {
            logOut()
              .then(() => {
                // Redirect to login page after logout
                navigate('/login');
              })
              .catch((logoutError) => {
                console.error('Logout error:', logoutError);
              });
          }
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors on unmount
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosSecure, logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
