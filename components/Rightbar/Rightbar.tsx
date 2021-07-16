import EventsBoard from "@components/EventsBoard";
import s from "./Rightbar.module.css";

const Rightbar = () => {
  return (
    <>
      <div className={s.leaderboard}>
        <div className={s.leaderboard1}>
          <header className={s.header1}>
            <nav className={s.nav}>
              <a href="" className={s.active}></a>
              <a href="" className={s.a}>
                {" "}
              </a>
              <a href="" className={s.a}>
                {" "}
                LEADERBOARD
              </a>
            </nav>
          </header>
          <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th className={s.rank}>RANK</th>
                <th className={s.nick}>NAME</th>
                <th className={s.sp}>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr className={s.tr}>
                <td className={s.rank}>1</td>
                <td className={s.nick}>Daniel Ebersole</td>
                <td className={s.sp}>60</td>
              </tr>
              <tr>
                <td className={s.rank}>2</td>
                <td className={s.nick}>Rick Waalders</td>
                <td className={s.sp}>50</td>
              </tr>
              <tr>
                <td className={s.rank}>4</td>
                <td className={s.nick}>Nadir Balcikli</td>
                <td className={s.sp}>40</td>
              </tr>
              <tr>
                <td className={s.rank}>5</td>
                <td className={s.nick}>Paul Jarvis</td>
                <td className={s.sp}>30</td>
              </tr>
              <tr>
                <td className={s.rank}>6</td>
                <td className={s.nick}>Guillaume</td>
                <td className={s.sp}>20</td>
              </tr>
              <tr>
                <td className={s.rank}>7</td>
                <td className={s.nick}>Radio Pink</td>
                <td className={s.sp}>10</td>
              </tr>
              <tr>
                <td className={s.rank}>8</td>
                <td className={s.nick}>Vadim Sherbakov</td>
                <td className={s.sp}>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <EventsBoard />
      </div>
    </>
  );
};

export default Rightbar;
