import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
//import { Contato } from "@/sections/Contato";
import { Preloader } from "@/components/Preloader";
import { useEffect, useState } from "react";
import { BotaoFlutuante } from "@/components/BotaoFlutuante";


export function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700 h-[100%]`}
      >
        <Header />
        <Outlet />
        <Footer />
        <BotaoFlutuante />
      </div>
    </>
  );
}
