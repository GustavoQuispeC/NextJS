import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Esta es la pagina de contacto',
    keywords: ['Contact Page', 'Gustavo', 'informacion'],
};
export default function ContactPage() {
    return (
        <div>
        <p>Contactame.</p>
        </div>
    );
    }
