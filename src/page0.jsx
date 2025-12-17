import { motion } from "motion/react";
import { useState } from "react";
import BTWLogo from './assets/logo-Cwb505be.png';
import VM from './assets/vm.png'
import IDK from './assets/1.png'
import './App.css';
import { WaveRow, generateSinePath } from "./sineWave";
import { Link } from "react-router-dom";

const TRAIL_COUNT = 10;
const OFFSET_X = 40;

export default function Page0() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden text-white relative">
      
      {/* CENTER CONTAINER */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -400, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex justify-center items-center"
        > 
          {[...Array(TRAIL_COUNT)].map((_, i) => (
            <motion.div
            key={i}
            className="content-box flex flex-col w-[880px] top-35 h-100 bg-black"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
            style={{
              position: "absolute",
              x: i * OFFSET_X,
              filter: `blur(${i * 1.0}px)`,
              zIndex: 100 - i,
            }}
            >
              <div className="p-5 fellEng">
                <h3 className="text-[50px] text-center">Motto</h3>
                <p className="text-sm mt-2 text-center text-[20px]">Proses ini bukan tentang kesempurnaan, melainkan tentang perkembangan diri yang berkelanjutan.</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-row gap-20 absolute bottom-30 left-10">
        <Link to="/sellect-chapter">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Back</motion.div>
        </Link>
        <Link to="/page1">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Next chapter</motion.div>
        </Link>
      </div>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} className='absolute top-10'/>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} direction="right" className='absolute bottom-10'/>
    </div>
  );
}
