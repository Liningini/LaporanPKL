import { motion } from "motion/react";
import { useState } from "react";
import inabakumori from './assets/inabakumori.png';
import end1 from './assets/hero.png'
import './App.css';
import { WaveRow, generateSinePath } from "./sineWave";
import { Link } from "react-router-dom";
import { img } from "motion/react-client";

const TRAIL_COUNT = 10;
const OFFSET_X = 40;

export default function Page1() {
  const [index, setIndex] = useState(0);
  const sections = [
    {
      title: "Kesimpulan",
      text: "Dengan adanya pelaksanaan kerja praktik ini, memperoleh banyak manfaat yang mungkin tidak diperoleh dalam pelajaran di sekolah. Disini dalam dunia kerja yang sesungguhnya dituntut untuk mandiri, sabar, dan bertanggung jawab dalam menyelesaikan tugas. Dalam kerja praktik ini berkesempatan menerapkan ilmu yang didapatkan dalam dunia pelajaran di sekolah.",
      img: end1
    },
    {
      title: "Terimakasih",
      img: inabakumori,
    }
  ];
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
            className="content-box flex flex-row w-[880px] top-35 h-100 bg-black"
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
              <img src={sections[index].img} className="absolute left-0 top-0 z-0 w-full h-full opacity-30 blur-sm" />
              <div className="p-5 z-100 text-center w-full">
                <h3 className="text-[30px] text-center">{sections[index].title}</h3>
                {sections[index].text && (
                  <p className="text-sm mt-2">
                    {sections[index].text}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-between mt-4 absolute bottom-30">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="text-2xl px-4">◀</button>        
          <button
            onClick={() =>
              setIndex((i) => Math.min(i + 1, sections.length - 1))
            }
            className="text-2xl px-4">▶</button>
        </div>
      </div>
      <div className="flex flex-row gap-20 absolute bottom-30 left-10">
        <Link to="/page2">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Back</motion.div>
        </Link>
        <Link to="/">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>END</motion.div>
        </Link>
      </div>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} className='absolute top-10'/>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} direction="right" className='absolute bottom-10'/>
    </div>
  );
}
