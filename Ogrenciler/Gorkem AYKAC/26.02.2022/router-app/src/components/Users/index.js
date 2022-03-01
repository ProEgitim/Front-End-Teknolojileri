import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <div>
      <ul>
          <li>
            <Link to="/users/1">User 1</Link>  
          </li>
          <li>
            <Link to="/users/2">User 2</Link>  
          </li>
          <li>
            <Link to="/users/3">User 3</Link>  
          </li>
        </ul>
      </div>

      <br></br>
      <nav>
        <Link to="/">Home</Link>
      </nav>

    </div>
  );
}