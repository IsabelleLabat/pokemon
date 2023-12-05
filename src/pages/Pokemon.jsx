import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [name]);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <>
      {data.sprites.map((item, index) => {
        return (
          <div key={item.name}>
            <div>{item}</div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
              alt=""
            />
          </div>
        );
      })}
    </>
  );
};

export default Pokemon;
