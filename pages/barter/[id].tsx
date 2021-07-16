import BarterForm from "@components/BarterForm";
import Leftbar from "@components/Leftbar";
import { useSession } from "next-auth/client";

interface Props {}

const item = (props: Props) => {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <div className="flex justify-center">
        <div className="w-[200px]">
          <a href="/api/auth/signin">
            <div className="flex items-center w-full px-4 py-2 my-1 text-center bg-red-400 rounded-md focus:outline-none">
              Click here to signin...
            </div>
          </a>
        </div>
      </div>
    );
  }

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
