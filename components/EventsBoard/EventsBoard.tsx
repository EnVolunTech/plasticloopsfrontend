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
    event: "Lorem ipsum dolor sit amet, consectetur adipisici elit.",
  },
  {
    month: "July",
    date: "26",
    event: "Ut enim ad minim veniam.",
  },
  {
    month: "July",
    date: "27",
    event: "Duis aute irure dolor in reprehenderit in voluptate.",
  },
  {
    month: "Aug",
    date: "02",
    event: "Velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const EventsBoard = () => {
  return (
    <div className={s.root}>
      <h4 className={s.title}>Events Board</h4>

      <div className="px-4">
        {eventsSample.map((event) => (
          <div className={s.event}>
            <div className="border max-w-[50px] text-center rounded overflow-hidden border-black flex-1">
              <h6 className="w-full text-white bg-pink-500">{event.month}</h6>
              <h5 className="text-lg font-semibold">{event.date}</h5>
            </div>
            <span className="flex-1 ml-3 whitespace-pre-wrap">
              {event.event}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsBoard;
