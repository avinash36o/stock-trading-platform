import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-5 herotext">
            <h1 style={{ color: "rgb(25, 28, 30)" }}>Trade With</h1>
            <h1>CLARITY.</h1>
            <h1 style={{ color: "black" }}>Execute with</h1>
            <h1>PRECISION.</h1>
            <p>
              A powerful platform to invest in stocks, crypto, and more with
              real-time insights and institutional-grade analytics.
            </p>
            <button id="b1">Open Live Account</button>
            <button id="b2">Try Demo Trade</button>
            <p
              style={{
                color: "rgba(65, 71, 81, 0.6)",
                fontSize: "12px",
                marginTop: "6px",
              }}
            >
              No hidden charges • Free account opening
            </p>
          </div>
          <div className="col-7 heroImg">
            <img src="/zerodha asset/h3.png" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
