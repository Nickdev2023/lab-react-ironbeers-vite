import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeersPage() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();
  console.log(beer);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        // console.log(res);
        setBeer(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  if (!beer) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <article key={beer._id}>
        <h1>{beer.name}</h1>
        <img src={beer.image_url} alt="" width={60} />
        <h2>{beer.tagline}</h2>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </article>
    </div>
  );
}

export default RandomBeersPage;
