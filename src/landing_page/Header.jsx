import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 ">
      <div class="container-fluid">
        <Link to="/">
          <img
            style={{ height: "30px" }}
            src="asset/logo.svg"
            class="navbar-brand "
            alt="imgg"
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            style={{ marginLeft: "400px" }}
            class="navbar-nav me-auto mb-2 mb-lg-0 "
          >
            <li class="nav-item" style={{ marginLeft: "30px" }}>
              <Link class="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <Link class="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
