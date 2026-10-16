import { createContext, useContext, ReactNode } from 'react';

const WeatherContext = createContext<any | null>(null);

interface WeatherProviderProps {
  weather: any | null;
  children: ReactNode;
}

export const WeatherProvider = ({ weather, children }: WeatherProviderProps) => {
  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): any | null => {
  const context = useContext(WeatherContext);
  return context;
};