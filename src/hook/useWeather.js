import { useState } from 'react';

const useWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return { loading, error };
};

export default useWeather;
