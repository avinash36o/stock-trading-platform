export default function Pricing() {
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="row">
        {/* for text */}
        <div className="col-5">
          <h3>Unbeatable pricing</h3>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="www.google.com" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        {/* for price */}
        <div className="col offset-2">
          <div className="row p-4">
            <div
              className="col"
              style={{
                border: "1.5px solid black",
                fontSize: "60px",
                fontWeight: "bolder",
              }}
            >
              <i
                class="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "46px" }}
              ></i>
              0
              <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
                Free account opening
              </p>
            </div>
            <div
              className="col"
              style={{
                border: "1.5px solid black",
                fontSize: "60px",
                fontWeight: "bolder",
              }}
            >
              <i
                class="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "46px" }}
              ></i>
              20
              <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
