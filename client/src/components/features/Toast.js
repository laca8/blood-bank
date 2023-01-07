import React from "react";
import { Container } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
const ToastComponent = () => {
  return (
    <Toast
      bg={"danger"}
      position={"top-start"}
      style={{
        textAlign: "right",
        position: "",
        zIndex: "1000",
        marginBottom: "15px",
      }}
    >
      <Toast.Body style={{ textAlign: "right", color: "#fff" }}>
        يجب علي المتبرعين عدم التبرع الا بوجود المريض
      </Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
