import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const Data = createContext();
const DataContext = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [services, setServices] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "http://34.207.41.229:4100/universomagnanimoorg/get/homepage"
      );
      setAllData(data);
    };
    fetchData();
    const fetchServicespage = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimoorg/get/service"
      );
      setServices(data);
    };
    fetchServicespage();
  }, []);

  return (
    <Data.Provider value={{ allData, services }}>{children}</Data.Provider>
  );
};

export default DataContext;
