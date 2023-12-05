import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Type = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [type]);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <>
      <div>Type : {type}</div>
      {data.pokemon.map((item, index) => {
        const url = item.pokemon.url.split("/")[6];
        return (
          <Link to={`/pokemon/${item.pokemon.name}`} key={index}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
              alt=""
            />{" "}
            <div>{item.pokemon.name}</div>
          </Link>
        );
      })}
    </>
  );
};

export default Type;
