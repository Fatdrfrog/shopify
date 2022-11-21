import { useState, useEffect } from "react";

import axios from "axios";

export const useShowcase = () => {
  const [showcase, setShowcase] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        setLoading(false);
        setError(false);
        setShowcase(res.data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { showcase, isLoading, isError };
};
