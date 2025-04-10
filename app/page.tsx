import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* New Navbar */}
      <Navbar />

      

      <main className="relative container mx-auto px-4 py-16">
          <Hero />
        <Features />

       <Pricing />
      </main>
    </div>
  );
}
