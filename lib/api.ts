export async function fetchCharacters(status?: string, gender?: string, page?: number) {
  const url = new URL("https://rickandmortyapi.com/api/character");

  if (status) url.searchParams.append("status", status);
  if (gender) url.searchParams.append("gender", gender);
  if (page) url.searchParams.append("page", String(page));
  
  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error("Veri çekilemedi!");
  }

  return res.json();
}