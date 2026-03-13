import "./Hero.scss";
import bruxa from "../../assets/bruxa-voando.png";

interface HeroProps {
  busca: string;
  setBusca: (valor: string) => void;
  filtroCasa: string;
  setFiltroCasa: (valor: string) => void;
}

export function Hero({
  busca,
  setBusca,
  filtroCasa,
  setFiltroCasa,
}: HeroProps) {
  const casas = [
    { label: "Todos", value: "" },
    { label: "Grifinória", value: "Gryffindor" },
    { label: "Sonserina", value: "Slytherin" },
    { label: "Corvinal", value: "Ravenclaw" },
    { label: "Lufa-Lufa", value: "Hufflepuff" },
  ];

  return (
    <section className="hero">
      {/* Bruxa voando */}
      <img src={bruxa} className="bruxa" alt="Bruxa voando" />

      {/* Partículas mágicas */}
      <div className="particulas"></div>

      <div className="hero__conteudo">
        <h1 className="hero__titulo">MUNDO BRUXO</h1>

        <p className="hero__descricao">
          Explore os personagens do universo mágico de Harry Potter
        </p>

        <div className="hero__filtros">
          {casas.map((casa) => (
            <button
              key={casa.label}
              className={filtroCasa === casa.value ? "ativo" : ""}
              onClick={() => setFiltroCasa(casa.value)}
            >
              {casa.label}
            </button>
          ))}
        </div>

        {/* Campo de busca */}
        <div className="hero__busca">
          <input
            type="text"
            placeholder="Buscar personagem..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
