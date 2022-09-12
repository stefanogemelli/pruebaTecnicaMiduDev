import React, { useEffect, useState } from "react";

function App() {
  const GIPHY_API_Key = "jlE0QB9knTV0WkofOOuog2po4uI2TwFi";
  const giph = [];
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");
  const callGiphyAPI = (str) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${str}&api_key=${GIPHY_API_Key}`
    )
      .then((res) => res.json())
      .then((data) => {
        // asignar todas las url a una variable
        setCatGif(data.data[0].images.original.url);
      });
  };

  const callAPI = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact || "No hay datos de la api");
        callGiphyAPI(data.fact.split(" ").slice(0, 3).join(" "));
      });
  };

  useEffect(callAPI, []);
  const handleClick = () => {};
  return (
    <>
      <div className={"container"}>
        <img src={catGif} className={"image"} alt={"imagen"} />
        <p className={"text"}>{catFact}</p>
      </div>
      <button onClick={handleClick}>Change Gif</button>
    </>
  );
}

export default App;
