import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectiionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="preview">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          /* 
            Here we are going to just pass the item to the CollectionItem component as we now have a Redux operation happening within the CollectionItem and need to not deconstruct the item props within the props section of the function component section, but instead within the actual block of the CollectionItem component. You can see this being done by opening up the CollectionItem
          */
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectiionPreview;
