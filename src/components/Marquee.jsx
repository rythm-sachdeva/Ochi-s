import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-5 bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 gap-10 flex whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[14vw] font-grotesk font-semibold  uppercase">We Are Ouchi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[14vw] font-grotesk font-semibold  uppercase">We Are Ouchi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee