
const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {['We Create', 'Eye-Opening','Presentations'].map((text,index)=>(
            <div key={index} className="masker ">
            <h1 className="uppercase  font-light leading-[5.2vw] text-8xl font-grotesk">{text}</h1>
          </div>
        ))}
        
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {["For Public and Private Companies","From the first pitch to IPO"].map((text,index)=>(
            <p key={index} className="text-md font-light tracking-tight leading-none">{text}</p>
        ))}
        <div className="start">
            <div className="px-4 py-2 border-[1px] border-zinc-500 capitalize font-light rounded-full ba">start the project</div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage