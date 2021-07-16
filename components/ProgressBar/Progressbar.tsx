import { useSpring } from "@react-spring/core";
import { animated as ani } from "@react-spring/web";
import { useEffect } from "react";
import s from "./Progressbar.module.css";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  const [styles, api] = useSpring(() => ({
    config: {
      mass: 10,
      tension: 70,
      friction: 60,
      clamp: true,
    },
    from: {
      width: "0%",
    },
  }));

  useEffect(() => {
    api.start({ width: `${progress}%` });
  }, [progress]);

  return (
    <div className={s.root}>
      <ani.div className={s.progress} style={{ ...styles }}></ani.div>
    </div>
  );
};

export default ProgressBar;
