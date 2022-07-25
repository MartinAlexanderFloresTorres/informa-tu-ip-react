import { createContext, useState } from "react";
import axios from "axios";

const InformacionContext = createContext();

const InformacionProvider = ({ children }) => {
  const [informacion, setInformacion] = useState({});
  const [cargando, setCargando] = useState(false);

  const consultarApi = async (q) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_HOST,
      },
    };

    try {
      setCargando(true);
      setInformacion({});
      const { data } = await axios(
        `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${q}`,
        options
      );
      setInformacion(data);
    } catch (err) {
      setInformacion({ error: "La IP introducida es invalida" });
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  return (
    <InformacionContext.Provider
      value={{ informacion, consultarApi, cargando }}
    >
      {children}
    </InformacionContext.Provider>
  );
};
export { InformacionProvider };
export default InformacionContext;
