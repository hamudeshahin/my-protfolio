import { FC } from "react";

interface IProps {
  color?: string;
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
  zIndex?: number;
  width?: number;
  height?: number;
}

const Blob: FC<IProps> = ({
  color = "rgb(234 53 53)",
  top = null,
  left = null,
  bottom = null,
  right = null,
  zIndex = 0,
  width = null,
  height = null,
}) => {
  return (
    <div
      style={{
        zIndex: zIndex ?? -1,
        aspectRatio: 1 / 1,
        width: width ?? "max(240px, 20vw)",
        height: height ?? "",
        position: "absolute",
        right: right ?? "min(-125px, -10vw)",
        left: left ?? "",
        bottom: bottom ?? "",
        top: top ?? "20vh",
        borderRadius: "50%",
        backgroundColor: "rgb(250, 250, 250)",
        filter: "blur(4px)",
        boxShadow: `rgb(250 250 250) 0px 0px 100px -40px inset, ${color} 0px 0px 40vw 40vw inset, ${color} 0px 0px 70px 40px`,
      }}
    />
  );
};

export default Blob;
