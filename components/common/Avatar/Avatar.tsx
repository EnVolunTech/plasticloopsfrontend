import Image from "next/image";

interface Props {
  className?: string;
  src: string;
  alt?: string;
}

const Avatar = ({
  className = "w-8 h-8 rounded-full shadow-md",
  src,
  alt,
}: Props) => {
  return (
    <div className={className}>
      <Image
        className="object-fill rounded-full"
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Avatar;
