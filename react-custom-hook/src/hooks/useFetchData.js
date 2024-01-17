import { useEffect, useState } from "react";

const useFetchData = (url, callBack) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();
      if (callBack) {
        setData(callBack(result));
      } else {
        setData(result);
      }
      setError("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
