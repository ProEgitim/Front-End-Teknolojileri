import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div>
        <h2>Who are we?</h2>
        <p>WE are greate team :)</p>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
