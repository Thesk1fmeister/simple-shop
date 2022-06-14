import React from "react";


function Product({ item, addToOrder }) {
 
  return (
    <div className="item">
      <img src={`./img/` + item.img} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={() => addToOrder(item)}>+</div>
    </div>
  );
}

export default Product;
