import { useSpring } from "@react-spring/core";
import { animated as ani } from "@react-spring/web";
import { useEffect } from "react";
import s from "./Preview.module.css";

interface Props {
  image: any;
  uploaded: boolean;
}

const Preview = ({ image, uploaded }: Props) => {
  const [styles, api] = useSpring(() => ({
    from: {
      filter: "blur(10px)",
    },
  }));

  useEffect(() => {
    if (uploaded) {
      api.start({
        to: {
          filter: "blur(0px)",
        },
      });
    }
  }, [uploaded]);

  return (
    image && <ani.img className={s.root} src={image} style={{ ...styles }} />
  );
};

export default Preview;
