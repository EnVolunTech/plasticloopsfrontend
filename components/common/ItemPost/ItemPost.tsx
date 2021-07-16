import Image from "next/image";
import s from "./ItemPost.module.css";
import cn from "classnames";
import Link from "next/link";
import { Avatar } from "@components/common";

export interface ItemPostProps {
  id: string;
  name: string;
  imageUrl: string;
  caption?: string;
  tags?: Array<string>;
}

const Post = ({ id, name, imageUrl, caption, tags }: ItemPostProps) => {
  return (
    <div className={s.root}>
      <div className={cn(s.topInfo)}>
        {/* <Link href={`/user/${id}`}> */}
        {/* <a> */}
        <div className="flex items-center mb-2">
          <Avatar src="https://picsum.photos/id/126/4272/2511" />

          <div className="ml-2">
            <div className="block py-0">{name}</div>
          </div>
        </div>
        {/* </a>
        </Link> */}
        {/* <h5 className={s.postText}>{caption}</h5> */}
      </div>
      <Link href={`/barter/${id}`}>
        <a className={s.imageContainer}>
          <Image
            className="object-cover"
            src={imageUrl}
            alt={imageUrl}
            height={500}
            width={800}
            layout="responsive"
          />
        </a>
      </Link>
      <div className={cn(s.bottomInfo)}>
        <span>
          <Link href={`/barter/${id}`}>
            <a>
              <button className={s.barterButton}>Barter!</button>
            </a>
          </Link>
        </span>
        <span className="my-auto ml-auto">
          {/* <span className={cn(s.tagPill, "dark:bg-gray-300")}>sampleTag1</span> */}
          {/* <span className={cn(s.tagPill, "dark:bg-gray-300")}>sampleTag2</span> */}
          {/* <span className={cn(s.tagPill, "dark:bg-gray-300")}>sampleTag3</span> */}
        </span>
      </div>
    </div>
  );
};

export default Post;
