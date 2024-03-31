import React from "react";
import Alert from "react-bootstrap/Alert";

function MyAlert({ message, color }) {
  return (
    <>
      <Alert variant={color}>{message}</Alert>
    </>
  );
}

export default MyAlert;
