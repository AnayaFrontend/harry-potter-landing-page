import { useEffect, useState } from "react";
import { buscarPersonagens } from "../services/api";
import type { Personagem } from "../types/Personagem";

export function usePersonagens() {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      const dados = await buscarPersonagens();
      setPersonagens(dados);
      setCarregando(false);
    }

    carregar();
  }, []);

  return { personagens, carregando };
}
