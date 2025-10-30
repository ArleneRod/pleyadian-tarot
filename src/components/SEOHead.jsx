import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead = ({
                            title = "Pleyadian Tarot - Lectura de Tarot en Arequipa, Perú | Consultas Online",
                            description = "Consultas de tarot profesionales en Arequipa, Perú. Lectura de cartas online por videollamada y audio. Encuentra claridad y guía espiritual con Astrid, tarotista profesional.",
                            keywords = "tarot Arequipa, lectura de tarot Perú, tarot online, consulta tarot, tarotista Arequipa, lectura cartas tarot, tarot videollamada, tarot whatsapp, consulta espiritual Perú, tarot amor, tarot profesional",
                            ogImage = "/assets/pleyadian-og-image.jpg",
                            url = "https://pleyadian-tarot.vercel.app",
                            type = "website"
                        }) => {
    const siteUrl = url.replace(/\/$/, '');

    // Schema.org structured data para SEO local
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Pleyadian Tarot",
        "image": `${siteUrl}${ogImage}`,
        "description": description,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+51987698897",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Arequipa",
            "addressRegion": "Arequipa",
            "postalCode": "",
            "addressCountry": "PE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -16.4090,
            "longitude": -71.5375
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "21:00"
        },
        "sameAs": [
            "https://www.instagram.com/pleyadian.tarot"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "2"
        },
        "offers": [
            {
                "@type": "Offer",
                "name": "Lectura de 1 pregunta",
                "price": "15",
                "priceCurrency": "PEN"
            },
            {
                "@type": "Offer",
                "name": "Lectura de 3 preguntas",
                "price": "40",
                "priceCurrency": "PEN"
            },
            {
                "@type": "Offer",
                "name": "Sesión Videollamada Media Hora",
                "price": "80",
                "priceCurrency": "PEN"
            },
            {
                "@type": "Offer",
                "name": "Sesión Videollamada 1 Hora",
                "price": "140",
                "priceCurrency": "PEN"
            }
        ]
    };

    // Schema para el servicio
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Lectura de Tarot",
        "provider": {
            "@type": "Person",
            "name": "Astrid",
            "jobTitle": "Tarotista Profesional"
        },
        "areaServed": {
            "@type": "City",
            "name": "Arequipa"
        }
    };

    return (
        <Helmet>
            {/* Meta Tags Básicos */}
            <html lang="es-PE" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Pleyadian Tarot - Astrid" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={siteUrl} />

            {/* Geo Tags para SEO Local */}
            <meta name="geo.region" content="PE-AQP" />
            <meta name="geo.placename" content="Arequipa" />
            <meta name="geo.position" content="-16.4090;-71.5375" />
            <meta name="ICBM" content="-16.4090, -71.5375" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="es_PE" />
            <meta property="og:site_name" content="Pleyadian Tarot" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* WhatsApp Optimization */}
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:alt" content="Pleyadian Tarot - Lectura de Tarot en Arequipa" />

            {/* Schema.org structured data */}
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </script>

            {/* PWA Meta Tags */}
            <meta name="theme-color" content="#c026d3" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Pleyadian Tarot" />
        </Helmet>
    );
};

export default SEOHead;