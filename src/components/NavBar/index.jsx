import React from "react";
import CartWidget from "../CartWidget";
import './styles.scss';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/#">Repuestos</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Neumáticos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#">Tren delantero</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#">Elásticos</a>
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
