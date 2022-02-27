import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = ({ postFn }) => {
  const postFunct = (e) => {
    e.preventDefault();

    const data = {
      "id": e.target[0].value,
      "name": e.target[1].value,
      "surname": e.target[2].value,
      "age": e.target[3].value,
      "job": e.target[4].value
    };
    postFn(data);
  };
  return (
    <form onSubmit={postFunct}>
      <label for="Id">Id</label>
      <input type="Id" class="form-control" id="Id" placeholder="Id"></input>

      <label for="Name">Name</label>
      <input
        type="Name"
        class="form-control"
        id="Name"
        placeholder="Name"
      ></input>

      <label for="Surname">Surname</label>
      <input
        type="Surname"
        class="form-control"
        id="Surname"
        placeholder="Surname"
      ></input>

      <label for="Age">Age</label>
      <input type="Age" class="form-control" id="Age" placeholder="Age"></input>

      <label for="Job">Job</label>
      <input type="Job" class="form-control" id="Job" placeholder="Job"></input>
      <button class="form-control">SEND</button>
    </form>
  );
};
export default Form;
