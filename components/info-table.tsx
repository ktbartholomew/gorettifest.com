import { ReactNode } from "react";
import styles from "./info-table.module.css";

export function InfoTable({ children }: { children: ReactNode }) {
  return <table className={styles.infoTable}>{children}</table>;
}
