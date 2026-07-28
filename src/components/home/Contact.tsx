import Image from "next/image";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#050b14] py-20 border-t border-cyan-500/10">
      
      {/* Fondo místico */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9d4edd11,transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            ¡Hablemos Hoy Mismo!
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-xl mx-auto">
            Escribinos, escaneá nuestro código o visitanos en nuestro laboratorio técnico profesional.
          </p>
        </div>

        {/* Cuadrícula de 3 Columnas */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* TARJETA 1: INFORMACIÓN Y ACCESO DIRECTO */}
          <div className="flex flex-col justify-between p-8 border border-cyan-500/20 bg-[#07111f]/50 rounded-2xl backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div>
              <h3 className="text-2xl font-black text-white">ALQUIMIA DIGITAL</h3>
              <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mt-1">
                Servicio Técnico Integral
              </p>
              <p className="text-sm text-gray-300 mt-6 leading-relaxed">
                Traé tu equipo para un diagnóstico preciso. Reparamos computadoras, notebooks, consolas de videojuegos y electrónica avanzada con garantía escrita.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] text-center"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* TARJETA 2: CÓDIGO QR ESCANEABLE */}
          <div className="flex flex-col items-center justify-center p-8 border border-cyan-500/20 bg-[#07111f]/50 rounded-2xl backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.3)] text-center">
            <h3 className="text-xl font-bold text-white mb-2">Escaneá y escribinos</h3>
            <p className="text-xs text-gray-400 mb-6">Apuntá tu cámara para abrir el chat</p>
            
            <div className="relative w-48 h-48 bg-white p-2 rounded-xl border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] flex items-center justify-center">
              <Image 
                src="/qr-whatsapp.png" 
                alt="QR de Contacto WhatsApp Alquimia Digital"
                width={176}
                height={176}
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* TARJETA 3: BOTÓN DE UBICACIÓN DIRECTO POR CID */}
          <div className="flex flex-col justify-between p-8 border border-cyan-500/20 bg-[#07111f]/50 rounded-2xl backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.3)] text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">¿Dónde estamos?</h3>
              <p className="text-xs text-gray-400 mb-6">Ubicación de nuestro laboratorio</p>
              
              {/* Estética de mapa abstracto gamer */}
              <div className="relative w-full h-32 rounded-xl bg-[#050b14] border border-cyan-500/10 flex flex-col items-center justify-center overflow-hidden my-4 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00bfff15,transparent_70%)] group-hover:scale-110 transition duration-500" />
                <span className="text-4xl mb-1">📍</span>
                <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">LABORATORIO ACTIVO</span>
              </div>
              
              <p className="text-xs text-gray-400 px-2 mt-4">
                Hacé clic abajo para abrir la ubicación exacta y trazar la ruta de navegación sin errores.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-500 px-6 py-4 font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-center"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
