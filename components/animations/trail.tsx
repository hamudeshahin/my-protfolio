import { Children, FC, ReactNode } from "react";
import { a, useTrail } from "@react-spring/web";

interface IPrpos {
  open: boolean;
  children: ReactNode[] | ReactNode;
  height?: number;
}

const Trail: FC<IPrpos> = ({ children, open, height }) => {
  // get childrens that will be animated
  const items = Children.toArray(children);
  // trail animation configs
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    height: open ? (height ? height : "auto") : 0,
    from: { opacity: 0, y: 20, height: 0 },
  });

  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.span key={index} style={style}>
          <a.span style={{ height }}>{items[index]}</a.span>
        </a.span>
      ))}
    </>
  );
};

export default Trail;
