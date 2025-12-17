import { motion } from "framer-motion";

export function generateSinePath(
  width = 2000,
  amplitude = 20,
  wavelength = 200
) {
  let path = "M 0 0 ";
  for (let x = 0; x <= width; x++) {
    const y = Math.sin((x / wavelength) * Math.PI * 2) * amplitude;
    path += `L ${x} ${y}`;
  }
  return path;
}

export function Wave({ path, color = "white" }) {
  return (
    <svg
      width="2000"
      height="80"
      viewBox="0 -40 2000 80"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d={path} stroke={color} fill="none" strokeWidth="10" />
    </svg>
  );
}

export function WaveRow({
  path,
  className = "",
  color = "white",
  speed = 8,
  direction = "left",
}) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -2000] : [-2000, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        <Wave path={path} color={color} />
        <Wave path={path} color={color} />
      </motion.div>
    </div>
  );
}
