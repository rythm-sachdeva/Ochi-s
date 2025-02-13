
const Featured = () => {
  return (
    <div className="w-full py-10 ">
     <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
     <h1 className="text-8xl font-nueue tracking-tight">Featured Projects!</h1>
    </div>
        
        <div className="cards w-full flex gap-10 mt-10 px-20">
           
            <div className="cardcontainer relative  w-1/2 h-[80vh]  ">
            <h1 className="absolute left-full text-8xl -translate-x-1/2 font-grotesk font-light tracking-tight -translate-y-1/2 top-1/2 text-[#CDEA68]  ">FYDE</h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
             <img
             className="w-full h-full object-cover" 
             src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
            </div>
            </div>
            <div className="cardcontainer rounded-xl relative w-1/2 h-[80vh] ">
            <h1 className="absolute right-full text-8xl translate-x-1/2 font-grotesk font-light tracking-tight -translate-y-1/2 top-1/2 text-[#CDEA68]  ">FYDE</h1>
                 <div className="w-full h-full  rounded-xl overflow-hidden">
                 <img
             className="w-full h-full object-cover" 
             src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                 </div>
            </div>
        </div>
     </div>
    
  )
}

export default Featured