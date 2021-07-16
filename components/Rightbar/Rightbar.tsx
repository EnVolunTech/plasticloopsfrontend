import EventsBoard from "@components/EventsBoard";
import s from "./Rightbar.module.css";

const Rightbar = () => {
  return (
    <div>
      <div className={s.example}></div>
      <EventsBoard />
    </div>
  );
};

export default Rightbar;
