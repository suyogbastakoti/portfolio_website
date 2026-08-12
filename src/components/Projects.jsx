

const Projects = () => {
  return (
    <section id="projects" className="p-24 bg-linear-to-r from-black via-gray-950 to-black text-white">
      <h1 className="text-3xl text-lime-300 font-bold mb-6">
        Things I've built
      </h1>

      <div className="grid grid-cols-3 gap-4 p-5">

        <div className="hover:bg-gray-600 transition space-y-5 text-white p-6 rounded-xl">
          <h1 className="text-2xl font-bold">Ohms Teams - Member Management</h1>
          
          <p className="text-md ">
            A project which reflects a member management dashboard with CRUD operation 
            as well as sorting and searching functions working with a sample api/ dummy api from dummyjson.com.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border p-2 rounded-xl">
              React
            </button>

            <button className="border p-2 rounded-xl">
              Tailwind CSS
            </button>

          </div>

          <p className="text-lime-400">
            <a href="https://github.com/suyogbastakoti/member-management">View Project ▶</a>
          </p>
          
        </div>


      <div className="hover:bg-gray-600 transition text-white space-y-5 p-6 rounded-xl">
          
          <h1 className="text-2xl font-bold">
            Smriti Trader - Berger Paints Dealer 
          </h1>
          
          <p className="text-md ">
            This is a fullstack business website built using MERN stack for an Authorized Berger Paints Dealer in Kathmandu, Gaurighat, 
            providing quality paints and solutions for homes and businesses.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border p-2 rounded-xl">
              React
            </button>

            <button className="border p-2 rounded-xl">
              Tailwind CSS
            </button>

            <button className="border p-2 rounded-xl">
              Node Js/ Express Js
            </button>

            <button className="border p-2 rounded-xl">
              Mongo DB
            </button>

          </div>

          <p className="text-lime-400">
            <a href="https://smriti-traders.vercel.app/">View Project ▶</a>
              {/* View Project ▶ */}
          </p>
          
        </div>



        <div className="hover:bg-gray-600 transition text-white space-y-5 p-6 rounded-xl">
          <h1 className="text-2xl font-bold">SmartHire Hub</h1>
          
          <p className="text-md text-justify">
            A job portal like platform which helps connect jobseekers and employers together.
            Employers will have to choose from different plans, free to premium plans to upload 
            jobs. While Jobseekers can simply apply to jobs while also being able to generate CV manually as well as automatically. 
            Also they can just use "match my cv" feature to automatically find jobs based on their profile skills and expreiences.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border px-2 rounded-xl">
              React
            </button>

            <button className="border px-2 rounded-xl">
              Tailwind CSS
            </button>

            <button className="border px-2 rounded-xl">
              Node Js/ Express Js
            </button>

            <button className="border px-2 rounded-xl">
              Mongo DB
            </button>

          </div>


          <p className="text-lime-400">
            <a href="https://smart-hire-hub-suyog-bastakotis-projects.vercel.app/">View Project ▶</a>
              {/* View Project ▶ */}
          </p>
          
        </div>



        <div className="hover:bg-gray-600 transition text-white space-y-5 p-6 rounded-xl">
          
          <h1 className="text-2xl font-bold">
            Movie Explorer - IMdb Project
          </h1>
          
          <p className="text-md ">
            This is a movie explorer website which fetches popular movies and shows datas from 
            IMDB officials api and displays it with the Movie Poster, Ratings as well as its overview.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border p-2 rounded-xl">
              React
            </button>

            <button className="border p-2 rounded-xl">
              Tailwind CSS
            </button>

          </div>

          <p className="text-lime-400 cursor-pointer">
              <a href="https://movie-explorer-two-wheat.vercel.app/">View Project ▶</a>
          </p>
          
        </div>

      </div>
    </section>
  );
}

export default Projects;
