import Users from "./components/Users"

const name = "Varol";
const isLogged = true;
const students = ["Sercan", "Buğra", "Zeynep", "Hiranur", "Görkem"]
const age=25;
const address={
  title:"izmir",
  zip:35580
}

function App() {
  return (
    <div>
      <Users name={name} isLogged={isLogged} students={students} age={age} address={address}></Users>
    </div>
  );
}

export default App;
