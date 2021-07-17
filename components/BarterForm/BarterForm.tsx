import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Avatar } from "@components/common";
import { ItemPostProps } from "@components/common/ItemPost/ItemPost";
import Upload from "@components/Upload";
import cn from "classnames";
import s from "./BarterForm.module.css";
import { useRouter } from "next/router";

export interface BarterFormProps extends ItemPostProps {}

interface Inputs {
  imageUrlFrom: string;
  idTo: string;
  messageToKaBarter: string;
}

const BarterForm = ({
  id,
  name,
  initials,
  imageUrl,
  caption,
  tags,
}: BarterFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    // submit data to backend here then redirect
    alert("Success, We sent your KaBarter a request.");
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.root}>
        <div className={s.rootIncoming}>
          <div className={cn(s.topInfo)}>
            <div className="flex items-center mb-2">
              <Avatar initial={initials} />
              <div className="ml-2">
                <div className="block py-0 text-xl">{name}</div>
              </div>
            </div>

            <h5 className={s.postText}>{caption}</h5>
          </div>
          <div className={s.imageContainer}>
            <Image
              className="object-cover"
              src={imageUrl}
              alt={imageUrl}
              height={500}
              width={800}
              layout="responsive"
            />
          </div>
          <div className={cn(s.bottomInfo)}>
            <span className="">
              {tags?.map((tag, index) => {
                return (
                  <span className={cn(s.tagPill)} key={`${tag}-${index}`}>
                    {tag}
                  </span>
                );
              })}
            </span>
          </div>
        </div>

        <div className="col-span-2">
          <label className="text-xl">Message Ka-barter</label>
          <textarea
            className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            rows={10}
            {...register("messageToKaBarter", { required: true })}
          />
          {errors.messageToKaBarter && (
            <div className="text-sm text-red-500">The message is required.</div>
          )}
          {errors.imageUrlFrom && (
            <div className="text-sm text-red-500">An image is required.</div>
          )}

          <button
            className="flex items-center w-full px-4 py-2 my-1 text-left bg-red-400 rounded-md focus:outline-none"
            type="submit"
          >
            Barter!
          </button>
        </div>

        <div className="col-span-2">
          <div className="border border-gray-500 rounded-lg">
            <input {...register("imageUrlFrom", { required: true })} hidden />
            <Upload setValue={setValue} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BarterForm;
