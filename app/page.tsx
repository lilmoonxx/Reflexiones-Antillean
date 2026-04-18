"use client";

import React, { useState, useEffect } from 'react';

const reflexiones = [
  {
    id: 1,
    nombre: "Kailany",
    texto: "Me encantó la experiencia. Muchas veces pasamos por alto a los envejecientes porque nos enfocamos más en los niños y en el futuro sin darnos cuenta de que gracias a ellos estamos donde estamos hoy. Tener la oportunidad de compartir con ellos me hizo reflexionar sobre lo importante que es brindarles tiempo, atención y cariño. El poder pintarles las uñas a las damas y verlas tan felices con ese pequeño detalle me llenó de una alegría inmensa. También el simple hecho de conversar con ellas fue muy especial, ya que en esos momentos se crea una conexión genuina que va más allá de cualquier otra cosa. Hoy confirmé que no se necesitan grandes gestos para hacer feliz a alguien; a veces, un acto sencillo puede alegrar completamente el día de otra persona. Y eso, sin duda, también llena el corazón de quien lo da.",
    colorFondo: "bg-yellow-50",
    colorBorde: "border-yellow-200",
    colorSombra: "shadow-yellow-200/40",
    colorBoton: "bg-yellow-200 hover:bg-yellow-300 text-yellow-900",
    colorTextoPrincipal: "text-yellow-950",
  },
  {
    id: 2,
    nombre: "Gabriel",
    texto: "Mi experiencia durante la visita al hogar fue una muy buena. Es algo que en lo personal me ayuda a cambiar como persona. El sacar un ratito para conversar con ellos y jugar me encanto. Me sentí super bien ya que le pudimos sacar una sonrisa a ellos y ver cómo se reían fue algo que me llamo mucho la atención. Es una actividad que fue muy buena y la repetiría.",
    colorFondo: "bg-blue-50",
    colorBorde: "border-blue-200",
    colorSombra: "shadow-blue-200/40",
    colorBoton: "bg-blue-200 hover:bg-blue-300 text-blue-900",
    colorTextoPrincipal: "text-blue-950",
  },
  {
    id: 3,
    nombre: "Lisely",
    texto: "A través de esta experiencia de servicio comunitario tuvimos el privilegio de poder pasar tiempo con unos pacientes que viven en un hogar de ancianos. Mi parte fue darle masajito de mano a los pacientes mientras le cantabamos canciones relajantes y coritos. Fue una bonita experiencia al ver como se relajaban los pacientes mientras recibían masaje y le cantabamos. Algunos hasta se durmieron. Se pudo notar la felicidad de algunos de las personas y es triste pensar que ese hogar ha tenido que ser la última opción de cuido. En conclusión, me encanto la experiencia y definitivamente lo haria otra vez.",
    colorFondo: "bg-purple-50",
    colorBorde: "border-purple-200",
    colorSombra: "shadow-purple-200/40",
    colorBoton: "bg-purple-200 hover:bg-purple-300 text-purple-900",
    colorTextoPrincipal: "text-purple-950",
  },
];

export default function Home() {
  const [seleccionado, setSeleccionado] = useState<null | typeof reflexiones[0]>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans p-6 md:p-12 flex flex-col justify-center overflow-hidden">
      
      {/* EFECTO DE LUZ QUE SIGUE AL MOUSE (Más notable) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 23, 42, 0.08), transparent 50%)`
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            Reflexiones Personales
          </h1>
          <p className="text-base text-slate-500 font-medium">
            Reflexiones compartidas después de nuestra visita al ancianato.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {reflexiones.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSeleccionado(persona)}
              className={`group relative h-64 md:h-72 rounded-3xl border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm ${persona.colorFondo} ${persona.colorBorde} ${persona.colorSombra}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h2 className={`text-2xl font-black uppercase tracking-widest ${persona.colorTextoPrincipal}`}>
                  {persona.nombre}
                </h2>
                <span className={`absolute bottom-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ${persona.colorTextoPrincipal}`}>
                  Clic para leer
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className={`text-center text-sm font-medium line-clamp-6 ${persona.colorTextoPrincipal}`}>
                  "{persona.texto}"
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {seleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSeleccionado(null)}
          ></div>

          <div className={`relative z-10 w-full max-w-3xl rounded-[2rem] p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-200 border ${seleccionado.colorFondo} ${seleccionado.colorBorde}`}>
            <div className={`absolute top-4 left-6 text-6xl opacity-20 font-serif ${seleccionado.colorTextoPrincipal}`}>
              "
            </div>

            <div className="relative text-center">
              <h2 className={`text-3xl font-black mb-6 uppercase tracking-widest ${seleccionado.colorTextoPrincipal}`}>
                {seleccionado.nombre}
              </h2>
              
              <p className={`text-base md:text-lg leading-relaxed md:leading-loose font-medium text-pretty ${seleccionado.colorTextoPrincipal}`}>
                {seleccionado.texto}
              </p>

              <div className="mt-8">
                <button 
                  onClick={() => setSeleccionado(null)}
                  className={`px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 ${seleccionado.colorBoton}`}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}