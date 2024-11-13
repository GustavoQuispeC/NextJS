import { Navbar } from "@/components";

//!  lrc => layout react component - Snippet

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
    <Navbar />
     <main className="flex flex-col items-center p-24">
      <span className="text-lg">
      <h6>Bienvenidos</h6>
        
      {children}
      </span>
    </main>
    </>
   
  );
}
