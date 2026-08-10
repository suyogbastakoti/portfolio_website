
const Footer = () => {
  return (
    <div className="bg-black text-white p-12 flex justify-between items-center">
      
      <h3 className="pl-8 text-sm">
        &copy; 2026 Suyog Bastakoti - Built With Care
      </h3>

      <div className="flex gap-6 text-sm">
        <a href="website" className="hover:text-lime-400 transition">My Portfolio</a>
        <a href="https://github.com/suyogbastakoti" className="hover:text-lime-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/suyog-bastakoti-a106a9225/" className="hover:text-lime-400 transition">LinkedIn</a>
      </div>

      <button className="mr-9 border text-sm px-3 py-2 cursor-pointer hover:bg-gray-700">
        Back to top
      </button>


    </div>

  );
}

export default Footer
