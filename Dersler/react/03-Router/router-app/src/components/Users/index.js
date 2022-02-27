import { Link } from "react-router-dom";

export default function User() {
  return (
    <div>
      <div>
        Users
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}