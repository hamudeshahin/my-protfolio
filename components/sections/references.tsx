import { FC, useCallback, useRef, useState } from "react";
import Container from "../utils/container";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Trail from "../animations/trail";
import { IReferenceMessage } from "../../typings";

interface IProps {
  items: IReferenceMessage[];
}

const References: FC<IProps> = ({ items }) => {
  const [active, setActive] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  // change reference
  const handeChangeReferenceActive = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      newActive: number,
      type: "+" | "-"
    ) => {
      e.preventDefault();

      // check max and min
      if (type === "+") {
        if (items.length === newActive) newActive = 0;
      } else {
        if (newActive === -1) newActive = items.length - 1;
      }
      // set new active
      setActive(newActive);
    },
    []
  );
  return (
    <div className="py-20 px-5 relative">
      <Container>
        <h2 className="text-3xl text-slate-400 font-bold mb-20">References</h2>
        {items.length === 0 ? (
          <h5 className="text-3xl text-center">
            There is no references until now {`\u{1F605}`}
          </h5>
        ) : (
          <div className="p-5 relative h-[400px]">
            {items.map((item, index) => (
              <Trail key={index} open={index === active}>
                <div className={`${index === active ? "block" : "hidden"}`}>
                  <p className="text-4xl line-clamp-[8] mb-5 text-center max-w-4xl mx-auto">
                    {item.message}
                  </p>
                  <h6 className="text-slate-500 pl-20">{item.name}</h6>
                </div>
              </Trail>
            ))}
            <div className="flex gap-10 absolute top-[100%] left-0 transform -translate-y-1/2 justify-center items-center w-full sm:justify-between sm:top-1/4">
              <a
                href="#"
                onClick={(e) => handeChangeReferenceActive(e, active - 1, "-")}
                className="transform transition-transform duration-200 hover:scale-125"
              >
                <span className="text-6xl text-slate-400 sm:text-7xl">
                  <BsArrowLeft />
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => handeChangeReferenceActive(e, active + 1, "+")}
                className="transform transition-transform duration-200 hover:scale-125"
              >
                <span className="text-6xl text-slate-400 sm:text-7xl">
                  <BsArrowRight />
                </span>
              </a>
            </div>
          </div>
        )}
      </Container>
      <div className="absolute w-40 h-40 right-[20%] opacity-20 top-20 transform rotate-6">
        <lottie-player
          id="hi"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src={"https://assets7.lottiefiles.com/packages/lf20_x3i3ludo.json"}
        />
      </div>
    </div>
  );
};

export default References;
