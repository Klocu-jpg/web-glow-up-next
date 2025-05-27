
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PricingTable } from "@/components/PricingTable";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { BookingCalendar } from "@/components/BookingCalendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Services />
      <PricingTable />
      <BookingCalendar />
      <Contact />
    </div>
  );
};

export default Index;
