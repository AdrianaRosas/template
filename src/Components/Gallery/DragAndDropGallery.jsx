import React, { useState } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./Photos";
import '../Gallery/Gallery.css'

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

function Sortable() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="gallery-sortable-cont">
      <h2>Sortable Gallery (Drag photo to rearrange)</h2>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
export default Sortable;