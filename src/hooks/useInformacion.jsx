import { useContext } from "react";
import InformacionContext from "../context/InformacionProvider";

const useInformacion = () => {
  return useContext(InformacionContext);
};

export default useInformacion;
