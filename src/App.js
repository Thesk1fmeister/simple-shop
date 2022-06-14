import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Contacpage from "./pages/Contacpage";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Ocean chair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "55.99",
      img: "chair.jpg",
      category: "chair",
      count: 1,
    },

    {
      id: Math.floor(Math.random() * 100),
      title: "Coffee chair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "65.99",
      img: "chair2.jpg",
      category: "chair",
      count: 1,
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "Clock",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "19.99",
      img: "clock.jpg",
      category: "clock",
      count: 1,
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "Table",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "21.99",
      img: "table.jpg",
      category: "table",
      count: 1,
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "Table",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "31.99",
      img: "table2.jpg",
      category: "table",
      count: 1,
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "Table",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "41.99",
      img: "table3.jpg",
      category: "table",
      count: 1,
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "Sofa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: "115.99",
      img: "sofa.jpg",
      category: "sofa",
      count: 1,
    },
  ]);
  const [currentItems, setCurrentitems] = useState(items);
  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    const checker = [...orders].filter((order) => order.id === item.id);
    if (checker.length > 0) {
      checker.forEach((order) => order.count++);
      setOrders([...orders]);
    } else {
      setOrders([...orders, item]);
      console.log(`else`);
    }
  };

  const removeOrder = (item) => {
    const deleter = [...orders].filter((order) => order.id === item.id);
    deleter.forEach((order) => {
      if (order.count > 1) {
        order.count--;
        setOrders([...orders]);
      } else {
        const deletor = [...orders].filter((order) => order.id !== item.id);
        setOrders(deletor);
      }
    });
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      console.log(`all`);
      setCurrentitems(items);
      return;
    }
    setCurrentitems(items.filter((el) => el.category === category));
    console.log(`something`);
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={<Header orders={orders} removeOrder={removeOrder} />}
        >
          <Route path="about" element={<Aboutpage />} />
          <Route path="contact" element={<Contacpage />} />
          <Route
            path="shop"
            element={
              <Products
                items={currentItems}
                choose={chooseCategory}
                addToOrder={addToOrder}
              />
            }
          />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
