import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/index.css";
import { Layout } from "@/layout";
import { Home } from "@/pages/Home";
import { Corporativo } from "@/pages/Corporativo";
import { Casamento } from "@/pages/Casamentos";
import { PreWedding } from "@/pages/Pre-Wedding";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ensaio-corporativo" element={<Corporativo />} />
          <Route path="fotos-casamento" element={<Casamento />} />
          <Route path="ensaio-pre-wedding" element={<PreWedding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
