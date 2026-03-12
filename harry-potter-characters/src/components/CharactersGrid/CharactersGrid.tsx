import "./CharactersGrid.scss";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import type { Personagem } from "../../types/Personagem";

interface CharactersGridProps {
  personagens: Personagem[];
  carregando: boolean;
}

export function CharactersGrid({
  personagens = [],
  carregando,
}: CharactersGridProps) {
  if (carregando) {
    return <p className="loading">Carregando personagens...</p>;
  }

  return (
    <section className="personagens">
      <div className="personagens__grid">
        {personagens?.map((p) => (
          <CharacterCard
            key={p.id}
            nome={p.nome}
            imagem={p.imagem}
            casa={p.casa}
            dataNascimento={p.dataNascimento}
            ator={p.ator}
            patrono={p.patrono}
            estaVivo={p.estaVivo}
          />
        ))}
      </div>
    </section>
  );
}
