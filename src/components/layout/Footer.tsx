export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-black py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 md:flex-row">

        <p>
          © {new Date().getFullYear()} ALQUIMIA DIGITAL
        </p>

        <p>
          Servicio Técnico Integral
        </p>

      </div>

    </footer>
  );
}