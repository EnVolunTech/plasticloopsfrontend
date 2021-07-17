import Link from "next/link";
import s from "./Navbar.module.css";
import cn from "classnames";

const Navbar = () => {
  return (
    <div className={s.root}>
      <div>
        <Link href="/">
          <a>
            <h2 className={cn(s.siteName, "dark:text-gray-50")}>
              PlasticLoops
            </h2>
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
