import Hero from "@/components/HomePage/Hero";
import UserLayout from "@/components/Layout/UserLayout";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <UserLayout>
        <Hero />
      </UserLayout>
    </main>
  );
}
