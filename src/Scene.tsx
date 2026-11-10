import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useState, type RefObject } from "react";

type LayerSources = {
  readonly webp: string;
  readonly webp2x: string;
  readonly png: string;
  readonly png2x: string;
};

const mountain: LayerSources = {
  webp: "/bg/mountain.webp",
  webp2x: "/bg/mountain@2x.webp",
  png: "/bg/mountain.png",
  png2x: "/bg/mountain@2x.png",
};
const motorway: LayerSources = {
  webp: "/bg/motorway.webp",
  webp2x: "/bg/motorway@2x.webp",
  png: "/bg/motorway.png",
  png2x: "/bg/motorway@2x.png",
};
const roadArt: LayerSources = {
  webp: "/bg/road.webp",
  webp2x: "/bg/road@2x.webp",
  png: "/bg/road.png",
  png2x: "/bg/road@2x.png",
};
const carArt: LayerSources = {
  webp: "/bg/car.webp",
  webp2x: "/bg/car@2x.webp",
  png: "/bg/car.png",
  png2x: "/bg/car@2x.png",
};

function SceneLayer({
  sources,
  y,
  scale,
  extend,
}: {
  sources: LayerSources;
  y: MotionValue<number>;
  scale?: MotionValue<number>;
  extend?: boolean;
}) {
  return (
    <motion.div
      className="scene-layer"
      style={scale !== undefined ? { y, scale } : { y }}>
      <picture>
        <source
          type="image/webp"
          srcSet={`${sources.webp} 1x, ${sources.webp2x} 2x`}
        />
        <img
          src={sources.png}
          srcSet={`${sources.png} 1x, ${sources.png2x} 2x`}
          width={1600}
          height={700}
          alt=""
          decoding="async"
          draggable={false}
        />
      </picture>
      {extend ? <span className="scene-car-extend" aria-hidden="true" /> : null}
    </motion.div>
  );
}

export function Scene({ target }: { target: RefObject<HTMLElement | null> }) {
  const reduce = useReducedMotion() === true;
  const [stopped, setStopped] = useState(false);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });
  const still = reduce || stopped ? 0 : 1;
  // Dramatic depth: mountain slowest, car fastest; slight scale on near layers.
  const far = useTransform(scrollYProgress, [0, 1], [0, -120 * still]);
  const farScale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.03 * still]);
  const sign = useTransform(scrollYProgress, [0, 1], [0, -300 * still]);
  const road = useTransform(scrollYProgress, [0, 1], [0, -520 * still]);
  const roadScale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.06 * still]);
  const car = useTransform(scrollYProgress, [0, 1], [0, -720 * still]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.08 * still]);

  return (
    <div className="illustration">
      <div className="scene" aria-hidden="true">
        <SceneLayer sources={mountain} y={far} scale={farScale} />
        <SceneLayer sources={motorway} y={sign} />
        <SceneLayer sources={roadArt} y={road} scale={roadScale} />
        <SceneLayer sources={carArt} y={car} scale={carScale} extend />
      </div>
      {reduce ? null : (
        <button
          type="button"
          className="motion-toggle"
          onClick={() => {
            setStopped((value) => !value);
          }}>
          {stopped ? "Play motion" : "Stop motion"}
        </button>
      )}
    </div>
  );
}
