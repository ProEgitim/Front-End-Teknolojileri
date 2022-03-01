import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import "./App.css";
import { NavLink } from "react-router-dom";
import PageNotFound from "./components/404";
import Card from "./components/card";
function App() {
  return (
    <div>
      <nav>
        <ul className="navbar-nav mr-auto list-group-horizontal">
          <li
            className={({ isActive }) =>
              isActive ? "navbar-item active " : "navbar-item"
            }
          >
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li
            className={({ isActive }) =>
              isActive ? "navbar-item active " : "navbar-item"
            }
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            className={({ isActive }) =>
              isActive ? "navbar-item active " : "navbar-item"
            }
          >
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
