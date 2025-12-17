import { useRef, useState } from "react";
export function useHvrSound(src) {
    const audio = useRef(new audio(src))
    const play = () => {
        audio.current.currentTime = 0
        audio.current.play()
    }
    return play;
}