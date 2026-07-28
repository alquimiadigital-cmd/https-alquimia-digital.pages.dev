          {/* TARJETA 3: UBICACIÓN DE LABORATORIO VERIFICADA */}
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
                Cerro Ceferino, Sierra de la Ventana. Hacé clic abajo para abrir las indicaciones en tu GPS.
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

