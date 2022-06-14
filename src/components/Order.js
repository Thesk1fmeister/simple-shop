import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Order({ order, removeOrder }) {
  return (
    <div className="item" id={order.id}>
      <img src={`./img/` + order.img} />
      <h2>{order.title}</h2>
      <b>{order.price * order.count}$</b>
      <p>Count - {order.count}</p>
      <FaTrashAlt
        className="remove-order"
        onClick={() => removeOrder(order)}
      />
    </div>
  );
}

export default Order;
