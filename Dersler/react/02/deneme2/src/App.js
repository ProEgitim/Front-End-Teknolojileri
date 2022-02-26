import Users from "./components/Users"

const name = "Varol";
const isLogged = true;
const students = ["Sercan", "Buğra", "Zeynep", "Hiranur", "Görkem"]

function App() {
  return (
    <div>
      <Users name={name} isLogged={isLogged} students={students}></Users>
    </div>
  );
}

export default App;
