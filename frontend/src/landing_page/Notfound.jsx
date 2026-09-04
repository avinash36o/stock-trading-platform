import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div
      className="container "
      style={{ textAlign: "center", marginTop: "10%" }}
    >
      <div className="row">
        <h1>404 NOT FOUND</h1>
        <p>this page doesnt exist</p>
        <Link to="/">GO TO HOMEPAGE</Link>
      </div>
    </div>
  );
}
