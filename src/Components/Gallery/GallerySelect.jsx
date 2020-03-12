import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";
import { photos } from "./Photos";
import '../Gallery/Gallery.css'

function GallerySelect() {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  );

  return (
    <div className="gallery-select-cont">
      <p className="p-gallery-select">
        <button className="gallery-select-btn action-button shadow animate" onClick={toggleSelectAll}>toggle select all</button>
      </p>
      <Gallery photos={photos} renderImage={imageRenderer} />
    </div>
  );
}
export default GallerySelect;