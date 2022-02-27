import { Link, useParams } from "react-router-dom";

export default function User() {
  const params = useParams()
  return (
    <div>
      <div>User id: {params.userId}</div>
      
      <br></br>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}