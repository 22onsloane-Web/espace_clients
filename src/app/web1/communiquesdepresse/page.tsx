"use client"
import React from 'react'
import {motion} from "framer-motion"
export default function page() {
  return (
    <div className='h-auto pb-[20vw] md:pb-0'>
    <div className='flex justify-center w-fit px-[5vw] lg:px-[20vw] py-[20vw] md:py-[5vw]'>
    <motion.div initial={{y: 200, opacity:0}}
                              whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='bg-[#a22a2b] rounded-[10px] text-[6vw] md:text-[2.5vw] text-[#fff] font-semibold px-[5vw] md:px-[10vw] py-[5vw] animate-pulse'>
        <p>Visitez cette page pour rester au courant des activités, évènements, et mises à jour sur Equity BCDC Diaspora Banking.</p>
      </motion.div>
    </div>
    </div>
  )
}
