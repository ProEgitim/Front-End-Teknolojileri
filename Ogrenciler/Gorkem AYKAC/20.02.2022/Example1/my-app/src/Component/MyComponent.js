import React from "react";
import MyBlog from "./MyBlog";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyModal from "./Modal";

const MyComponent = () => {
  const [blog, setBlog] = useState(null);
  const [deletedElementId, setDeletedElementId] = useState(null);
  const refleshData =() =>
  {
    fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => setBlog(data));
  }
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  useEffect(() => {
    if (deletedElementId != null) {
      fetch("http://localhost:3000/posts/" + deletedElementId, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      });
    }
  }, [blog]);

  const SearchData = (e) => {

    if (e.target.value == "" || typeof e =='undefined') {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => setBlog(data));
    } else {
      const newBlog = blog.filter((blog) => blog.name.includes(e.target.value));
      setBlog(newBlog);
    }
  };

  const deleteUser = (id) => {
    const newBlog = blog.filter((blog) => blog.id !== id);
    setDeletedElementId(id);
    setBlog(newBlog);
  };


  return (
    <div className="mt-sm-3 mb-sm-5 bg-info text-warning">
      <div>
        <input
          type="text"
          onChange={SearchData}
          className="nameInput"
          onClick={() => {
            console.log("tıklandı");
          }}
          placeholder="Name"
        ></input>
      </div>
      {blog && <MyBlog data={blog} delete={deleteUser}/>}
      <MyModal className="modal" get={refleshData}/>
    </div>
  );
};
export default MyComponent;
