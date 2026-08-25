export default function Hero() {
  return (
    <div className="hero">
      <div className="container p-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col">Support Portal</div>
          <div className="col offset-2">
            <a href="">Track Tickets</a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-2"></div>
          <div className="col">
            <p style={{ fontSize: "25px" }}>
              Search for an answer or browse help topics to create ticket
            </p>
            <input
              type="text"
              class="form-control"
              placeholder="Eg. how do i activate F&O"
              aria-describedby="button-addon2"
            ></input>
            <br></br>
            <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">Intraday</a>&nbsp;&nbsp;
          </div>
          <div className="col-1"></div>
          <div className="col">
            <p style={{ fontSize: "25px" }}>Featured</p>
            1. <a href="">Current Takeovers and delistings</a>
            <br></br>
            2. <a href="">Latest intraday leverage</a>
          </div>
        </div>
      </div>
    </div>
  );
}
