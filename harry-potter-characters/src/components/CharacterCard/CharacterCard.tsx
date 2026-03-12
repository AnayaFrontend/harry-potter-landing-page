import "./CharacterCard.scss";

interface Props {
  nome: string;
  imagem: string;
  casa: string;
  dataNascimento: string;
  ator: string;
  patrono: string;
  estaVivo: boolean;
}

export function CharacterCard({
  nome,
  imagem,
  casa,
  dataNascimento,
  ator,
  patrono,
  estaVivo,
}: Props) {
  const imagemUrl =
    imagem || "https://via.placeholder.com/300x450?text=Sem+Imagem";

  const nomesCasas: { [key: string]: string } = {
    Gryffindor: "Grifinória",
    Slytherin: "Sonserina",
    Ravenclaw: "Corvinal",
    Hufflepuff: "Lufa-Lufa",
  };

  return (
    <div className="card-personagem">
      <div className="card-personagem__imagem">
        <img src={imagemUrl} alt={nome} />
      </div>

      <div className="card-personagem__conteudo">
        <h3>{nome}</h3>

        <p>
          <strong>Ator:</strong> {ator || "Desconhecido"}
        </p>

        <p>
          <strong>Casa:</strong> {nomesCasas[casa] || casa || "Desconhecida"}
        </p>

        <p>
          <strong>Patrono:</strong> {patrono || "Nenhum"}
        </p>

        <p>
          <strong>Nascimento:</strong> {dataNascimento || "Desconhecido"}
        </p>

        <p>
          <strong>Status:</strong> {estaVivo ? "Vivo" : "Falecido"}
        </p>
      </div>
    </div>
  );
}
