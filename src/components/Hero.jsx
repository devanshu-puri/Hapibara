import veggies from "../assets/veggies.png";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#EDD7B4] flex flex-col md:flex-row items-center justify-between px-10 py-8">
      <img src={veggies} alt="Veggies" className="w-full md:w-[45%] max-w-md" />

      <div className="text-center md:text-right md:w-[40%]">
        <img src={logo} alt="Hapibara Icon" className="mx-auto md:ml-auto w-24 mb-2" />
        <h1 className="text-green-900 text-4xl md:text-5xl font-extrabold">HAPIBARA</h1>
        <p className="text-green-900 text-base md:text-lg font-semibold mt-1">EVERY BITE MAKES A DIFFERENCE</p>
      </div>
    </section>
  );
};

export default Hero;
