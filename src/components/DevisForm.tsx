import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

const DevisForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    departureCity: "",
    arrivalCity: "",
    movingDate: "",
    floor: "",
    needsLift: false,
    message: "",
  });

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          setRecaptchaLoaded(true);
        });
      }
    };

    if (window.grecaptcha) {
      loadRecaptcha();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6LdvxA0sAAAAACpeP9EJQUyNmqJjCR9w_muTZpZ6';
      script.async = true;
      script.defer = true;
      script.onload = loadRecaptcha;
      document.head.appendChild(script);
    }

    return () => {
      const badge = document.querySelector('.grecaptcha-badge');
      if (badge) {
        badge.remove();
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, needsLift: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!window.grecaptcha || !recaptchaLoaded) {
      toast({
        title: "Erreur",
        description: "Le système de sécurité n'est pas encore chargé. Veuillez patienter.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaResponse = await window.grecaptcha.execute('6LdvxA0sAAAAACpeP9EJQUyNmqJjCR9w_muTZpZ6', { action: 'submit_devis' });

      const response = await fetch("/api/send-devis.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaResponse,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Demande envoyée !",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          departureCity: "",
          arrivalCity: "",
          movingDate: "",
          floor: "",
          needsLift: false,
          message: "",
        });
      } else {
        throw new Error(result.message || "Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };  return (
    <section id="devis" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary text-center">
            Demandez Votre Devis Gratuit
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-center">
            Réponse sous 2 heures. Service de déménagement sur mesure pour particuliers et professionnels.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-lg p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Votre prénom"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="departureCity">Commune de départ *</Label>
                <Input
                  id="departureCity"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleChange}
                  required
                  placeholder="Ville de départ"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="arrivalCity">Commune d'arrivée *</Label>
                <Input
                  id="arrivalCity"
                  name="arrivalCity"
                  value={formData.arrivalCity}
                  onChange={handleChange}
                  required
                  placeholder="Ville d'arrivée"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="movingDate">Date souhaitée *</Label>
                <Input
                  id="movingDate"
                  name="movingDate"
                  type="date"
                  value={formData.movingDate}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="floor">Étage *</Label>
                <Input
                  id="floor"
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                  required
                  placeholder="Ex: RDC, 1er, 2ème..."
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 py-2">
              <Checkbox
                id="needsLift"
                checked={formData.needsLift}
                onCheckedChange={handleCheckboxChange}
              />
              <Label
                htmlFor="needsLift"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Besoin d'un monte-meuble
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Informations complémentaires sur votre déménagement..."
              />
            </div>

            <Button 
              type="submit"
              size="lg" 
              className="w-full text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  📧 Envoyer ma demande
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DevisForm;
