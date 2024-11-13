import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Esta es la pagina de informacion",
  keywords: ["About Page", "Gustavo", "informacion"],
};

export default function AboutPage() {
  return (
    <div>
      <p>About page</p>
    </div>
  );
}
