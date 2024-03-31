import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyAlert from "./MyAlert";

function Formulario() {
  // creo los estados para guardar los input del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: "", color: "" });

  const handleClick = (e) => {
    e.preventDefault(); // Evita el envío automático del formulario
    console.log("¡El botón ha sido clickeado!");
    // Realizar validaciones

    // Validar que el nombre no este vacio
    if (name.length <= 3) {
      setMostrar(true);
      setAlertMessage({ message: "Debes escribir un nombre", color: "danger" });
      return;
    }

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setMostrar(true);
      setAlertMessage({
        message: "Los campos no pueden estar vacios",
        color: "danger",
      });
      return;
    }
    //trim elimina los espacios vacios al inicio o final

    // Validar que el email tenga un formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMostrar(true);
      setAlertMessage({
        message: "El email ingresado no tiene un formato valido",
        color: "danger",
      });
      return;
    }

    // Validar que las contraseñas sean iguales
    if (password !== passwordCheck) {
      setMostrar(true);
      setAlertMessage({
        message: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }
    //todo ok mensaje de exito
    setMostrar(true);
    setAlertMessage({ message: "Registro exitoso", color: "success" });

    //para que se formatee lo que se guarda
    setName("");
    setEmail("");
    setPassword("");
    setPasswordCheck("");
  };

  //Empieza el Formulario
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Repite tu contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repite tu contraseña"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            name="passwordCheck"
          />
        </Form.Group>

        <Button variant="sucess" type="button" onClick={handleClick}>
          Enviar
        </Button>
      </Form>

      {mostrar && (
        <MyAlert message={alertMessage.message} color={alertMessage.color} />
      )}
    </>
  );
}

export default Formulario;
