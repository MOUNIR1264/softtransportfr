import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Coverage from "@/components/Coverage";
import DevisForm from "@/components/DevisForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Coverage />
      <DevisForm />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
