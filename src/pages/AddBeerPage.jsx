import React from "react";
import Navbar from "../components/Navbar";

function AddBeerPage() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value onChange />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input type="text" id="tagline" value onChange />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea type="text" id="description" value onChange />
        </div>
        <div>
          <label htmlFor="firstBrewed">First Brewed:</label>
          <input type="text" id="firstBrewed" value onChange />
        </div>
        <div>
          <label htmlFor="firstBrewed">First Brewed:</label>
          <input type="text" id="firstBrewed" value onChange />
        </div>
        <div>
          <label htmlFor="brewerTips">Brewer's Tips:</label>
          <input type="text" id="brewerTips" value onChange />
        </div>
        <div>
          <label htmlFor="attenuationLevel">Attenuation Level:</label>
          <input type="number" id="attenuationLevel" value onChange />
        </div>
        <div>
          <label htmlFor="contributedBy">Contributed By:</label>
          <input type="text" id="contributedBy" value onChange />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
