import { ReactNode } from "react";
import { Navbar } from "@components/common/";
import cn from "classnames";
import s from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={cn(s.root)}>
      <Navbar />
      <section className={s.content}>{children}</section>
    </div>
  );
};

export default Layout;
