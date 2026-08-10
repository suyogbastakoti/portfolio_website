
const Contact = () => {
  return (
     <div className="p-24 bg-gray-900 flex justify-between items-center gap-6" >

      <div className="text-white w-1/5 min-w-lg">
        <p className="text-lime-300 mb-6 text-xl">
        ---- Get in Touch
      </p>

      <h1 className="text-3xl mb-4 font-bold">
        Let's build something great
      </h1>

      <p className="mb-6 text-xl text-gray-400">
        Open for freelance projects, full-time roles, and interesting collaborations. 
        If you have something in mind, I'd love to hear about it.
      </p>

      <div className="flex flex-col space-y-2">
        <a href="website" className="hover:text-lime-400 transition">My Portfolio</a>
        <a href="https://github.com/suyogbastakoti" className="hover:text-lime-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/suyog-bastakoti-a106a9225/" className="hover:text-lime-400 transition">LinkedIn</a>
        <a href="resume" className="hover:text-lime-400 transition">Download Resume</a>
      </div>
        
      </div>
      
      {/* form */}
      
      <div className="flex flex-col text-white min-w-md space-y-4">
        <label>Name:</label>
        <input type="text" name="Name" placeholder="Your Name" className="border px-2 py-2" />

        <label>Email:</label>
        <input type="email" placeholder="your@email.com" className= "border px-2 py-2" />

        <label>Message:</label>
        <textarea type="text" placeholder="Tell me about your project..." className="border px-2 py-12">
        </textarea>

        <button className="bg-lime-400 hover:bg-lime-600 transition cursor-pointer w-1/3 py-2 rounded-xl text-black font-serif">
          Send Message
        </button>
      </div>
      
    </div>
  );
}

export default Contact
