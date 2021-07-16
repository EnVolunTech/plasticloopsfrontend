import Image from "next/image";

interface Props {
  className?: string;
  src?: string;
  alt?: string;
  initial?: string;
}

const Avatar = ({
  className = "w-8 h-8 bg-gray-400 rounded-full shadow-md",
  src,
  alt,
  initial,
}: Props) => {
  console.log(initial);
  return (
    <div className={className}>
      {src ? (
        <Image
          className="object-fill rounded-full"
          src={src}
          alt={alt}
          width={100}
          height={100}
        />
      ) : (
        <div className="flex justify-center h-full">
          <span className="my-auto text-base font-semibold text-center text-gray-800">
            {initial}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
