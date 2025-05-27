
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PricingTable } from "@/components/PricingTable";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Services />
      <PricingTable />
      <Contact />
    </div>
  );
};

export default Index;
