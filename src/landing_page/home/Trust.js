import "./Trust.css";

export default function Trust() {
  return (
    <>
      <div className="container trust">
        <div className="row">
          <div className="col">
            <h2>Engineered for the Modern </h2>
            <h2 className="highlight">Investor</h2>
            <p>
              Built with precision to give you a competitive edge in global
              markets.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <i class="fa-solid fa-chart-pie"></i>
              <h3>Institutional Data</h3>
              <span>
                Access the same market feeds used by professional trading desks
                with zero latency. Direct fiber connections to major exchanges.
              </span>
            </div>
            <div className="card">
              <i class="fa-solid fa-shield-halved"></i>
              <h3>Fortified Security</h3>
              <span>
                Military-grade encryption and multi-sig cold storage for all
                digital assets, with comprehensive insurance coverage for peace
                of mind.
              </span>
            </div>
            <div className="card">
              <i class="fa-solid fa-robot"></i>
              <h3>Smart Insights</h3>
              <span>
                AI-driven predictive modeling that filters market noise into
                actionable signals. Customized portfolio alerts based on your
                strategy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
