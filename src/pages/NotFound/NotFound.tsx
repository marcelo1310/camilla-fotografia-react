import { Link } from "react-router-dom";

export function NotFound() {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gray-50">
      <h1 className="text-7xl font-bold text-[var(--vinho)]">404</h1>
      <p className="text-lg text-[var(--vinho)] mt-2">
        A página que você procura não foi encontrada.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[var(--vinho)] text-[var(--branco)] rounded-lg text-sm hover:bg-[var(--vinho)]/90 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}