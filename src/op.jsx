import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { WaveRow, generateSinePath } from './sineWave';
import './index.css';
import './App.css'
import usePulseHover from "./pulsehook";

export default function Opt() {
  const savedVolume = Number(localStorage.getItem("sfxVolume")) || 1;
  const btn1 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg");
  const [tempVolume, setTempVolume] = useState(savedVolume);
  useEffect(() => {
    btn1.setSfxVolume(savedVolume);
  }, []);

  const applySettings = () => {
    localStorage.setItem("sfxVolume", tempVolume);
    btn1.setSfxVolume(tempVolume);
    btn1.playClickSound();
  };
  return(
    <div className="flex">
      {/*<img src={bg1} alt="backgound Image" className="w-300 h-auto absolute left-0 bottom-0"/>
      <img src={bg} alt="backgound Image" className="w-300 h-auto absolute right-[-100px] bottom-0"/>*/}
      <div className="absolute inset-0 flex flex-col items-center z-10 absolute mt-[100px] text-white p-10">
        <h1 className="text-[50px] fellEng mt-[-20px]">Option</h1>
        <p className="fellEng text-[24px] mt-[10px]">NOTE: Ini awalnya saya ingin memberi background music tapi nggak jadi</p>
        <p className="fellEng text-[24px] mt-[90px] h-10 border-b w-90 text-center">BGM: </p>
        <p className="fellEng text-[24px] mt-[10px] h-12 border-b w-90 text-left">SFX: </p>
        <input type="range" min={0} max={1} step={0.01} value={tempVolume} onChange={(e) => setTempVolume(Number(e.target.value))} className="w-64 mt-[-38px] accent-yellow-300 relative left-10" />
        <Link to="/">
            <motion.p className="fellEng text-[24px] mt-[38px] h-12 border-b w-90 text-center no-underline" animate={btn1.ctrls} onHoverStart={btn1.startPulse} onHoverEnd={btn1.stopPulse} onClick={btn1.playClickSound}>Back</motion.p>
        </Link>
        <motion.button className='fellEng mt-6 px-6 py-2 border-b text-[24px]' whileHover={{scale: 1.1}} whileTap={{scale: 0.98}} onClick={applySettings}>Apply</motion.button>
      </div>
      <WaveRow path={generateSinePath()} className="absolute bottom-10" direction='right' color="#077A7D" />
      <WaveRow path={generateSinePath()} className="absolute top-10" direction='left' color="#077A7D" />
    </div>
  )
}