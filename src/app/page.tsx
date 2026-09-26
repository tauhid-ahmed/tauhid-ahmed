import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/features/hero";
import { ProfessionalSnapshot } from "@/features/snapshot";
import { Experience } from "@/features/experience";
import { Projects } from "@/features/projects";
import { Stack } from "@/features/stack";
import { Contact } from "@/features/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ProfessionalSnapshot />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
