import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Pad Thai (ผัดไทย)', price: 120, image: 'https://via.placeholder.com/150?text=Pad+Thai' },
    { id: 2, name: 'Green Curry (แกงเขียวหวาน)', price: 150, image: 'https://via.placeholder.com/150?text=Green+Curry' },
    { id: 3, name: 'Tom Yum Goong (ต้มยำกุ้ง)', price: 180, image: 'https://via.placeholder.com/150?text=Tom+Yum' },
    { id: 4, name: 'Som Tum (ส้มตำ)', price: 100, image: 'https://via.placeholder.com/150?text=Som+Tum' },
    { id: 5, name: 'Massaman Curry (แกงมัสมั่น)', price: 170, image: 'https://via.placeholder.com/150?text=Massaman+Curry' },
    { id: 6, name: 'Khao Pad (ข้าวผัด)', price: 90, image: 'https://via.placeholder.com/150?text=Khao+Pad' },
    { id: 7, name: 'Panang Curry (พะแนง)', price: 160, image: 'https://via.placeholder.com/150?text=Panang+Curry' },
    { id: 8, name: 'Moo Ping (หมูปิ้ง)', price: 50, image: 'https://via.placeholder.com/150?text=Moo+Ping' },
    { id: 9, name: 'Khao Soi (ข้าวซอย)', price: 140, image: 'https://via.placeholder.com/150?text=Khao+Soi' },
    { id: 10, name: 'Kai Med Ma Muang (ไก่ผัดเม็ดมะม่วง)', price: 150, image: 'https://via.placeholder.com/150?text=Kai+Med+Ma+Muang' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Food Order App</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cart">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Menu */}
      <div id="menu" className="container my-4">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row">
          {menuItems.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div id="cart" className="container mt-5">
        <h2 className="text-center mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="list-group mb-4">
              {cart.map((item) => (
                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="text-center">Total: ₹{total}</h4>
            <button className="btn btn-primary w-100">Checkout</button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2024 Food Order App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
