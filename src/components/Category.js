import React from "react";
import { useState } from "react";

function Category({ choose }) {
  const [productCategory, setProductcategory] = useState([
    {
      id: "all",
      named: "All",
    },
    {
      id: "chair",
      named: "Chairs",
    },
    {
      id: "sofa",
      named: "Sofas",
    },
    {
      id: "clock",
      named: "Clocks",
    },
    {
      id: "table",
      named: "Tables",
    },
  ]);
  return (
    <div className="category">
      <ul>
        {productCategory.map((el) => (
          <a key={el.id} onClick={() => choose(el.id)}>
            {el.named}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Category;
