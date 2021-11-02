import { useState, useEffect } from "react";
import axios from "axios";

const USER_API = "https://api-ksabee.herokuapp.com/api/account/";

function useGetApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData([]);
      setLoading(true);
      const response = await axios.get(USER_API);
      console.log('get api', response.data);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  return {
    data,
    loading,
    error
  };
}

export default useGetApi;
