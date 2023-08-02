import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        console.log(res);
        setBeers(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!beers) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        {beers.map((beer) => {
          return (
            <article key={beer._id}>
              <h1>{beer.name}</h1>
              <img src={beer.image_url} alt="" width={60} />
              <h2>{beer.tagline}</h2>
              <h3>{beer.contributed_by}</h3>
              <Link to={`/beers/${beer._id}`}>Beer details page</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeersPage;
