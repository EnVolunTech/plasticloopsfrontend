import s from "./Announcement.module.css";

interface AnnouncementProps {
  month: string;
  date: string;
  event: string;
}

const announceSample: Array<AnnouncementProps> = [
  {
    month: "July",
    date: "24",
    event:
      "July is Disaster Resilience Month! Let us support government programs geared towards attaining disaster resilience! This year's theme is \"Tamang Pamamahalata't Kahandaan, Kaalaman at Pagtutulungan sa Sakuna at Pandemya'y Kalasag ng Baya\" ",
  },
  {
    month: "July",
    date: "26",
    event: "Tree planting",
  },
  {
    month: "July",
    date: "27",
    event: "Climate Change Forum",
  },
  {
    month: "Aug",
    date: "02",
    event: "River Clean-up",
  },
  {
    month: "Aug",
    date: "03",
    event: "Stream Visual Assessment Protocol Training",
  },
  {
    month: "Aug",
    date: "03",
    event: "WACS Training",
  },
  {
    month: "Aug",
    date: "21",
    event: "Plastic Waste Incineration Seminar",
  },
  {
    month: "Aug",
    date: "23",
    event: "Mangrove Planting",
  },
  {
    month: "Sept",
    date: "02",
    event: "Biodiversity and Wildlife Webinar",
  },
];

const Announcement = () => {
  return (
    <div className={s.root}>
      <h4 className={s.title}>Announcement</h4>
      <br></br>
      <div className={s.event}>
        <div className={s.photo}></div>
        <div className="post-content">
          <h1 className={s.h1text}> July is Disaster Resilience Month! </h1>
          <h3 className={s.atext}>
            Let us support government programs geared towards attaining disaster
            resilience! This year's theme is "Tamang Pamamahalata't Kahandaan,
            Kaalaman at Pagtutulungan sa Sakuna at Pandemya'y Kalasag ng Bayan".
          </h3>
          <div className={s.postedDate}>
            <span>Posted:</span> July 16, 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
