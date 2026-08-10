
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black backdrop-blur-2xl text-white">
        <h2 className="pl-18 text-2xl font-bold text-lime-300">
          SB Codes
        </h2>

        <div className="flex gap-4 text-sm text-gray-300 ">
          <a href="work" className="font-serif hover:text-white">WORK</a>
          <a href="testimonials" className="font-serif hover:text-white">TESTIMONIALS</a>
          <a href="contact" className="font-serif hover:text-white">CONTACT</a>
        </div>

          <button className="mr-18 border font-bold hover:bg-gray-700 transition text-sm cursor-pointer px-3 py-2 rounded-2xl">
            Hire me
          </button>

      </nav>
  )
}

export default Navbar
