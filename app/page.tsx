"use client";

import React, { useState, useEffect } from 'react';

const reflexiones = [
  {
    id: 1,
    nombre: "Kailany",
    texto: "Me encantó la experiencia. Muchas veces pasamos por alto a los envejecientes porque nos enfocamos más en los niños y en el futuro, sin darnos cuenta de que gracias a ellos estamos donde estamos hoy. Tener la oportunidad de compartir con ellos me hizo reflexionar sobre lo importante que es brindarles tiempo, atención y cariño. El poder pintarles las uñas a las damas y verlas tan felices con ese pequeño detalle me llenó de una alegría inmensa. También el simple hecho de conversar con ellas fue muy especial, ya que en esos momentos se crea una conexión genuina que va más allá de cualquier otra cosa. Hoy confirmé que no se necesitan grandes gestos para hacer feliz a alguien; a veces, un acto sencillo puede alegrar completamente el día de otra persona. Y eso, sin duda, también llena el corazón de quien lo da.",
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
  {
    id: 4,
    nombre: "Angel",
    texto: "Me tocó compartir con Blanca, María y Francisca. Con Blanca pude pintar y hablar y con las otras dos, que estaban encamadas, simplemente conversé y oré por ellas. Fue algo sencillo, pero se sintió bien genuino. El ambiente era tranquilo y me hizo reflexionar sobre lo importante que es dar tiempo y atención. Más que una tarea lo vi como una oportunidad de servir y aprender a ser más empático.",
    colorFondo: "bg-green-50",
    colorBorde: "border-green-200",
    colorSombra: "shadow-green-200/40",
    colorBoton: "bg-green-200 hover:bg-green-300 text-green-900",
    colorTextoPrincipal: "text-green-950",
  },
  {
    id: 5,
    nombre: "Jeffrey",
    texto: "La experiencia con Blanca Iris Lugo me marcó profundamente. A pesar de su poca audición y su movilidad reducida, mostró una cooperación y un interés que jamás olvidaré. Al principio su rostro era neutral, pero en cuanto empezamos con la actividad de arte-terapia, algo mágico ocurrió: un interes y una emocion viva iluminó su cara. Fue conmovedor ver cómo una persona que quizás ha sido olvidada, que pasa sus días encerrada entre cuatro paredes, volvía a sentirse útil y feliz. Esta experiencia me enseñó que una visita inesperada, un poco de compañía y una actividad sencilla pueden devolverle la alegría a quien ya la había perdido. Nunca subestimemos el poder de estar presentes para los demás porque podemos ser ese rayito de luz que necesitan para continuar.",
    colorFondo: "bg-orange-50",
    colorBorde: "border-orange-200",
    colorSombra: "shadow-orange-200/40",
    colorBoton: "bg-orange-200 hover:bg-orange-300 text-orange-900",
    colorTextoPrincipal: "text-orange-950",
  },
  {
    id: 6,
    nombre: "Hannah",
    texto: "Llegamos al hogar de ancianos y comenzamos la actividad con unos coritos y una oración. Después, le pinté las uñas a cuatro ancianas mientras conversaba con ellas y les hacía compañía. Durante la actividad me sentí feliz al poder compartir con ellas, ya que me recordaban a mi abuelita, quien falleció hace dos meses. Fue un momento emotivo para mí porque ella siempre me pedía que le pintara las uñas, así que esta experiencia me trajo muchos recuerdos. Al mismo tiempo, ver a las ancianas contentas y agradecidas por sus uñas pintadas me hizo sentir muy bien. También me impactó cuando una de ellas dijo que necesitaban más jóvenes dispuestos a cuidar y pasar tiempo con los ancianos. Esa frase me hizo reflexionar sobre la importancia de dedicarles tiempo y atención. En general, me gustó mucho la experiencia porque me permitió ayudar, compartir y crear un momento especial tanto para ellas como para mí.",
    colorFondo: "bg-pink-50",
    colorBorde: "border-pink-200",
    colorSombra: "shadow-pink-200/40",
    colorBoton: "bg-pink-200 hover:bg-pink-300 text-pink-900",
    colorTextoPrincipal: "text-pink-950",
  },
  {
    id: 7,
    nombre: "Kleymary",
    texto: "Fue una experiencia bien bonita en el ancianato. Compartimos con ellos, jugamos, les pintamos las uñas y también les dimos masajes en las manos. Aunque parecen cosas simples, se notaba que para ellos significaba mucho. Me gustó mucho ver cómo sonreían con pequeños detalles. A veces uno piensa que necesita hacer algo grande para hacer feliz a alguien, pero entendí que no es así. Con solo estar ahí, escuchar y dar un poco de cariño, ya estábamos haciendo una diferencia. Esta experiencia me hizo reflexionar sobre la importancia de valorar a las personas mayores. Ellos tienen muchas historias, han vivido mucho, y merecen amor, respeto y compañía. También me hizo pensar en lo rápido que pasa el tiempo y en lo importante que es aprovechar cada momento con las personas que queremos.",
    colorFondo: "bg-sky-50",
    colorBorde: "border-sky-200",
    colorSombra: "shadow-sky-200/40",
    colorBoton: "bg-sky-200 hover:bg-sky-300 text-sky-900",
    colorTextoPrincipal: "text-sky-950",
  },
  {
    id: 8,
    nombre: "Sofia",
    texto: "Tuve el privilegio de asistir a un programa de visitar ancianos en un hogar de cuidado. Esta experiencia me demostró que el corazón realmente se satisface y se siente bien cuando se dedica un tiempo de calidad con personas que realmente le hace falta esa conexión social. Con poder asistir, cantar, jugar y crear arte con los ancianos visitados y hablar con ellos sobre su vida, sus experiencias y sus historias me recordaba que todos somos personas que deseamos y buscamos de conexiones humanas con los que nos importan y amamos. Estoy agradecida de poder haber asistido este evento con el poder ayudar donde necesitaban y tomar fotografías de estos momentos que se hacen memorias para cada uno de nosotros.",
    colorFondo: "bg-teal-50",
    colorBorde: "border-teal-200",
    colorSombra: "shadow-teal-200/40",
    colorBoton: "bg-teal-200 hover:bg-teal-300 text-teal-900",
    colorTextoPrincipal: "text-teal-950",
  }
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
      
      {/* EFECTO DE LUZ QUE SIGUE AL MOUSE */}
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