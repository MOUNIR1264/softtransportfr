import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Truck, Package, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Déménagement Particulier",
    description: "Service complet de déménagement résidentiel pour appartements, maisons et studios à Paris et Île-de-France. Notre équipe professionnelle assure l'emballage soigné de vos biens, le transport sécurisé avec véhicules adaptés, le déballage et l'installation dans votre nouveau logement. Protection optimale de vos meubles et objets fragiles garantie.",
    keywords: "déménagement particulier, service complet déménagement"
  },
  {
    icon: Building2,
    title: "Déménagement Professionnel",
    description: "Déménagement professionnel de bureaux, locaux commerciaux et espaces d'entreprise en Île-de-France. Nous planifions votre déménagement pour minimiser les interruptions d'activité, avec intervention possible en soirée ou weekend. Installation rapide et méthodique de votre mobilier professionnel, matériel informatique et archives. Discrétion et efficacité garanties.",
    keywords: "déménagement professionnel, local d'entreprise"
  },
  {
    icon: Truck,
    title: "Monte-Meuble Paris",
    description: "Service de monte-meuble professionnel à Paris pour les accès difficiles et étages élevés sans ascenseur. Matériel moderne et sécurisé (monte-charge extérieur) permettant de transporter meubles volumineux, pianos, coffres-forts en toute sécurité. Équipe expérimentée et assurée pour toutes hauteurs d'immeubles parisiens.",
    keywords: "monte-meuble paris, matériel de déménagement"
  },
  {
    icon: Package,
    title: "Garde-Meubles Paris",
    description: "Solutions de garde-meubles et stockage sécurisé à Paris et Île-de-France pour courte, moyenne et longue durée. Boxes individuels surveillés 24h/24 avec système de sécurité moderne, contrôle d'accès et vidéosurveillance. Espaces propres, secs et adaptés à tous types de biens. Tarifs dégressifs selon la durée.",
    keywords: "garde-meubles paris, stockage sécurisé"
  },
  {
    icon: Shield,
    title: "Emballage Professionnel",
    description: "Service d'emballage professionnel et protection sur-mesure de vos biens fragiles et précieux. Nous fournissons cartons renforcés de qualité, housses de protection, papier bulle, film étirable et matériel spécialisé. Emballage soigné de vaisselle, objets d'art, électronique et meubles délicats par nos experts.",
    keywords: "emballage protection objets fragiles, matériel déménagement"
  },
  {
    icon: Clock,
    title: "Déménagement Express",
    description: "Service de déménagement express et urgent à Paris pour situations imprévues. Intervention rapide sous 24 à 48 heures maximum partout en Île-de-France. Équipe réactive et véhicules disponibles immédiatement pour déménagements urgents, mutations professionnelles soudaines ou situations d'urgence. Prestation complète même en express.",
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
