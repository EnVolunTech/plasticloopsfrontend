import s from "./EventsBoard.module.css";

interface EventsBoardProps {
  month: string;
  date: string;
  event: string;
}

const eventsSample: Array<EventsBoardProps> = [
  {
    month: "July",
    date: "24",
    event: "Coastal Clean-up ",
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

const EventsBoard = () => {
  return (
    <div className={s.root}>
      <h4 className={s.title}>Events Board</h4>

      <div className="px-4 overflow-scroll">
        {eventsSample.map((event) => (
          <div className={s.event}>
            <div className="border max-w-[50px] text-center rounded overflow-hidden border-black flex-1">
              <h6 className="w-full text-white bg-pink-500">{event.month}</h6>
              <h5 className="text-lg font-semibold">{event.date}</h5>
            </div>
            <span className="self-center flex-1 ml-3 whitespace-pre-wrap">
              {event.event}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsBoard;
