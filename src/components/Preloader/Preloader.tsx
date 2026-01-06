export function Preloader() {
  return (
    <div className="fixed inset-0 flex flex-col gap-5 items-center justify-center bg-[var(--branco)]/80 z-50 transition-opacity duration-500">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--vinho)] border-t-[var(--bege)]"></div>
      <p className="animate-pulse">Carregando...</p>
    </div>
  );
}