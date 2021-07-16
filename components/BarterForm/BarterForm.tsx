import s from "./BarterForm.module.css";

interface Props {}

const BarterForm = (props: Props) => {
  return (
    <div>
      This is for bartering
      <div className={s.sample}></div>
    </div>
  );
};

export default BarterForm;
