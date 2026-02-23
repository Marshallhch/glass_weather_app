import { useEffect, useState } from 'react';
import {
  getCurrentWeather,
  getCurrentWeatherByCoords,
  getWeatherForecast,
} from '../utils/weatherAPI';

const useWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [units, setUnit] = useState('C');

  const fetchWeatherByCity = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(city),
        getWeatherForecast(city),
      ]);

      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Failed to fetch weather data',
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(async (position) => {
      // 내 기기의 현재 위치 반환
      try {
        const { latitude, longitude } = position.coords;
        const weatherData = await getCurrentWeatherByCoords(
          latitude,
          longitude,
        );
        setCurrentWeather(weatherData);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'Failed to fetch weather data',
        );
      } finally {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    fetchWeatherByCity('seoul');
  }, []);

  const toggleUnit = () => {
    setUnit(units === 'C' ? 'F' : 'C');
  };

  return {
    loading,
    error,
    currentWeather,
    forecast,
    units,
    fetchWeatherByCity,
    fetchWeatherByLocation,
    toggleUnit,
  };
};

export default useWeather;
