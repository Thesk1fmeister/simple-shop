import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category";
import Order from "./Order";
import {Outlet, NavLink} from 'react-router-dom'

function Header({ orders, removeOrder, choose }) {
  const [shopCart, setShopCart] = useState(false);
  const [category, setCategory] = useState(false);
 

  const showOrders = (orders) => {
    let sum = 0;
    orders.forEach((order) => (sum += Number.parseFloat(order.price) * order.count));
    return (
      <div>
        {orders.map((order) => (
          <Order order={order} key={order.id} removeOrder={removeOrder} />
        ))}
        <h3>
          Total price - <b>{Math.round(sum * 100) / 100}$</b>
        </h3>
      </div>
    );
  };
  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    );
  };

  return (
    <>
    <header>
      <div>
        <NavLink to='/' className="logo">Name.</NavLink>
        <ul className="nav">
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </ul>
        {category && (
          <Category choose={choose}/>
        )}
        <FaShoppingCart
          className={`shop-cart-button ${shopCart && `active`}`}
          onClick={() => setShopCart(!shopCart)}
        />
        {shopCart && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
    <Outlet/>
    </>
  );
}

export default Header;
