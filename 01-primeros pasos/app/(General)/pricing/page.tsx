import { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Pricing Page',
 description: 'Esta es la pagina de precios',
    keywords: ['Pricing Page', 'Gustavo', 'informacion'],
};

export default function PricingPage() {
    return (
        <div>
        <p>Pricing page.</p>
        </div>
    );
    }