import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import DetailCard from "../detailCard";
import styles from "./styles.module.css";

export default function User() {
  const params = useParams()

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get('http://localhost:3000/posts/'+params.userId).then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);


  if(isLoading)
  {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className={styles.alignCenter}>
       <DetailCard id={users.id} name={users.name} surname={users.surname} age={users.age} job={users.job}></DetailCard>
      <br></br>
      <nav className={styles.home}>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}