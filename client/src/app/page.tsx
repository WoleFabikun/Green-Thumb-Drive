import Image from "next/image";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Chat/>
    </main>
  );
}
