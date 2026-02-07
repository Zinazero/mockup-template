import axios, { type AxiosInstance } from 'axios';
import React, { createContext, useContext } from 'react';

interface ApiContextValue {
  serverBase: string;
  api: AxiosInstance;
}

const ApiContext = createContext<ApiContextValue | undefined>(undefined);

interface ApiProviderProps {
  serverBase: string;
  children: React.ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ serverBase, children }) => {
  const api = axios.create({
    baseURL: `${serverBase}/api/bookeo`,
    headers: { 'Content-Type': 'application/json' },
  });

  return <ApiContext.Provider value={{ serverBase, api }}>{children}</ApiContext.Provider>;
};

export const useApi = (): ApiContextValue => {
  const context = useContext(ApiContext);
  if (!context) throw new Error('useApi must be used within an ApiProvider');
  return context;
};
