import { useEffect, useState } from "react";

import axios from "axios";

const Types = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <>
      {data.results.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
          </div>
        );
      })}
    </>
  );
};

export default Types;
