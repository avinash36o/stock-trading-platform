export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-3">
        <img
          style={{ height: "400px", width: "1000px" }}
          src="asset/homeHero.png"
          alt="Hero img"
          className="offset-1"
        ></img>
        <h1 className="mt-5 fw-normal">Invest in everything</h1>
        <p className="mt-2 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          style={{
            width: "15rem",
            height: "3rem",
            borderRadius: "3px",
            backgroundColor: "#387ED1",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          type="button"
          className="btn btn-primary offset-5 mt-4"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
