import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  //   useEffect(() => {
  //     getGifs(category).then((imgs) => {
  //       setImages(imgs);
  //     });
  //   }, [category]);

  return (
    <React.Fragment>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default GifGrid;
