import Leftbar from "@components/Leftbar";
import Rightbar from "@components/Rightbar";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  message: string;
  purpose: string;
  recipients: string;
}

const LGUSendSMS = () => {
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // submit data to backend here then redirect
    alert("Success, Your message was sent.");
    router.push("/");
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className="flex px-8 md:grid md:grid-cols-4">
      <aside className="sticky hidden h-screen grid-cols-1 top-20 lg:flex">
        <div className="flex-1 px-6">
          <Leftbar />
        </div>
      </aside>
      <div className="w-full col-span-4 px-10 lg:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h1 className="mb-4 text-3xl font-bold">Send message</h1>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            />

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Purpose
            </label>
            <input
              {...register("purpose", { required: true })}
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            />

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Recepients
            </label>
            <input
              {...register("recipients", { required: true })}
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            />

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Message
              <textarea
                {...register("message", { required: true })}
                className="block w-full px-3 py-2 mt-1 text-xl leading-tight text-gray-700 border rounded shadow form-textarea focus:outline-none focus:shadow-outline"
                rows={10}
                spellCheck={false}
              ></textarea>
            </label>
          </div>

          <button
            className="flex items-center justify-center w-full px-4 py-2 my-1 bg-red-400 rounded-md focus:outline-none"
            type="submit"
          >
            <span className="text-lg font-semibold"> Send</span>
          </button>
        </form>
      </div>
      <aside className="sticky hidden h-screen top-20 lg:flex">
        <div className="flex-1 px-6">
          <Rightbar />
        </div>
      </aside>
    </div>
  );
};

export default LGUSendSMS;
