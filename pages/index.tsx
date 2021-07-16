import Feed from "@components/Feed";
import Leftbar from "@components/Leftbar";
import Rightbar from "@components/Rightbar";

const index = () => {
  return (
    <div className="flex px-8 md:grid md:grid-cols-4">
      <aside className="sticky hidden h-screen grid-cols-1 top-20 lg:flex">
        <div className="flex-1 px-10">
          <Leftbar />
        </div>
      </aside>
      <div className="w-full col-span-4 px-4 lg:col-span-2">
        <Feed />
      </div>
      <aside className="sticky hidden h-screen top-20 lg:flex">
        <div className="flex-1 px-10">
          Leader board
          <Rightbar />
        </div>
      </aside>
    </div>
  );
};

export default index;
