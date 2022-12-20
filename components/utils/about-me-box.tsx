import { FC, ReactNode, useEffect, useState } from "react";

interface IProps {
  children: string | ReactNode;
  title: string;
  plusIcon?: boolean;
  color: "red" | "green" | "yellow";
  cDegree?: 500 | number;
  className?: string;
}

const AboutMeBox: FC<IProps> = ({
  plusIcon = false,
  children,
  title,
  color,
  cDegree = 500,
  className = "",
}) => {
  const [classes, setClasses] = useState<string>("");

  useEffect(() => {
    const background = `bg-${color}-${cDegree}/30`;
    setClasses([background].join(" "));
  }, []);

  return (
    <div
      className={`inline-block text-center text-${color}-${cDegree} font-bold px-6 py-14 rounded-3xl ${classes} ${className}`}
    >
      <h3 className="text-4xl">
        {children}
        {plusIcon && "+"}
      </h3>
      <h6 className="text-sm">{title}</h6>
    </div>
  );
};

export default AboutMeBox;
