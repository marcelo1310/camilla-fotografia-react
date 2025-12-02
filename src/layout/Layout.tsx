import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contato } from "@/sections/Contato";
import { Depoimentos } from "@/sections/Depoimentos";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}
