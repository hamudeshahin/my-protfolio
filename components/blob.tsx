import { FC } from "react";

const Blob: FC = () => {
  return (
    <div
      style={{
        zIndex: -1,
        aspectRatio: 1 / 1,
        width: "max(240px, 20vw)",
        position: "absolute",
        right: "min(-125px, -10vw)",
        top: "20vh",
        borderRadius: "50%",
        backgroundColor: "rgb(250, 250, 250)",
        filter: "blur(4px)",
        boxShadow:
          "rgb(250 250 250) 0px 0px 100px -40px inset, rgb(234 53 53) 0px 0px 40vw 40vw inset, rgb(234 53 53) 0px 0px 70px 40px",
      }}
    />
  );
};

export default Blob;
