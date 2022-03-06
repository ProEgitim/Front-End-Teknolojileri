import { Link, Outlet, Routes, Route } from "react-router-dom";
import Card from "../card";
import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "../User"
import "../Theme.css"
import { useTheme } from "../../context/ThemeContext";


const Users = () => {
  const {theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className={styles.color}>
      <div className={styles.home+` ${theme}`}>
        <div>
          <h2 className={styles.alignCenter}>All User</h2>
        </div>
     
        <div className={styles.card}>
          {
          users.map((data) => (
            <Card id={data.id} name={data.name} surname={data.surname}></Card>      
          ))
          }
        </div>
        <br></br>
        <nav className={styles.navv} >
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path=":userId" element={<User />} />
        </Routes>
        <Outlet/>
      </div>
    </div>
  );
};
export default Users;
