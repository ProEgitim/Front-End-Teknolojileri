import { useState, useEffect } from "react"
import axios from "axios"
import Users from "./components/Users"
import A from "./components/A"
import B from "./components/B"

function App() {
  const name = "Varol";
  const isLogged = true;
  const students = ["Sercan", "Buğra", "Zeynep", "Hiranur", "Görkem"]
  const age = "25";
  const adress = {
    title: "Şişli/İstanbul",
    zip: 34394
  }
  const [users, setUsers] = useState(["Hiranur","Sercan"]);
  const [profile, setProfile] = useState({userName:"deneme",userId:39})
  const inlineStyle={
    color:"red",
    backgroundColor:"green"
  }
  const [persons,setPersons] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setPersons(res.data))
    .catch((e)=>console.log(e))
    .finally(()=>setIsLoading(false))
  },[])

  return (
    <div>
      <Users name={name} isLogged={isLogged} age={age} students={students} adress={adress}></Users>
      <br /><hr /> <br />
      {users.map((user,index)=>
      (<div key={index}>{user}</div>))}
      <button onClick={()=>setUsers(["Görkem",...users])}>add</button>
      <br /><hr /> <br />
      <div style={inlineStyle}>{profile.userName} / {profile.userId}</div>
      <button onClick={()=>setProfile({...profile, userName:"değişti"})}>add</button>
      <br /><hr /> <br />
      <A></A>
      <br /><hr /> <br />
      <B></B>
      <br /><hr /> <br />
      {isLoading && <div>Loading...</div>}
      {persons.map((person)=>(<div key={person.id}>{person.name}</div>))}
    </div>
  );
}

export default App;
