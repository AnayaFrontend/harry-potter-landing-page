import "./styles/global.scss";
import { Hero } from "./components/Hero/Hero";
import { CharactersGrid } from "./components/CharactersGrid/CharactersGrid";

function App() {
  return (
    <>
      <Hero />

      <main>
        <CharactersGrid />
      </main>
    </>
  );
}

export default App;
