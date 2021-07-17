import Link from "next/link";
import s from "./Navbar.module.css";
import cn from "classnames";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={s.root}>
      <div>
        <Link href="/">
          <a>
            <div className="self-start">
              {/* <h2 className={cn(s.siteName, "dark:text-gray-50")}>
              PlasticLoops
            </h2> */}
              <Image
                src="/shots/logo.png"
                className="object-contain"
                height={100}
                width={200}
                // layout="fill"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/new-barter">
          <a className={s.barterButton}>Upload a new item for barter</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
