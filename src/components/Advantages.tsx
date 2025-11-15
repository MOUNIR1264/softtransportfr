import { Award, Users, Shield, Euro } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "15 ans d'expérience",
    description: "Plus de 15 ans d'expertise dans le déménagement à Paris et Île-de-France. Des déménageurs professionnels certifiés, formés aux techniques modernes de manutention et expérimentés dans tous types de déménagements résidentiels et professionnels. Savoir-faire reconnu et milliers de clients satisfaits."
  },
  {
    icon: Shield,
    title: "Transport sécurisé",
    description: "Transport ultra-sécurisé de vos biens avec assurance tous risques incluse dans nos prestations. Véhicules modernes équipés, protection optimale des meubles et objets fragiles. Garantie complète contre la casse, les dommages et les pertes pendant toute la durée du déménagement. Votre tranquillité d'esprit est notre priorité."
  },
  {
    icon: Euro,
    title: "Devis gratuit",
    description: "Devis de déménagement 100% gratuit et sans engagement sous 24h. Estimation précise et détaillée après évaluation de votre volume à déménager. Tarifs transparents et compétitifs, aucun frais caché. Possibilité de visite gratuite à domicile pour un chiffrage exact. Conseils personnalisés inclus."
  },
  {
    icon: Users,
    title: "Équipe dédiée",
    description: "Équipe dédiée et spécialisée assignée à votre déménagement du début à la fin. Personnel qualifié, courtois et respectueux de vos biens. Matériel professionnel de dernière génération : camions adaptés, monte-meubles, diables, sangles, couvertures de protection. Coordination parfaite pour un déménagement sans stress."
  }
];

const Advantages = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Pourquoi Choisir Soft Transports ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            L'excellence du service de déménagement à Paris et en Île-de-France
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
