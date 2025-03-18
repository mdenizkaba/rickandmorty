import clsx from "clsx";

export default function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={clsx("w-full px-6 py-4 bg-zinc-950 rounded-md", className)}>{children}</div>;
}