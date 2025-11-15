import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DevisRequest {
  nom: string;
  email: string;
  telephone: string;
  depart: string;
  arrivee: string;
  date: string;
  details: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: DevisRequest = await req.json();
    console.log("Demande de devis reçue:", formData);

    // Email envoyé au propriétaire (vous)
    const ownerEmailResponse = await resend.emails.send({
      from: "Soft Transports <onboarding@resend.dev>",
      to: ["mounirbendou05@gmail.com"],
      subject: `Nouvelle demande de devis - ${formData.nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">Nouvelle demande de devis</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f1f1f; margin-top: 0;">Informations du client</h2>
            <p><strong>Nom:</strong> ${formData.nom}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Téléphone:</strong> ${formData.telephone}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f1f1f; margin-top: 0;">Détails du déménagement</h2>
            <p><strong>Adresse de départ:</strong> ${formData.depart}</p>
            <p><strong>Adresse d'arrivée:</strong> ${formData.arrivee}</p>
            ${formData.date ? `<p><strong>Date souhaitée:</strong> ${formData.date}</p>` : ''}
          </div>
          
          ${formData.details ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f1f1f; margin-top: 0;">Informations complémentaires</h2>
            <p>${formData.details}</p>
          </div>
          ` : ''}
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Cet email a été envoyé automatiquement depuis le formulaire de devis de Soft Transports.
          </p>
        </div>
      `,
    });

    console.log("Email propriétaire envoyé:", ownerEmailResponse);

    // Email de confirmation au client
    const clientEmailResponse = await resend.emails.send({
      from: "Soft Transports <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Confirmation de votre demande de devis - Soft Transports",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #DC2626;">Merci pour votre demande de devis !</h1>
          
          <p>Bonjour <strong>${formData.nom}</strong>,</p>
          
          <p>Nous avons bien reçu votre demande de devis pour votre déménagement.</p>
          
          <div style="background-color: #FEF2F2; padding: 20px; border-left: 4px solid #DC2626; margin: 20px 0;">
            <p style="margin: 0;"><strong>Notre équipe vous contactera dans les plus brefs délais pour établir un devis personnalisé.</strong></p>
          </div>
          
          <h2 style="color: #1f1f1f;">Récapitulatif de votre demande</h2>
          ${formData.date ? `<p><strong>Date souhaitée:</strong> ${formData.date}</p>` : ''}
          <p><strong>Départ:</strong> ${formData.depart}</p>
          <p><strong>Arrivée:</strong> ${formData.arrivee}</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p><strong>Besoin d'informations ?</strong></p>
            <p>📞 Téléphone: 07 58 56 22 50</p>
            <p>📧 Email: contact@soft-transports.fr</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            <strong>SOFT TRANSPORTS</strong><br>
            Votre déménagement, notre métier
          </p>
        </div>
      `,
    });

    console.log("Email client envoyé:", clientEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Emails envoyés avec succès" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Erreur lors de l'envoi des emails:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
