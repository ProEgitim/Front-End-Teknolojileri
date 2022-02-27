
import { Link, useParams } from "react-router-dom";

export default function User() {
  const {userId} = useParams();
  return (
    <div>
      <div>User id: {userId} </div>
      <br /> <br />
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
