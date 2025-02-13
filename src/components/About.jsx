
const About = () => {
  return (
    <div className="w-full py-20 px-20 text-black bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-nueue  text-[3vw] leading-[3.5vw] tracking-tight">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-20">
         <div className="w-1/2">
          <h1 className="text-6xl tracking-tight font-nueue">Our Approach</h1>
          <button className="uppercase group hover:bg-zinc-900 transition-all duration-200 ease-in-out  bg-zinc-800 px-10 gap-7 flex items-center py-4 mt-5 text-white rounded-full">Read More
            <div className="h-3 w-3 group-hover:scale-[300%] transition-all duration-300 rounded-full bg-white"></div>
          </button>
         </div>
         <div className="w-1/2 h-[70vh] rounded-3xl bg-[#819246] "></div>
      </div>
    </div>
  )
}

export default About