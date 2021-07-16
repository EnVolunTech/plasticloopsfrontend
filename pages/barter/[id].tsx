import BarterForm from "@components/BarterForm";
import Leftbar from "@components/Leftbar";

interface Props {}

const item = (props: Props) => {
  return (
    <div className="flex px-8 md:grid md:grid-cols-4">
      <aside className="sticky hidden h-screen grid-cols-1 top-20 lg:flex">
        <div className="flex-1 px-2">
          <Leftbar />
        </div>
      </aside>

      <div className="w-full col-span-4 px-4 lg:col-span-3">
        <BarterForm />
      </div>
    </div>
  );
};

export default item;
