import cn from "classnames";
import Announcement from "@components/Announcement";
import s from "./Leftbar.module.css";


interface Props {}

const Leftbar = (props: Props) => {
  return (
    <div>
      <div className={s.root}>
        <div className={s.buttonContainer}>
          <button className={cn(s.button, { "bg-blue-500 bg-opacity-20": true })}>
            Barter
          </button>
          <button className={s.button}>Sell</button>
          <button className={s.button}>Search</button>
          <button className={s.button}>Learn</button>
        </div>
      </div>
      <div className="mt-5">
        <Announcement />
      </div>
    </div>

  );
};

export default Leftbar;
