import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/index.css";
import { Layout } from "@/layout";
import { Home } from "@/pages/Home";
import { Corporativo } from "@/pages/Corporativo";
import { Casamento } from "@/pages/Casamentos";
import { PreWedding } from "@/pages/Pre-Wedding";
import { NotFound } from "@/pages/NotFound";
import { Sobre } from "./pages/Sobre";
import { PaginaDepoimentos } from "./pages/PaginaDepoimentos";
import { Contato } from "./pages/Contato";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="depoimentos" element={<PaginaDepoimentos />} />
          <Route path="ensaio-casamento" element={<Casamento />} />
          <Route path="ensaio-pre-wedding" element={<PreWedding />} />
          <Route path="ensaio-gestante" element={<PreWedding />} />
          <Route path="ensaio-familia" element={<PreWedding />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
