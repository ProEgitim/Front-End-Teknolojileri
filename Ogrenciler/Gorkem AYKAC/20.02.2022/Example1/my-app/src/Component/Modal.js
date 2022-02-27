import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "./Form";

const MyModal = (props) => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  // const saveData = () => {
  //   post();
  // };
  const postData = async (data) => {
    if (data != null) {
      fetch("http://localhost:3000/posts", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          props.get();

        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    console.log("post");
    toggle();
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        ADD NEW BLOG
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ADD</ModalHeader>
        <ModalBody>
          <Form  postFn={postData}/>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </Modal>
    </div>
  );
};
export default MyModal;
