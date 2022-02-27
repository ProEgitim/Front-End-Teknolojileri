import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.color}>
      <div className={styles.home}>
        <div>
          <h2 className={styles.alignCenter}>Find Random User</h2>
        </div>
        <form className={styles.center}>
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
          </div>
         
        </form>
      </div>
    </div>
  );
}
