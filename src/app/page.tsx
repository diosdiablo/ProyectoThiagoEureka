import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import Stats from "@/components/site/stats";
import Problem from "@/components/site/problem";
import Solution from "@/components/site/solution";
import Stack from "@/components/site/stack";
import Methodology from "@/components/site/methodology";
import Results from "@/components/site/results";
import Demo from "@/components/site/demo";
import Conclusions from "@/components/site/conclusions";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Stack />
        <Methodology />
        <Results />
        <Demo />
        <Conclusions />
      </main>
      <Footer />
    </div>
  );
}
