
const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer id="footer" className="bg-black text-white p-12 flex justify-between items-center">
      
      <h3 className="pl-8 text-sm">
        &copy; 2026 Suyog Bastakoti - All Rights Reserved
      </h3>

      <div className="flex gap-6 text-sm font-semibold">
        <a href="website" className="hover:text-lime-400 transition">My Portfolio</a>
        <a href="https://github.com/suyogbastakoti" className="hover:text-lime-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/suyog-bastakoti-a106a9225/" className="hover:text-lime-400 transition">LinkedIn</a>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("hero")}
        className="mr-9 border text-sm px-3 py-2 cursor-pointer rounded-xl hover:bg-lime-300 font-bold hover:text-black shadow-md shadow-white"
      >
        Back to top
      </button>


    </footer>

  );
}

export default Footer
