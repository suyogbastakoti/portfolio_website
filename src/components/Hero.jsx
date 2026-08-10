

const Hero = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-black via-purple-950 to-black text-white flex justify-between items-end p-24">
        <div className="w-1/3">
          <h1 className="text-left text-6xl mb-8">
            Frontend Developer & Designer
          </h1>

          <p>
            I craft fast, accessible, and beautifully detailed web interfaces. 
            5+ years turning complex ideas into clean code.
          </p>
          
          <div className="flex gap-4 mt-5">
            <button className="border bg-lime-400 rounded-2xl px-3 py-2 text-black cursor-pointer hover:bg-lime-500 transition">
              View my work
            </button>

          <button className="border bg-black rounded-2xl px-3 py-2 cursor-pointer hover:bg-gray-900 transition">
            Get in touch
          </button>
          </div>
          
          
        </div>
        <div>
          <p>scroll</p>
        </div>
      </div>
  );
}

export default Hero
