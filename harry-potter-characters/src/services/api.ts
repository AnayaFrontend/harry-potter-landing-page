import type { Personagem } from "../types/Personagem";

const API_URL = "https://hp-api.onrender.com/api/characters";

export async function buscarPersonagens(): Promise<Personagem[]> {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.map((item: any, index: number) => ({
    id: index.toString(),
    nome: item.name,
    imagem: item.image,
    dataNascimento: item.dateOfBirth,
    casa: item.house,
    patrono: item.patronus,
    ator: item.actor,
    estaVivo: item.alive,
  }));
}
