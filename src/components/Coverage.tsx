import { MapPin, CheckCircle2 } from "lucide-react";

const zones = [
  "Paris (75)",
  "Hauts-de-Seine (92)",
  "Seine-Saint-Denis (93)",
  "Val-de-Marne (94)",
  "Seine-et-Marne (77)",
  "Yvelines (78)",
  "Essonne (91)",
  "Val-d'Oise (95)"
];

const Coverage = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Zone de Couverture
          </h2>
          
          <p className="text-xl mb-12 opacity-90">
            Soft Transports intervient dans toute l'Île-de-France pour vos déménagements. 
            Transport sécurisé garanti sur tous nos trajets.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {zones.map((zone, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-secondary-foreground/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{zone}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-lg opacity-90">
            Besoin d'un déménagement hors Île-de-France ? Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
