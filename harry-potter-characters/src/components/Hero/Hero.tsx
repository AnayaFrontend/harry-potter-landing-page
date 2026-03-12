import "./Hero.scss";
import bruxa from "../../assets/bruxa-voando.png";

export function Hero() {
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
          <button className="ativo">Todos</button>
          <button>Grifinória</button>
          <button>Sonserina</button>
          <button>Corvinal</button>
          <button>Lufa-Lufa</button>
        </div>

        {/* Campo de busca */}
        <div className="hero__busca">
          <span className="hero__icone">🔎</span>
          <input type="text" placeholder="Buscar personagem..." />
        </div>
      </div>
    </section>
  );
}
