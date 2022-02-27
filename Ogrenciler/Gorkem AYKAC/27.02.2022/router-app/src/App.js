import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import "./components/App.css"
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
          <ul className="navbar-nav mr-auto list-group-horizontal">
            <li className="navbar-item active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
      </nav>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>WRON PATH!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
