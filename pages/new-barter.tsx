import UploadSmall from "@components/UploadSmall";
import React from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  message: string;
  imageUrlFrom: string;
}

const NewBarter = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // submit data to backend here then redirect
    alert("Success, Your item was uploaded.");
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center">
        <div className="w-[500px] h-[400px]">
          <label className="mb-2 text-2xl font-semibold">
            Tell us about your item.
          </label>
          <textarea
            className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            rows={10}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <div className="text-sm text-red-500">The message is required.</div>
          )}

          <div>
            <input {...register("imageUrlFrom", { required: true })} hidden />
            <UploadSmall setValue={setValue} />
          </div>
          <button
            className="flex items-center justify-center w-full px-4 py-2 my-1 bg-red-400 rounded-md focus:outline-none"
            type="submit"
          >
            <span className="text-lg font-semibold"> Barter!</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewBarter;
