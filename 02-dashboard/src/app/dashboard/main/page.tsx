import { SimpleWidget } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "Información general",
};

export default function MainPage() {
  return (
    <div className="p-2 text-black">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <div className="flex flex-wrap justify-center p-2">
      <SimpleWidget />
        
        </div>

    </div>
   
  );
}