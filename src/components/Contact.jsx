
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipient = "suyog017@gmail.com";
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open Gmail web compose with prefilled values in a new tab.
    // If the user isn't signed in, Gmail will prompt for sign-in first.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient
    )}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    
    <section id="contact" className="p-24 bg-gray-900 flex justify-between items-center gap-6">
      <div className="text-white w-1/5 min-w-lg">
        <p className="text-lime-300 mb-6 text-xl">---- Get in Touch</p>

        <h1 className="text-3xl mb-4 font-bold">Let's build something great</h1>

        <p className="mb-6 text-xl text-gray-400">
          Open for freelance projects, full-time roles, and interesting collaborations.
          If you have something in mind, I'd love to hear about it.
        </p>

        <div className="flex flex-col space-y-2">
          <a href="https://suyogbastakoti.com" className="hover:text-lime-400 transition">My Portfolio</a>
          <a href="https://github.com/suyogbastakoti" className="hover:text-lime-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/suyog-bastakoti-a106a9225/" className="hover:text-lime-400 transition">LinkedIn</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col text-white min-w-md space-y-4 w-full max-w-xl">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border p-2 rounded-xl"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="border p-2 rounded-xl"
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          required
          className="border px-2 py-12 rounded-xl"
        />

        <button 
          type="submit" 
          className="bg-lime-500 text-white hover:bg-lime-600 transition cursor-pointer w-1/3 py-2 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
