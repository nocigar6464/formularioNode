import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = () => {
  //estado de manejo de alerta
  const [alertMessage, setAlertMessage] = useState({ message: "", color: "" });
  return (
    <section>
      <SocialButton
        icon1={"https://cdn-icons-png.flaticon.com/128/4701/4701482.png"}
        icon2={"https://cdn-icons-png.flaticon.com/512/2111/2111432.png"}
        icon3={"https://cdn-icons-png.flaticon.com/128/3669/3669739.png"}
      />
      <Formulario />
    </section>
  );
};
export default Registro;
