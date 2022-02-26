import { useState,useEffect } from 'react';
import Users from './components/Users'
import A from './components/A';
import B from './components/B';
import axios from 'axios';

function App() {
const name = "Sercan";
const isLogged = true;
const students = ["Sercan","Buğra", "Zeynep", "Hiranur", "Görkem"];
const age = "25";
const adress = {
 title: "Şişli",
 zip: 343536

}
const [users , setUsers] = useState(["Hiranur", "Sercan"]);
const [profile , setProfile] = useState({userName: "Veli", userId:39});
const [persons, setPersons] = useState([]);
const [isLoading, setIsLoading]= useState(true);

useEffect(()=>{
  axios("https://jsonplaceholder.typicode.com/users")
  .then(res => setPersons(res.data))
  .catch(err=> console.log(err))
  .finally(()=> setIsLoading(false))
},[]);


  return (
    <div className="App">
      <Users name={name} isLogged={isLogged} age={age} students={students} adress={adress}></Users>
      <hr/>
      {users.map((user,index)=>(
        <div key={index}>{user}</div> 
      ))}
      <button onClick={()=> setUsers(["Görkem", ...users])}>add</button>
      <br /><br /><br />
      <div style={{color:'red'}}>{profile.userName} / {profile.userId}</div>
      <button onClick={()=> setProfile({...profile, userName:"Ahmet"})}>add</button>
      <br /><br /><br />  
     <A></A>
     <B></B>
     <br /><br /><br /> 
     {isLoading && <div>Loading...</div>}
     {persons.map((person)=>(
       <div key={person.id}>{person.name}</div>
     ))}

   </div>
  );
}

export default App;
