// import React, { useState, useEffect, Fragment } from "react";
import React, { Fragment } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      {loading ? (
        <p className="animate__animated animate__flash">Loading...</p>
      ) : null}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> //img={img}
        ))}
      </div>
    </Fragment>
  );
};

export default GifGrid;
