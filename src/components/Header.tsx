import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToDevis = () => {
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Soft Transports" 
              className="w-16 h-16 object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-secondary">SOFT TRANSPORTS</div>
              <div className="text-xs text-muted-foreground">Votre déménagement, notre métier</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              size="sm"
              className="hidden md:flex"
              asChild
            >
              <a href="tel:+33758562250">
                <Phone className="mr-2 h-4 w-4" />
                07 58 56 22 50
              </a>
            </Button>
            <Button 
              size="sm"
              onClick={scrollToDevis}
            >
              Devis Gratuit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
