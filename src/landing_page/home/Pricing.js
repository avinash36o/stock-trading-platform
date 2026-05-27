import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <h1>Transparent Pricing</h1>
      <p style={{ marginTop: "50px" }}>
        Choose the plan that fits your trading frequency and strategy.
      </p>
      <p>NO HIDDEN CHARGES, TRANSPARENT PRICING.</p>
      <p>TRUSTED BY THOUSAND OF INVESTOR</p>
      <div className="row">
        <div className="col">
          {/* first pricing */}
          <div style={{ marginLeft: "10%" }} className="pricing_card">
            <p>ESSENTIALS</p>
            <h2>
              $0 <span className="card_h2">/mon</span>
            </h2>
            <ul className="offering">
              <li style={{ marginTop: "30px" }}>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Unlimited Stock Trades
              </li>
              <li>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Basic Market Analysis
              </li>
              <li>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Mobile App Access
              </li>
            </ul>
            <button id="b2">Start Free</button>
          </div>

          {/* second pricing */}
          <div
            style={{ background: "#F0F7FF", border: "3px solid #005CAB" }}
            className="pricing_card"
          >
            <p>ATHER PRO</p>
            <h2>
              $29 <span className="card_h2">/mon</span>
            </h2>
            <ul className="offering">
              <li style={{ marginTop: "30px" }}>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Pro Terminal Access
              </li>
              <li>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Advanced AI Insights
              </li>
              <li>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;24/7 Priority Support
              </li>
            </ul>
            <button
              style={{
                backgroundColor: "#005CAB",
                color: "whitesmoke",
                borderColor: "whitesmoke",
              }}
              id="b2"
            >
              Upgrade To Pro
            </button>
          </div>

          {/* third pricing */}
          <div className="pricing_card">
            <p>ATHER PRO</p>
            <h2>
              $199 <span className="card_h2">/mon</span>
            </h2>
            <ul className="offering">
              <li style={{ marginTop: "30px" }}>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Custom API Execution
              </li>
              <li>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Dedicated Manage
              </li>
              <li>
                <i
                  style={{ color: "rgb(0, 92, 171)" }}
                  class="fa-regular fa-circle-check"
                ></i>
                &nbsp;&nbsp;Deep Liquidity Pools
              </li>
            </ul>
            <button id="b2">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}
