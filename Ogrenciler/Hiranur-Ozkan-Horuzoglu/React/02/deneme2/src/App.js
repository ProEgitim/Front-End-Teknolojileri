import { useState, useEffect } from "react";
import axios from "axios"
import Users from "./compenents/Users";
import A from "./compenents/A";
import B from "./compenents/B";

function App() {
  const name = "Varol";
  const isLogged = true;
  const students = ["Sercan", "Bugra", "Zeynep", "Hiranur", "Gorkem"];
  const age = "(23)";
  const adress = {
    title: "Sisli/Istanbul",
    zip: 34394,
  };
  const [users, setUsers] = useState(["Hiranur", "Sercan"]);
  const [profile, setProfile] = useState({ userName: "deneme", userId: 39 });
  const inlineStyle = {
    color: "red",
    backgroundColor: "green",
  };
  const [persons,setPersons] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    //.then(res => res.json())
    .then(res =>setPersons(res.data))
    .catch(e =>console.error(e))
    .finally(()=> setIsLoading(false))
  },[])


  return (
    <div>
      <Users
        name={name}
        isLogged={isLogged}
        age={age}
        adress={adress}
        students={students}
      ></Users>
      <br /> <hr /> <br />
      {users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
      <button onClick={() => setUsers(["Gorkem", ...users])}>add</button>
      <br /> <hr /> <br />
      <div style={inlineStyle}>
        {profile.userName} / {profile.userId}
      </div>
      <button onClick={() => setProfile({ ...profile, userName: "degisti" })}>
        add
      </button>
      <br /> <hr /> <br />
      <A></A>
      <br /> <hr /> <br />
      <B></B>
      <br /> <hr /> <br />
        {isLoading && <div>Loading...</div>}
        {persons.map(person =>(<div key={person.id}>{person.name}</div>))}

    </div>
  );
}

export default App;
