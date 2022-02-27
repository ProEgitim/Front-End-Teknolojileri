import { Link, Outlet, Routes, Route } from "react-router-dom";
import User from "../User"

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
      <Routes>
        <Route path=":userId" element={<User />} />
      </Routes>
      <Outlet/>
    </div>
  );
}