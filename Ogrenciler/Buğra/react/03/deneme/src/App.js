import Users from "./Components/Users"

const name = "Deneme";
const isLogged =true;
const students = ["sercan","Buğra","Zeynep","Gorkem","Hiranur"]

function App() {
  return(
   <div>
     <Users name={name} isLogged={isLogged} students={students} ></Users>
   </div>

  );
}
export default App;