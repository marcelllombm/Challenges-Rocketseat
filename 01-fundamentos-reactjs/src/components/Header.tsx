import type { ImgHTMLAttributes } from "react";
import styles from "./Header.module.css";

interface HeaderProps extends ImgHTMLAttributes<HTMLImageElement> {
  titleH1: string;
}

export function Header({ titleH1, ...props }: HeaderProps) {
  let styledTitle;

  if (titleH1.length >= 4) {
    const middle = Math.floor(titleH1.length / 2);
    const firstHalf = titleH1.slice(0, middle);
    const secondHalf = titleH1.slice(middle);

    styledTitle = (
      <h1>
        <span className={styles.spanBlue}>{firstHalf}</span>
        <span className={styles.spanPurpleDark}>{secondHalf}</span>
      </h1>
    );
  } else {
    styledTitle = <h1>titleH1</h1>;
  }

  return (
    <header className={styles.header}>
      <img {...props} />
      <h1>{styledTitle}</h1>
    </header>
  );
}
