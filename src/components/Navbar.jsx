
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-black backdrop-blur-2xl text-white">
      <button
        type="button"
        onClick={() => scrollToSection("hero")}
        className="pl-18 text-2xl font-bold text-lime-300 cursor-pointer"
      >
        SB Codes
      </button>

      <div className="flex gap-4 text-sm text-gray-300">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }} className="font-serif hover:text-white cursor-pointer">WORK</a>
        <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }} className="font-serif hover:text-white cursor-pointer">TESTIMONIALS</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="font-serif hover:text-white cursor-pointer">CONTACT</a>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("contact")}
        className="mr-18 border font-bold hover:bg-lime-300 hover:text-black transition shadow-md shadow-white text-sm cursor-pointer p-4 rounded-2xl"
      >
        Hire me
      </button>
    </nav>
  )
}

export default Navbar
