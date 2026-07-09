import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-bg text-text">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
