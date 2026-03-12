import "./CharactersGrid.scss";
import { usePersonagens } from "../../hooks/usePersonagens";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export function CharactersGrid() {
  const dados = usePersonagens();
  const { personagens, carregando } = dados || {};

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
