import React from "react";
import Category from "../components/Category";
import Product from "../components/Product";

function Products({ items, addToOrder, choose }) {
  return (
    <main>
      <Category choose={choose}/>
      <div className="main">
        {items.map((item) => (
          <Product item={item} key={item.id} addToOrder={addToOrder} />
        ))}
      </div>
    </main>
  );
}
export default Products;
