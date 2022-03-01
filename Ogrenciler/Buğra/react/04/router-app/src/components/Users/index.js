import { Link } from "react-router-dom";
import Card from "../card";
import styles from "./styles.module.css";

export default function Users() {
  return (
<div className={styles.color}>
      <div className={styles.home}>
        <div>
          <h2 className={styles.alignCenter}>Find Random User</h2>
        </div>
          
        <ul>
          <li>
            <Card name={"bugra"} surname={"bolat"}></Card>
          </li>
        </ul>
        <br></br>
      <nav>
        <Link to="/">Home</Link>
      </nav>
         
        
      </div>
    </div>

  );
}

