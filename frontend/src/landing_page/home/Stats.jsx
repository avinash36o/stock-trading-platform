export default function Stats() {
  return (
    <div className="container " style={{ marginTop: "150px" }}>
      <div className="row">
        {/* left side text */}
        <div className="col-5">
          <h3>Trust with confidence</h3>
          <div className="container mt-4">
            <div className="row mt-5">
              <h4>Customer-first always</h4>
              <p>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>
            <div className="row mt-4">
              <h4>No spam or gimmicks</h4>
              <p>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
            </div>
            <div className="row mt-4">
              <h4>The Zerodha universe</h4>
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="row mt-4">
              <h4>Do better with money</h4>
              <p>
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>
        {/* right side img */}
        <div className="col-7">
          <div className="row">
            <img
              style={{ height: "560px", width: "650px" }}
              src="asset/ecosystem.png"
              alt="img"
            ></img>
          </div>
          <div className="row ">
            <div className="col offset-2">
              <a href="https://zerodha.com/" style={{ textDecoration: "none" }}>
                Explore our products{" "}
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="col">
              <a href="https://zerodha.com/" style={{ textDecoration: "none" }}>
                Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
