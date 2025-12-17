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

export default function Page1() {
  const [index, setIndex] = useState(0);
  const sections = [
    {
      title: "Informasi umum",
      text: "BTW Edutech adalah ekosistem edukasi berbasis teknologi informasi dari PT. Bina Taruna Wiratama (BTW) yang berfokus pada bimbingan dan pelatihan seleksi masuk instansi pemerintah (ASN, TNI, Polri), perguruan tinggi kedinasan (PTK), dan perguruan tinggi negeri (PTN).",
      img: IDK,
    },
    {
      title: "Sejarah",
      text: "BTW Edutech adalah perusahaan education technology asal Indonesia yang berfokus pada layanan pembelajaran dan persiapan berbagai seleksi nasional, seperti masuk perguruan tinggi negeri, sekolah kedinasan, serta seleksi CPNS, TNI, dan Polri. Perusahaan ini bermula dari Bina Taruna Wiratama (Bimbel BTW), yang didirikan pada tahun 2018 di Denpasar, Bali, oleh para alumni sekolah kedinasan dengan latar belakang pendidik dan birokrat, kemudian bertransformasi pada tahun *2022* menjadi BTW Edutech sebagai respons terhadap perkembangan pembelajaran digital dengan menghadirkan platform berbasis teknologi yang mengintegrasikan sistem latihan intensif, asesmen minat dan bakat, serta analisis peluang kelulusan secara terstruktur dan adaptif.",
      img: BTWLogo,
    },
    {
      title: "Visi & Misi",
      img: VM,
      sub: [
        { label: "Visi:", value: "Menjadi lembaga pendidikan dan pelatihan terdepan mempersiapkan generasi pemenang untuk Indonesia Maju 2045." },
        { label: "Misi:",
          value: [
            "Menyelenggarakan Bimbingan Belajar seleksi masuk PTN, PTK, ASN, TNI, Polri.",
            "Mengelola Kursus & Pelatihan Kerja di bidang teknologi digital & industri.",
            "Membangun karakter profesional dan berintegritas melalui penguatan soft skills.",
          ],
        },
      ],
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
              <img src={sections[index].img} className="w-[290px] mt-8 h-[290px]" />
              <div className="p-5 max-w-md">
                <h3 className="text-[30px]">{sections[index].title}</h3>
                {sections[index].text && (
                  <p className="text-sm mt-2">
                    {sections[index].text}
                  </p>
                )}

                {sections[index].sub && (
                  <div className="mt-3 space-y-3 text-justify">
                    {sections[index].sub.map((item, i) => (
                      <div key={i}>
                        <div className="font-bold text-[#77e6e8] fellEng">
                          {item.label}
                        </div>
                        {Array.isArray(item.value) ? (
                          <ul className="list-disc list-inside text-sm mt-1 space-y-1 w-130">
                            {item.value.map((v, j) => (
                              <li key={j}>{v}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm mt-1 w-130">{item.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
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
        <Link to="/page0">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Back</motion.div>
        </Link>
        <Link to="/page2">
          <motion.div className='z-10 text-white bg-black w-40 h-10 fellEng text-[18px] p-2 text-center rounded-full border-2 border-[#077A7D]' whileHover={{scale: 1.1}}>Next chapter</motion.div>
        </Link>
      </div>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} className='absolute top-10'/>
      <WaveRow path={generateSinePath()} color="#077A7D" speed={8} direction="right" className='absolute bottom-10'/>
    </div>
  );
}
