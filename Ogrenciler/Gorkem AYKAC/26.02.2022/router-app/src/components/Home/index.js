import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <h2>Welcome to the User APP!</h2>
      </div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}