import Headers from "./components/Headers";
import Aside from "./components/Aside";
import Main from "./components/Main";
import { useState } from "react";
 
function App() {


  const [blogs, setBlogs] = useState ([
    {
      id:1,
      topic: 'React',
      issue : 'React Components',
      readTime : '10 min',
      author: 'Simpson'
    },
    {
      id:2,
      topic: 'React',
      issue : 'React Dom',
      readTime : '5 min',
      author: 'Sir Alex'
    },
    {
      id:3,
      topic: 'Vuejs',
      issue : 'Vue Events',
      readTime : '15 min',
      author: 'Anne'
    },
    {
      id:4,
      topic: 'Angular',
      issue : 'Constructors',
      readTime : '25 min',
      author: 'Robert'
    },
    {
      id:5,
      topic: 'Nodejs',
      issue : 'RestApi',
      readTime : '11 min',
      author: 'Gatsby'
    }
  ])
  return (
    <div className="App">

          <Headers id="headers"/>
          <div className="cont">
          <Main blogs={blogs} id="main"/> 
          <Aside id="aside"/>
          </div>

    </div>
  );
}
export default App;






