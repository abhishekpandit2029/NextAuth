import { useState, useEffect } from "react";
import axios from "axios";

const useMe = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users/me");
        console.log(response);
        setUserData(response.data);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();

    // Cleanup function (if needed)
    // return () => {
    //     // Cleanup code (if needed)
    // };
  }); // Empty dependency array to run effect only once

  return { userData, error };
};

export default useMe;
