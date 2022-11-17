import { useState, useEffect } from "react";
import axios from "axios";

export const useProducts = () => {
  const [showcaseItems, setShowcaseItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        setShowcaseItems(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return { showcaseItems, isLoading, isError };
};
