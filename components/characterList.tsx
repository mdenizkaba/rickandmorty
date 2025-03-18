"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/lib/api";
import PersonCard from "./personCard";
import { useQueryState } from "nuqs";
import { Character } from "@/types";

export default function CharacterList() {
  const [status] = useQueryState("status", { defaultValue: "" });
  const [gender] = useQueryState("gender", { defaultValue: "" });

  const { data, error, isLoading } = useQuery({
    queryKey: ["characters", status, gender],
    queryFn: () => fetchCharacters(status, gender),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  if (!data?.results?.length) return <div>No characters found</div>;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data?.results?.map((character: Character) => (
          <PersonCard
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            status={character.status}
          />
        ))}
      </div>
    </div>
  );
}
