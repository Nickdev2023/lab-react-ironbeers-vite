import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="Homepage">
      <h1>Home Page</h1>
      <nav>
        <Navbar />
        <Link to="/beers">All Beers</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">New Beer</Link>
      </nav>
    </div>
  );
}

export default HomePage;
