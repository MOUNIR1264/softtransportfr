import { Award, Users, Shield, Euro } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "15 ans d'expérience",
    description: "Des déménageurs professionnels formés et expérimentés"
  },
  {
    icon: Shield,
    title: "Transport sécurisé",
    description: "Assurance tous risques incluse sur tous nos déménagements"
  },
  {
    icon: Euro,
    title: "Devis gratuit",
    description: "Estimation précise et transparente sans engagement"
  },
  {
    icon: Users,
    title: "Équipe dédiée",
    description: "Personnel qualifié et matériel de déménagement professionnel"
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
