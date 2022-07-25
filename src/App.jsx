import BuscadorApp from "./components/BuscadorApp";
import { InformacionProvider } from "./context/InformacionProvider";

const App = () => {
  return (
    <InformacionProvider>
      <BuscadorApp />
    </InformacionProvider>
  );
};

export default App;
