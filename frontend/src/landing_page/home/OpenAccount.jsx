export default function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-3">
        <h1 className="mt-5 fs-2 fw-normal">Open a Zerodha account</h1>
        <p className="mt-2 fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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
