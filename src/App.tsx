import KonyvTabla from "./components/KonyvTabla";
import { TablazatProvider } from "./contexts/TablazatContext";
import "./App.css";
import UjKonyv from "./components/UjKonyv";

function App() {
  return (
    <TablazatProvider>
      <main>
        <header><h1>Könyvesbolt</h1></header>
        <section><UjKonyv /></section>
        <section><KonyvTabla /></section>
      </main>
    </TablazatProvider>
  );
}

export default App;
