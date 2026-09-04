export default function Footer() {
  return (
    <div style={{ marginTop: "5%", backgroundColor: "#F5F5F5" }}>
      <div className="container" style={{ padding: "5%" }}>
        <div className="row">
          <div className="col">
            <img
              style={{ height: "25px" }}
              src="asset/logo.svg"
              class="navbar-brand "
              alt="imgg"
            ></img>
            <p style={{ marginTop: "4%" }}>
              © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <i
              class="fa-brands fa-x-twitter "
              style={{ marginRight: "4%" }}
            ></i>
            <i
              class="fa-brands fa-square-facebook"
              style={{ marginRight: "4%" }}
            ></i>
            <i class="fa-brands fa-instagram" style={{ marginRight: "4%" }}></i>
            <i
              class="fa-brands fa-linkedin-in"
              style={{ marginRight: "4%" }}
            ></i>
            <br></br>
            <br></br>
            <img src="asset/googlePlayBadge.svg" alt="imgg"></img>
            <img
              src="asset/appstoreBadge.svg"
              alt="imgg"
              className="ms-3"
            ></img>
          </div>
          <div className="col">
            <h4 className="fw-normal">Account</h4>
            <p className="mt-3">Open demat account</p>
            <p>Minor demat account</p>
            <p>NRI demat account</p>
            <p>HUF demat account</p>
            <p>Commodity</p>
            <p>Dematerialisation</p>
            <p>Fund transfer</p>
            <p>MTF</p>
          </div>
          <div className="col">
            <h4 className="fw-normal">Support</h4>
            <p className="mt-3">Contact us</p>
            <p>Support portal</p>
            <p>How to file a complaint?</p>
            <p>Status of your complaints</p>
            <p>Bulletin</p>
            <p>Circular</p>
            <p>Z-Connect blog</p>
            <p>Downloads</p>
          </div>
          <div className="col">
            <h4 className="fw-normal">Company</h4>
            <p className="mt-3">About</p>
            <p>Philosophy</p>
            <p>Press & media</p>
            <p>Careers</p>
            <p>Zerodha Cares (CSR)</p>
            <p>Zerodha.tech</p>
            <p>Open source</p>
            <p>Referral program</p>
          </div>
        </div>
      </div>
    </div>
  );
}
