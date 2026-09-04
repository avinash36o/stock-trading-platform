export default function Universe() {
  return (
    <div className="container">
      <div className="row text-center ">
        <h3>The Zerodha Universe</h3>
        <p style={{ fontSize: "130%", fontWeight: "normal" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col">
          <img
            style={{ height: "30%", paddingLeft: "15%" }}
            src="./asset/zerodhaFundhouse.png"
          ></img>
          <p className="text-muted" style={{ textAlign: "center" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            style={{ height: "30%", paddingLeft: "15%" }}
            src="./asset/sensibullLogo.svg"
          ></img>
          <p className="text-muted" style={{ textAlign: "center" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col">
          <img
            style={{ height: "30%", paddingLeft: "30%" }}
            src="./asset/tijori.svg"
          ></img>
          <p className="text-muted" style={{ textAlign: "center" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-4 text-center">
          <img style={{ height: "75px" }} src="./asset/streakLogo.png"></img>
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4 text-center">
          <img style={{ height: "75px" }} src="./asset/smallcaseLogo.png"></img>
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 text-center">
          <img style={{ height: "75px" }} src="./asset/dittoLogo.png"></img>
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
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
  );
}
