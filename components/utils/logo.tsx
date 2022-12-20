import { config, useSpring, animated } from "@react-spring/web";
import { FC } from "react";

const Logo: FC = () => {
  const [firstLetterStls] = useSpring(
    () => ({
      from: {
        scale: 2,
        left: 40,
      },
      to: {
        scale: 1,
        left: 0,
      },
      config: config.molasses,
      loop: {
        reverse: true,
        delay: 10000,
      },
    }),
    []
  );
  const [firstLetterStls2] = useSpring(
    () => ({
      from: {
        scale: 2,
        right: 58,
      },
      to: {
        scale: 1,
        right: 48,
      },
      config: config.molasses,
      loop: {
        reverse: true,
        delay: 10000,
      },
    }),
    []
  );
  // rest lettters animation
  const [styles] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: config.molasses,
      loop: {
        reverse: true,
        delay: 10000,
      },
    }),
    []
  );

  return (
    <h2 className="relative">
      <animated.div
        style={{ ...firstLetterStls, position: "absolute", top: 0 }}
      >
        <span className="text-red-500 font-bold">H</span>
      </animated.div>
      <animated.div
        style={{ ...styles, display: "inline-block", paddingLeft: 10 }}
      >
        <span>amude</span>
      </animated.div>{" "}
      <animated.div
        style={{ ...firstLetterStls2, position: "absolute", top: 0 }}
      >
        <span className="text-red-500 font-bold">S</span>
      </animated.div>
      <animated.div
        style={{ ...styles, display: "inline-block", paddingLeft: 10 }}
      >
        <span>hahin</span>
      </animated.div>
    </h2>
  );
};

export default Logo;
