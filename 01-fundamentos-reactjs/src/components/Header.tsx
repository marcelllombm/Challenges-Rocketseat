import styles from "./Header.module.css";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface HeaderProps extends HTMLMotionProps<"img"> {
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
        <motion.span
          className={styles.spanBlue}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {firstHalf}
        </motion.span>
        <motion.span
          className={styles.spanPurpleDark}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {secondHalf}
        </motion.span>
      </h1>
    );
  } else {
    styledTitle = <h1>{titleH1}</h1>;
  }

  return (
    <header className={styles.header}>
      <motion.img
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        {...props}
      />
      <h1>{styledTitle}</h1>
    </header>
  );
}
