import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header1">
        <h1>My Travel Destination web App</h1>
        <Link className="home" to="/">Home</Link>
      </nav>
      <br></br>
    </>
  );
};

export default Header;