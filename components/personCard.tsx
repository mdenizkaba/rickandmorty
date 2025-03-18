import Image from "next/image";
import Headings from "./headings";
import Text from "./text";
import clsx from "clsx";

export default function PersonCard({
  name,
  species,
  gender,
  origin,
  status,
  image,
}: {
  name: string;
  species: string;
  gender: string;
  origin: string;
  status: string;
  image: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-md">
      <div className="w-full h-60 relative">
        <Image
          src={image}
          alt="Person"
          fill
          className="object-cover"
        />
        <div className={clsx("absolute top-4 right-4 px-2 py-1 rounded",status === "Dead" ? "bg-red-800" : "bg-green-800")}>
          <Text className="!text-zinc-50">{status}</Text>
        </div>
      </div>
      <div className="bg-zinc-950 px-6 py-4">
        <Headings level={5}>{name}</Headings>
        <Text className="mt-1">Species</Text>
        <Headings level={5}>{species}</Headings>
        <Text className="mt-1">Gender</Text>
        <Headings level={5}>{gender}</Headings>
        <Text className="mt-1">Origin</Text>
        <Headings level={5}>{origin}</Headings>
      </div>
    </div>
  );
}
