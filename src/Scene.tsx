import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { RefObject } from "react";

const mountain = "/bg/mountain.png";
const motorway = "/bg/motorway.png";
const roadArt = "/bg/road.png";
const carArt = "/bg/car.png";

export function Scene({ target }: { target: RefObject<HTMLElement | null> }) {
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });
  const still = reduce ? 0 : 1;
  const far = useTransform(scrollYProgress, [0, 1], [0, -24 * still]);
  const sign = useTransform(scrollYProgress, [0, 1], [0, -48 * still]);
  const road = useTransform(scrollYProgress, [0, 1], [0, -72 * still]);
  const car = useTransform(scrollYProgress, [0, 1], [0, -110 * still]);

  return (
    <div className="scene" aria-hidden="true">
      <motion.img src={mountain} alt="" style={{ y: far }} />
      <motion.img src={motorway} alt="" style={{ y: sign }} />
      <motion.img src={roadArt} alt="" style={{ y: road }} />
      <motion.img src={carArt} alt="" style={{ y: car }} />
    </div>
  );
}
