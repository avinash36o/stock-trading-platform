export default function Education() {
  return (
    <div className="container " style={{ marginTop: "150px" }}>
      <div className="row">
        <div className="col">
          <img src="asset/education.svg" alt="img"></img>
        </div>
        <div className="col mt-5">
          <h3>Free and open market education</h3>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="www.google.com" style={{ textDecoration: "none" }}>
            Varsity &nbsp;
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="www.google.com" style={{ textDecoration: "none" }}>
            TradingQ&A &nbsp;
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
