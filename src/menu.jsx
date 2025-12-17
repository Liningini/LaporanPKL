import { useRef, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import { WaveRow, generateSinePath } from './sineWave';
import usePulseHover from './pulsehook';
import myFace from './assets/saya.jpg'
import './index.css';
import './App.css';

export default function Menu() {
  const savedVolume = Number(localStorage.getItem("sfxVolume")) || 1;
  const btn1 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg", savedVolume);
  const btn2 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg", savedVolume);
  const btn3 = usePulseHover("/snd/hvr.ogg", "/snd/click.ogg", savedVolume);
  const path = useMemo(() => generateSinePath(), []);
  const [openBio, setOpenBio] = useState(false);

  const splashes = [
    "Man",
    "Mom, can i play minecraft?",
    "Fun fact, i'm never do my homework",
    "i'll have two number nine",
    "Made with luck",
    "Love may leave, but ayam geprek never",
    "It worked… now it doesn’t",
    "I don't know how it work, but it work",
    "disufgdsubgaufuGUF",
    "I forgot my medicine",
    "I WANT NASI PADAAAANNGGGGG!!!!",
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "AAAAAAAAAAAAAAAAAAAAAAAAA",
    "Les toilettes fuient.",
    "Cheeseburger",
    "Please activate your windows",
    "Capitalism is everywhere",
    "Anything but the cucumber",
    "Insert text here",
    "Please speed i need this",
    "My mom is kinda homeless",
    "Now it's finally release",
  ]
  const splash = useRef(splashes[Math.floor(Math.random() * splashes.length)]).current;
  return(
    <div className="flex">
      {/*<img src={bg1} alt="backgound Image" className="w-300 h-auto absolute left-0 bottom-0"/>
      <img src={bg} alt="backgound Image" className="w-300 h-auto absolute right-[-100px] bottom-0"/> */}
      <WaveRow path={path} color="#077A7D" speed={8} className='absolute top-10'/>
      <div className="absolute inset-0 flex flex-col items-center z-10 absolute mt-[100px] text-white p-10">
        <motion.h1 className="text-[50px] fellEng mt-[10px]" animate={{y: [10, -5, 10 ], rotate: [0, 2, -3 , 0], scale: [1,1.1,1]}} transition={{repeat: Infinity, duration: 5, ease: "easeInOut"}}>PRESENTATION</motion.h1>
        {/*<motion.p className="text-yellow-300 font-bold text-[24px] fellEng mt-[-15px]" initial={{rotate: -15, scale: 0.9}} animate={{scale: [0.9, 1, 0.9]}} transition={{duration:1, repeat: Infinity, ease: "easeInOut"}} style={{x: 250, y: -30}}>{splash}</motion.p>*/}
        <motion.p className="text-yellow-300 font-bold text-[24px] fellEng mt-[-10px]" initial={{rotate: -15, scale: 0.9}} animate={{scale: [0.9, 1, 0.9]}} transition={{duration:1, repeat: Infinity, ease: "easeInOut"}} style={{x: 250, y: -30}}>Laporan PKL Di BTW Edutech</motion.p>
        <p className="fellEng text-[24px]">By</p>
        <p className="fellEng text-[24px] mt-[10px]">I Kadek Lanang Rifky Raditya</p>
        <Link to="/sellect-chapter">
          <motion.p className="fellEng text-[24px] mt-[30px] h-10 border-b w-90 text-center" animate={btn1.ctrls} onHoverStart={btn1.startPulse} onHoverEnd={btn1.stopPulse} onClick={btn1.playClickSound}>Start</motion.p>
        </Link>
        <Link to="/opt">
            <motion.p className="fellEng text-[24px] mt-[40px] h-12 border-b w-90 text-center" animate={btn2.ctrls} onHoverStart={btn2.startPulse} onHoverEnd={btn2.stopPulse} onClick={btn2.playClickSound}>Option</motion.p>
        </Link>
          <motion.p className="cursor-pointer fellEng text-[24px] mt-[40px] h-12 border-b w-90 text-center" animate={btn3.ctrls} onHoverStart={btn3.startPulse} onHoverEnd={btn3.stopPulse} onClick={() => {btn3.playClickSound(); setOpenBio(true)}}>Biodata</motion.p>
          {openBio && (
            <div className="fixed inset-0 bg-black/60 fellEng flex items-center justify-center z-50">
              <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} className="bg-[#0f172a] text-white p-6 rounded-xl w-[450px]">
                <h2 className="text-2xl font-bold mb-4 text-center">Biodata</h2>
                <div className="space-y-2 text-lg">
                  <img src={myFace} alt="wajah yang buat" className='h-80 w-100' />
                  <p>Nama: I Kadek Lanang Rifky Raditya</p>
                  <p>NIS: 7073</p>
                  <p>Kelas: XI RPL 2</p>
                  <p>Sekolah: SMK TI Bali Global Denpasar</p>
                  <p>Hobi: Menggambar, Membuat/mendengar musik</p>
                  <p>Alamat: JL. setra dalem Gg. mekar sari no 11</p>
                </div>
                <button onClick={() => setOpenBio(false)}  className="mt-6 w-full bg-red-500 hover:bg-red-600 cursor-pointer py-2 rounded-lg">
                  Tutup
                </button>
              </motion.div>
            </div>
          )}
      <WaveRow path={path} className="absolute bottom-10" direction='right' color="#077A7D" />
      </div>
    </div>
  )
}