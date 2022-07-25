import { useEffect, useState } from "react";
import useInformacion from "../hooks/useInformacion";
import Info from "./Info";

const BuscadorApp = () => {
  const [busqueda, setBusqueda] = useState("");
  const { informacion, consultarApi, cargando } = useInformacion();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector("form input");
    const button = document.querySelector("form button");
    if (busqueda.split("").length > 8) {
      input.setAttribute("aria-invalid", "false");
      if (cargando) {
        button.setAttribute("aria-busy", "true");
      } else {
        button.removeAttribute("aria-busy");
      }
      consultarApi(busqueda);
    } else {
      input.setAttribute("aria-invalid", "true");
    }
  };

  useEffect(() => {
    const input = document.querySelector("form input");
    const button = document.querySelector("form button");
    if (cargando) {
      button.setAttribute("aria-busy", "true");
    } else {
      button.removeAttribute("aria-busy");
      input.removeAttribute("aria-invalid");
    }
  }, [cargando]);

  const handleBusquedaInput = (e) => {
    setBusqueda(e.target.value.trimStart());

    if (e.target.value.trimStart().split("").length > 8) {
      e.target.setAttribute("aria-invalid", "false");
    } else {
      e.target.setAttribute("aria-invalid", "true");
    }
  };

  return (
    <main className="container">
      <h1>INFORMACIÓN DE TU IP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          IP del usuario:
          <input
            value={busqueda}
            onInput={handleBusquedaInput}
            onPaste={handleBusquedaInput}
            type="text"
            placeholder="Introduce tu IP"
          />
        </label>
        <small>
          Por ejemplo: <span>54.85.132.205</span>
        </small>
        <button type="submit">Buscar información de esta IP</button>
      </form>

      <div>
        <div id="previa">
          {informacion?.connection && <Info data={informacion} />}
        </div>
        <pre id="resultados">
          {!Object.values(informacion).length > 0
            ? '{"Los resultados apareceran aqui"}'
            : JSON.stringify(informacion, null, 2)}
        </pre>
      </div>
    </main>
  );
};

export default BuscadorApp;
