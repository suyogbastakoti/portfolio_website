
const Testimonials = () => {
  return (
    <section id="testimonials" className="p-24 bg-linear-to-r from-gray-950 via-black to-gray-950 text-white">
      <h1 className="text-3xl text-lime-300 font-bold mb-6">
        What people say
      </h1>
    <div className="grid grid-cols-3 gap-6">
      
      <div className="bg-gray-900 p-5 py-12 rounded-xl">
        <p className="text-sm mb-4 text-justify">
          Suyog has this rare ability to make complex UI feel completely effortless. 
          The design system he built saved our team hundreds of hours and just keeps giving.
        </p>
        
        <div className="flex gap-4 items-center">
          <div className="border rounded-2xl w-7.5 px-1 py-1 mb-3">
            AP
          </div>
      
        <div className="flex flex-col ">
          <h2>
            Athar Paudel
          </h2>
          
          <p className="text-sm">
            Head of Product, Vanta
          </p>
        </div>
          
        </div>

      </div>


      <div className="bg-gray-900 p-5 py-12 rounded-xl">

          <p className="text-sm mb-4 text-justify">
            Working with Suyog was the easiest collaboration I've had in years. 
            He asked all the right questions upfront, moved fast, and the end result was better than what I imagined.
          </p>
        
        <div className="flex gap-4 items-center">
          <div className="border rounded-2xl w-7.5 px-1 py-1 mb-3">
            AK
          </div>
          <div className="flex flex-col ">
            <h2>Asmit Karki</h2>
            <p className="text-sm">Founder, Bloom Commerce</p>
          </div>
          
        </div>

      </div>


        <div className="bg-gray-900 p-5 py-12 rounded-xl">

            <p className="text-sm mb-4 text-justify">
                The performance improvements Suyog brought to our dashboard were staggering. 
                He genuinely cares about the craft — and it shows in every detail of the work he delivers.
            </p>
        
            <div className="flex gap-4 items-center">
                <div className="border rounded-2xl w-7.5 px-1 py-1 mb-3">
                    JP
                </div>
                <div className="flex flex-col ">
                    <h2>Jess Pokharel</h2>
                    <p className="text-sm">CTO, Lumio Analytics</p>
                </div>
          
            </div>

            </div>
        </div>

    </section>
  );
}

export default Testimonials;
