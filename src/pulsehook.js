import { useRef, useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function usePulseHover( hvrSrc = "/snd/hvr.ogg", clickSrc = "/snd/click.ogg", initialVolume = 1 ) {
  const ctrls = useAnimation();
  const hvrAudio = useRef(null);
  const clickAudio = useRef(null);
  const [sfxVolume, setSfxVolume] = useState(initialVolume);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    hvrAudio.current = new Audio(hvrSrc);
    clickAudio.current = new Audio(clickSrc);
    hvrAudio.current.volume = sfxVolume;
    clickAudio.current.volume = sfxVolume;
  }, []);

  useEffect(() => {
    if (!hvrAudio.current || !clickAudio.current) return;
    hvrAudio.current.volume = sfxVolume;
    clickAudio.current.volume = sfxVolume;
  }, [sfxVolume]);

  const playHvrSound = () => {
    if (!hvrAudio.current) return;
    hvrAudio.current.currentTime = 0;
    hvrAudio.current.play();
  };

  const playClickSound = () => {
    if (!clickAudio.current) return;
    clickAudio.current.currentTime = 0;
    clickAudio.current.play();
  };

  const startPulse = async () => {
    if (!mounted) return;
    if (isHovering) return;

    setIsHovering(true);
    playHvrSound();

    await ctrls.start({
      scale: 1.2,
      transition: { duration: 0.3, ease: "easeOut" }
    });

    ctrls.start({
      scale: [1.2, 1.1, 1.2],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    });
  };

  const stopPulse = () => {
    setIsHovering(false);
    ctrls.start({ scale: 1, transition: { duration: 0.3 } });
  };

  return { ctrls, startPulse, stopPulse, playClickSound, sfxVolume, setSfxVolume};
}