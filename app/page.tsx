import Headings from "@/components/headings";
import CharacterList from "@/components/characterList";
import { getQueryClient } from "@/lib/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchCharacters } from "@/lib/api";

interface PageProps {
  searchParams: {
    status?: string;
    gender?: string;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const queryClient = getQueryClient();
  const status = searchParams.status || "";
  const gender = searchParams.gender || "";

  try {
    await queryClient.prefetchQuery({
      queryKey: ["characters", status, gender],
      queryFn: () => fetchCharacters(status, gender),
      staleTime: 1000 * 60 * 5, // 5 dakika boyunca veriyi taze tut
    });
  } catch (error) {
    console.error("Data fetching failed:", error);
  }
  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <Headings level={2} className="mb-4">Rick and Morty Characters</Headings>
      <HydrationBoundary state={dehydratedState}>
        <CharacterList />
      </HydrationBoundary>
    </main>
  );
}
