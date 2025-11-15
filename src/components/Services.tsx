import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Truck, Package, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Déménagement Particulier",
    description: "Service complet de déménagement pour appartements et maisons. Emballage, transport sécurisé et déballage avec soin.",
    keywords: "déménagement particulier, service complet déménagement"
  },
  {
    icon: Building2,
    title: "Déménagement Professionnel",
    description: "Déménagement de bureaux et locaux d'entreprise. Minimisation des interruptions d'activité et installation rapide.",
    keywords: "déménagement professionnel, local d'entreprise"
  },
  {
    icon: Truck,
    title: "Monte-Meuble Paris",
    description: "Service de monte-meuble professionnel pour accès difficiles. Matériel moderne et équipe expérimentée.",
    keywords: "monte-meuble paris, matériel de déménagement"
  },
  {
    icon: Package,
    title: "Garde-Meubles Paris",
    description: "Solutions de stockage sécurisées courte et longue durée. Garde-meubles surveillés 24h/24 en Île-de-France.",
    keywords: "garde-meubles paris, stockage sécurisé"
  },
  {
    icon: Shield,
    title: "Emballage Professionnel",
    description: "Protection et emballage de vos objets fragiles avec du matériel adapté. Cartons, housses et film protecteur.",
    keywords: "emballage protection objets fragiles, matériel déménagement"
  },
  {
    icon: Clock,
    title: "Déménagement Express",
    description: "Service de déménagement rapide pour urgences. Disponibilité sous 24-48h partout en Île-de-France.",
    keywords: "déménagement express, prestation de déménagement"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Nos Prestations de Déménagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des déménageurs professionnels à votre service pour tous vos projets de déménagement en Île-de-France
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
