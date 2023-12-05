import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
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
          <Link to={`/pokemon/${item.name}`} key={item.name}>
            <div>
              <span>{item.name}</span>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                alt=""
              />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Pokemons;
