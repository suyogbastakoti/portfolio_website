

const Projects = () => {
  return (
    <div className="p-24 bg-linear-to-r from-black via-gray-950 to-black text-white">
      <h1 className="text-3xl font-bold mb-6">
        Things I've built
      </h1>

      <div className="grid grid-cols-3 gap-4 p-5">

        <div className="hover:bg-gray-900 transition text-white space-y-2 p-5">
          <h1>Vanta - Design System</h1>
          
          <p className="text-sm ">
            A component library and token system for a SaaS product, serving 12+ product teams.
            Built in React with Storybook and full a11y compliance.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border px-2">
              React
            </button>

            <button className="border px-2">
              Typescript
            </button>

          </div>

          <p className="text-lime-400">
              View Project ▶
          </p>
          
        </div>


      <div className="hover:bg-gray-900 transition text-white space-y-2 p-5">
          <h1>Lumio — Analytics Dashboard</h1>
          
          <p className="text-sm ">
            Real-time data dashboard with custom SVG charts, 
            complex filter state, and sub-100ms render times on large datasets via virtualization.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border px-2">
              React
            </button>

            <button className="border px-2">
              Typescript
            </button>

          </div>

          <p className="text-lime-400">
              View Project ▶
          </p>
          
        </div>



        <div className="hover:bg-gray-900 transition text-white space-y-2 p-5">
          <h1>SmartHire Hub</h1>
          
          <p className="text-sm text-justify">
            A job portal like platform which helps connect jobseekers and employers together.
            Employers will have to choose from different plans, free to premium plans to upload 
            jobs.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border px-2">
              React
            </button>

            <button className="border px-2">
              Typescript
            </button>

          </div>

          <p className="text-lime-400">
            <a href="https://smart-hire-hub-suyog-bastakotis-projects.vercel.app/">View Project ▶</a>
              {/* View Project ▶ */}
          </p>
          
        </div>



        <div className="hover:bg-gray-900 transition text-white space-y-2 p-5">
          <h1>Bloom — E-Commerce Storefront</h1>
          
          <p className="text-sm ">
            Headless commerce build with 98/100 Lighthouse score, animated transitions, 
            and a custom cart system. Conversion up 34% post-launch.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="border px-2">
              React
            </button>

            <button className="border px-2">
              Typescript
            </button>

          </div>

          <p className="text-lime-400">
              View Project ▶
          </p>
          
        </div>

      </div>
    </div>
  );
}

export default Projects;
