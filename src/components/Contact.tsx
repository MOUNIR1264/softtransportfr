import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Contactez-Nous
            </h2>
            <p className="text-xl text-muted-foreground">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted/50 rounded-xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                  <a href="tel:+33758562250" className="text-muted-foreground hover:text-primary transition-colors">
                    07 58 56 22 50
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Appel gratuit 7j/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:contact@soft-transports.fr" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@soft-transports.fr
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    Paris & Île-de-France
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Interventions sur toute la région</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-primary-foreground rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl">Horaires d'ouverture</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
                  <span className="font-medium">Lundi - Samedi</span>
                  <span>7h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
                  <span className="font-medium">Dimanche</span>
                  <span>9h00 - 19h00</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
                <p className="text-sm">
                  Service d'urgence disponible 24h/24 pour les déménagements express
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
