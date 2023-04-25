import React from "react";
import "./TourDetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const cityDb = require("../../data/db.json");

function TourDetails() {
  const [seeFull, setseeFull] = useState(false);
  const btn = () => {
    setseeFull(!seeFull);
  };

  const { id } = useParams();
  function eachCity() {
    let db = cityDb.filter((city) => city.id === id);
    return db;
  }
  let city = eachCity();
  let info = city[0].info;
  let maximum = info.maximum || 255;
  let showText = seeFull ? info : info.slice(0, maximum);

  return (
    <>
      <Header />
      <div>
        <p>{showText}</p>
        {info.length > maximum && (
          <button onClick={btn}>{seeFull ? "See less" : "See more"}</button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default TourDetails;
