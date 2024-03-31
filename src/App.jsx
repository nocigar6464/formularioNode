import { useState } from "react";
import "./App.css";
import Registro from "./assets/components/Registro";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <div className="card">
        <h1>Crea una cuenta</h1>
        <Registro />
      </div>
    </main>
  );
}

export default App;
