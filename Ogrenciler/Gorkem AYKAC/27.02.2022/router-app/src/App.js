import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import ThemeButton from "./components/ThemeButton";
import "./App.css";
import { NavLink } from "react-router-dom";
import PageNotFound from "./components/404";
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
  return (
      
      <ThemeProvider>
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
          <li>
            <ThemeButton/>
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
      </ThemeProvider>

  );
}

export default App;
