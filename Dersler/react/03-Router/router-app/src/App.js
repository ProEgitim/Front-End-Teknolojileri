import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import Users from "./components/Users"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>  
          </li>
          <li>
            <Link to="/about">About</Link>  
          </li>
          <li>
            <Link to="/users">Users</Link>  
          </li>
        </ul>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="users/*" element={<Users />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Wrong way!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
