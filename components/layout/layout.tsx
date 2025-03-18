import Container from "../container";
import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh w-screen py-8">
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    </div>
  );
}
