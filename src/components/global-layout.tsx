import Link from "next/link";
import style from "./global-layout.module.css";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={`/`}>NAEGA CINEMA</Link>
      </header>
      <main>{children}</main>
      <footer className={style.footer}>제작 @ summer</footer>
    </div>
  );
}
