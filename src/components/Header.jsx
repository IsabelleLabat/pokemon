import Logo from "../assets/img/logo_pokemon.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <Link to={"/pokemons"}>Pokemons</Link>
      <Link to={"/types"}>Types</Link>
    </header>
  );
};

export default Header;
