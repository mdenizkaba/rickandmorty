import clsx from "clsx";

export default function Text({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <p className={clsx("text-sm text-zinc-400", className)}>{children}</p>;
}