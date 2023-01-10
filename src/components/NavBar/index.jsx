import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Home</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/category/termos">Termos</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/category/mates">Mates</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/category/accesorios">Accesorios</Link>
          </li>
        </ul>
        <CartWidget/>
        <span class="navbar-text">
          2
        </span>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
