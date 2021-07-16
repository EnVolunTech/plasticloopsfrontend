import { ItemPostProps } from "@components/common/ItemPost/ItemPost";
import s from "./BarterForm.module.css";
import Image from "next/image";
import { Avatar } from "@components/common";
import cn from "classnames";
import Link from "next/link";
import Upload from "@components/Upload";

export interface BarterFormProps extends ItemPostProps {}

const BarterForm = ({
  id,
  name,
  initials,
  imageUrl,
  caption,
  tags,
}: BarterFormProps) => {
  return (
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
        />

        <button className="flex items-center w-full px-4 py-2 my-1 text-left bg-red-400 rounded-md focus:outline-none ">
          Barter!
        </button>
      </div>

      <div className="col-span-2">
        <div className="border border-gray-500 rounded-lg">
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default BarterForm;
