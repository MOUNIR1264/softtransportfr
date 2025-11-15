import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="Soft Transports" 
              className="w-32 h-32 object-contain mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-sm opacity-90">
              Expert en déménagement à Paris et en Île-de-France. Votre déménagement, notre métier.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Déménagement particulier</li>
              <li>Déménagement professionnel</li>
              <li>Monte-meuble Paris</li>
              <li>Garde-meubles</li>
              <li>Déménagement express</li>
              <li>Transport sécurisé</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Informations</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Devis gratuit</li>
              <li>Zone d'intervention</li>
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>CGV</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {currentYear} Soft Transports. Tous droits réservés. | Déménagement Paris & Île-de-France
          </p>
          <p className="text-xs opacity-75 mt-2">
            Déménageurs professionnels certifiés - Transport sécurisé - Service complet de déménagement
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
