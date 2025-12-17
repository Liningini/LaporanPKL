import { motion } from "motion/react";
import { useState } from "react";
import VSCodeLogo from './assets/vscode.svg'
import ReactLogo from './assets/reactlogo.svg'
import GithubLogo from './assets/github.svg'
import tailwindcssLogo from './assets/tcs.svg'
import framerMotionLogo from './assets/fm.svg'
import './App.css';
import { WaveRow, generateSinePath } from "./sineWave";
import { Link } from "react-router-dom";

const TRAIL_COUNT = 10;
const OFFSET_X = 40;

export default function Page2() {
  const tools = [
    {
      name: "Visual Studio Code",
      desc: "Code editor utama yang dipakai untuk nulis dan debug project.",
      img: VSCodeLogo,
    },
    {
      name: "React",
      desc: "Library JavaScript untuk membangun UI berbasis component.",
      img: ReactLogo,
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first CSS framework untuk styling cepat dan konsisten.",
      img: tailwindcssLogo,
    },
    {
      name: "Framer Motion",
      desc: "Library animasi untuk React yang dipakai untuk membuat transisi, motion UI, dan efek interaktif dengan smooth",
      img: framerMotionLogo,
    },
  ];

  const projects = [
    {
      name: "Positivius",
      desc: "Tugas website pertama yang diberi oleh perusahaan yang kami cari di figma comunity",
      img: GithubLogo,
      link: "https://liningini.github.io/Tugas-PKL/",
    },
    {
      name: "PokePixel",
      desc: "Website berbasis game yang menyuruh kita untuk menggambar pokemon yang telah di tentukan",
      img: GithubLogo,
      link: "https://wikan-dev.github.io/PokemonPixelArtGame/",
    },
    {
      name: "Age Guessr",
      desc: "Website mandiri (project pribadi) yang digunakan untuk latihan, dan juga mgnhitung umur jika lupa",
      img: GithubLogo,
      link: "https://liningini.github.io/Age-Guessr/",
    },
  ];

  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      if (mode === "tools") {
        setMode("projects");
        setIndex(0);
      }
    }
  };

  const [mode, setMode] = useState("tools"); // "tools" | "projects"
  const data = mode === "tools" ? tools : projects;
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      if (mode === "projects") {
        setMode("tools");
        setIndex(tools.length - 1);
      }
    }
  };


  return (
    <div className="w-full h-screen bg-black overflow-hidden text-white relative">
      
      {/* CENTER CONTAINER */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h2 className="text-[32px] absolute top-40 fellEng mb-4">
          {mode === "tools" ? "TOOLS" : "PROJECTS"}
        </h2>
        <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -400, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex justify-center items-center"
        > 
          {[...Array(TRAIL_COUNT)].map((_, i) => (
            <motion.div
            key={`${mode}-${index}-${i}`}
            className="content-box flex flex-row w-[880px] bottom-50 h-70 bg-black"
            animate={{
              y: [-12, 12, -12],
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
              filter: `blur(${i * 1.2}px)`,
              zIndex: 100 - i,
            }}
            >
              <img src={data[index].img} className="w-[200px] p-5 object-contain"/>
              {/* RIGHT CONTENT */}
              <div className="p-5 max-w-md">
                <h3 className="text-[26px] fellEng">
                  {data[index].name}
                </h3>
                <p className="text-sm mt-2">
                  {data[index].desc}
                </p>
                {/* KHUSUS PROJECT */}
                {mode === "projects" && data[index].link && (
                  <a
                    href={data[index].link}
                    target="_blank"
                    className="inline-block mt-4 text-[#77e6e8] underline"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-between mt-4 absolute bottom-30">
          <button onClick={prev} className="text-2xl px-4">◀</button>
          <button onClick={next} className="text-2xl px-4">▶</button>
        </div>
      </div>
      <div className="flex flex-row gap-20 absolute bottom-30 left-10">
        <Link to="/page1">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Back</motion.div>
        </Link>
        <Link to="/page3">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Next chapter</motion.div>
        </Link>
      </div>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} className='absolute top-10'/>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} direction="right" className='absolute bottom-10'/>
    </div>
  );
}
