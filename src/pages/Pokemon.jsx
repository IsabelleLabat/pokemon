import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const { nomdupokemon } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${nomdupokemon}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [nomdupokemon]);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <>
      <div>{nomdupokemon}</div>
      <div className="link-card">
        <img src={data.sprites.front_default} alt="poke img" />
      </div>

      {data.types.map((item, index) => {
        // console.log(item);
        return (
          <Link to={`/type/${item.type.name}`} key={index}>
            <div>{item.type.name}</div>
          </Link>
        );
      })}
    </>
  );
};

export default Pokemon;
