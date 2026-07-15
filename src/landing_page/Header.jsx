export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 ">
      <div class="container-fluid">
        <img
          style={{ height: "30px" }}
          src="asset/logo.svg"
          class="navbar-brand "
        ></img>
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
              <a class="nav-link" href="">
                Signup
              </a>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <a class="nav-link" href="">
                About
              </a>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <a class="nav-link" href="">
                Products
              </a>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <a class="nav-link" href="">
                Pricing
              </a>
            </li>
            <li class="nav-item" style={{ marginLeft: "70px" }}>
              <a class="nav-link" href="">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
