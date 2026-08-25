export default function Signup() {
  return (
    <div className="container p-3">
      <div
        className="row"
        style={{ textAlign: "center", marginTop: "4%", marginLeft: "5%" }}
      >
        <h2>Open a free demat and trading account online</h2>
        <p style={{ fontSize: "140%", marginTop: "1%", color: "#666666" }}>
          Start investing brokerage free and join a community of 1.4+ crore
          investors and traders
        </p>
      </div>
      {/* image section */}
      <div className="row mt-4">
        <div className="col">
          <img src="./asset/account_open.svg" alt="imgg"></img>
        </div>
        <div className="col mt-4">
          <h2>Signup now</h2>
          <span style={{ color: "#666666" }}>
            Or track your existing application
          </span>
        </div>
      </div>
      <div className="row text-center mt-4">
        <h3>Already have a demat account?</h3>
        <p style={{ fontSize: "130%", marginTop: "1%", color: "#666666" }}>
          Move your holdings to Zerodha and we'll cover your transfer costs, up
          to ₹500, learn more.
        </p>
      </div>
      <div className="row text-center" style={{ marginTop: "5%" }}>
        <h3>Investment options with Zerodha demat account</h3>
      </div>
      <div className="row" style={{ marginTop: "4%" }}>
        <div className="col">
          <div className="row">
            <div className="col-3">
              <img src="./asset/stocks.svg"></img>
            </div>
            <div className="col">
              <h3>Stocks</h3>
              <p>Invest in all exchange-listed securities</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-3 ">
              <img src="./asset/mf.svg"></img>
            </div>
            <div className="col">
              <h3>Mutual funds</h3>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col">
          <div className="row">
            <div className="col-3">
              <img src="./asset/ipo.svg"></img>
            </div>
            <div className="col">
              <h3>IPO</h3>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-3 ">
              <img src="./asset/fo.svg"></img>
            </div>
            <div className="col">
              <h3>Futures & options</h3>
              <p>
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
