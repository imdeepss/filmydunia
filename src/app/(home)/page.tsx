import { Header } from "@/components/layouts";
import { Banner } from "./_components";

export default function Home() {
  return (
    <main className="bg-black w-full h-full min-h-screen">
      <Header />
      <Banner />
    </main>
  );
}
