import Headers from "./components/Headers";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [deletedId, setId] = useState(null);
  const [filters, setFilters] = useState([
    {
      topic: "JavaScript",
      issue: "class",
      readTime: "21",
      author: "asli veli",
      id: 1,
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((resdata) => setBlogs(resdata));
  }, []);
  const onDelete = (itemId) => {
    const deletedItem = blogs.filter((blog) => blog.id !== itemId);
    setBlogs(deletedItem);
    setId(itemId);
  };

  useEffect(() => {
    if (deletedId !== null) {
      fetch(`http://localhost:3000/posts/${deletedId}`, {
        method: "DELETE",
      });
    }
  }, [deletedId]);

  const onFilter = (e) => {
    if (e.keyCode === 13) {
      let val = e.target.value.toLowerCase();
      let filtered = blogs.filter((b) => b.topic.toLowerCase() === val);
      setFilters(filtered);
      e.target.value = "";
    }
  };

  return (
    <div className="App">
      <Headers onFilter={onFilter} blogs={blogs} id="headers" />
      <div className="cont">
        <Main blogs={blogs} handleDelete={onDelete} id="main"></Main>
        <div id="Modal" className="modalBackGround">
          <Modal blogs={blogs} setBlogs={setBlogs}></Modal>
        </div>
        <Aside xfilter={filters} id="aside" />
      </div>
    </div>
  );
}
export default App;
