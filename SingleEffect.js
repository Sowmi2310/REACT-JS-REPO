import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseEffect from "./UseEffect";

function SingleEffect() {
  const { detid } = useParams();
  console.log(detid);
  const [one, setOne] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${detid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOne(data);
      });
  });
  return (
    <>
      <h1>{one.title}</h1>
      <img src={one.image} alt="" height="300px"/>
      <br></br>
      <h5>{one.price}</h5>
      <p>{one.description}</p>
    </>
  );
}

export default SingleEffect;
