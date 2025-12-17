import { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import { WaveRow, generateSinePath } from './sineWave';
import usePulseHover from './pulsehook';
import './index.css';
import './App.css';

export default function SelChapt() {
  const savedVolume = Number(localStorage.getItem("sfxVolume")) || 1;
  const btn1 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg", savedVolume);
  const btn2 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg", savedVolume);
  const btn3 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg", savedVolume);
  const btn4 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg", savedVolume);
  const path = useMemo(() => generateSinePath(), []);
    return (
        <div className="flex bg-white">
            <div className="absolute inset-0 flex flex-row z-10 absolute text-white px-60 gap-20 top-60">
                <Link to="/page0">
                    <motion.div className="bg-black rounded-sm border-3 border-[#077A7D] w-50 h-50 cursor-pointer justify-center flex flex-col fellEng p-10" animate={btn1.ctrls} onHoverStart={btn1.startPulse} onHoverEnd={btn1.stopPulse}>
                        <h1 className='text-[40px]'>Bab I</h1>
                        <p className='text-[16px] text-center'>Motto</p>
                    </motion.div>
                </Link>
                <Link to="/page1">
                    <motion.div className="bg-black rounded-sm border-3 border-[#077A7D] w-50 h-50 cursor-pointer justify-center flex flex-col fellEng p-10" animate={btn2.ctrls} onHoverStart={btn2.startPulse} onHoverEnd={btn2.stopPulse}>
                        <h1 className='text-[40px]'>Bab II</h1>
                        <p className='text-[16px]'>Informasi umum</p>
                    </motion.div>
                </Link>
                <Link to="/page2">
                    <motion.div className="bg-black rounded-sm border-3 border-[#077A7D] w-50 h-50 cursor-pointer justify-center flex flex-col fellEng p-10" animate={btn3.ctrls} onHoverStart={btn3.startPulse} onHoverEnd={btn3.stopPulse}>
                        <h1 className='text-[40px] w-60'>Bab III</h1>
                        <p className='text-[16px] text-center'>Project</p>
                    </motion.div>
                </Link>
                <Link to="/page3">
                    <motion.div className="bg-black rounded-sm border-3 border-[#077A7D] w-50 h-50 cursor-pointer justify-center flex flex-col fellEng p-10" animate={btn4.ctrls} onHoverStart={btn4.startPulse} onHoverEnd={btn4.stopPulse}>
                        <h1 className='text-[40px] w-60'>Bab IV</h1>
                        <p className='text-[16px] text-center'>Penutup</p>
                    </motion.div>
                </Link>
            </div>
            <Link to="/">
                <motion.div className='absolute z-10 text-white bg-black bottom-30 left-10 w-20 h-10 fellEng text-[18px] p-2 px-5 rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Back</motion.div>
            </Link>
            <WaveRow path={generateSinePath()} className="absolute bottom-10" direction='right' color="#077A7D" />
            <WaveRow path={generateSinePath()} className="absolute top-10" direction='left' color="#077A7D" />
        </div>
    )
}