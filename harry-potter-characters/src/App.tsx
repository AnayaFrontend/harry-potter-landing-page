import { useState } from "react";
import { Hero } from "./components/Hero/Hero";
import { CharactersGrid } from "./components/CharactersGrid/CharactersGrid";
import { usePersonagens } from "./hooks/usePersonagens";
import "./styles/global.scss";

export default function App() {
  const { personagens, carregando } = usePersonagens();

  const [busca, setBusca] = useState("");

  const [filtroCasa, setFiltroCasa] = useState("");

  const personagensFiltrados = personagens.filter((personagem) => {
    const matchNome = personagem.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    const matchCasa = filtroCasa === "" || personagem.casa === filtroCasa;

    return matchNome && matchCasa;
  });

  return (
    <main>
      <Hero
        busca={busca}
        setBusca={setBusca}
        filtroCasa={filtroCasa}
        setFiltroCasa={setFiltroCasa}
      />

      <CharactersGrid
        personagens={personagensFiltrados}
        carregando={carregando}
      />
    </main>
  );
}
