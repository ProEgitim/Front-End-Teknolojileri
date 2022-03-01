import styles from "./styles.module.css";
import { useState} from "react";
import DetailCard from "../detailCard";
import axios from 'axios';


export default function Home() {

  const [getUser,setGetUser] = useState(false);
  const submit=(e)=>
  {
    e.preventDefault();
    if(e.target[0].value === "")
    {
      setGetUser(false)
    }
    else
    {
      axios.get("http://localhost:3000/posts?name="+e.target[0].value)
      .then(res=>{
        if(res.data.length !== 0)
        {
          setGetUser(res.data[0])
        }
        else
        {
          setGetUser(false)
        }
      })
    }   
  }
  return (
    <div className={styles.color}>
      <div className={styles.home}>
        <div>
          <h2 className={styles.alignCenter}>Find Random User</h2>
        </div>
        <form onSubmit={submit} className={styles.center}>
          <div className={"form-group"}>
            <input
              type="text"
              className={"form-control "+styles.width}  
              id="exampleInputName"
              placeholder="User Name"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your searching history.
            </small>
            <br></br>
            <button type="submit" className="btn btn-primary">
            Search
          </button>
          {getUser && <DetailCard id={getUser.id} name={getUser.name} surname={getUser.surname} age={getUser.age} job={getUser.job}/> }
          </div>
         
        </form>
      </div>
    </div>
  );
}
