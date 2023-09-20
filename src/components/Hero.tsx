import "./hero.css";

export const Hero = () => {
  return (
    <section className="h-screen md:grid md:grid-cols-2 bg-black">
      <div className="absolute top-0 left-0 z-10 h-full w-full flex items-center justify-center pointer-events-none">
        <div className="text-white text-center font-hero">
          <h1 className="text-4xl lg:text-7xl font-bold">Markus Heinemann</h1>
          <h2 className="text-xl lg:text-3xl mt-8 md:mt-9 lg:mt-10 font-medium">
            Crafting Digital Landscapes with the Precision of an Athlete
          </h2>
          <button
            type="button"
            className="mt-8 md:mt-10 lg:mt-12 pointer-events-auto rounded-md py-2 px-5 font-bold text-xl md:text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out no-underline"
          >
            About Me
          </button>
        </div>
      </div>

      <div id="hero-sport" className="bg-hero-sport bg-center h-1/2 md:h-auto">
        <div className="bg-[rgba(0,0,0,0.55)] h-full hover:opacity-30 transition-all duration-100 ease-in-out"></div>
      </div>
      <div id="hero-tech" className="bg-hero-tech bg-center h-1/2 md:h-auto">
        <div className="bg-[rgba(0,0,0,0.55)] h-full hover:opacity-30 transition-all duration-100 ease-in-out"></div>
      </div>
    </section>
  );
};
