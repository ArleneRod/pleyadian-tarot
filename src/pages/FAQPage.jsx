import React from 'react';
import FAQ from '../components/FAQ';
import { SEOHead } from '../components/SEOHead';

function FAQPage() {
    return (
        <>
            <SEOHead
                title="Preguntas Frecuentes - Pleyadian Tarot | FAQ sobre Lecturas de Tarot"
                description="Resuelve todas tus dudas sobre las consultas de tarot con Astrid. Preguntas frecuentes sobre métodos de pago, tipos de consulta, confidencialidad y más."
                keywords="FAQ tarot, preguntas frecuentes tarot, consultas tarot Arequipa, dudas tarot"
                url="https://pleyadian-tarot.vercel.app/faq"
            />
            <div className="min-h-screen">
                <FAQ />
            </div>
        </>
    );
}

export default FAQPage;
