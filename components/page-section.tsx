import { ReactNode } from "react";
import styles from "./page-section.module.css";

export function PageSection({
  id,
  className,
  children,
  grid,
}: {
  id?: string;
  className?: string;
  grid?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={["overflow-hidden", className ?? ""].join(" ")}>
      <section id={id} className={styles.pageSection}>
        {grid ? (
          <div className={styles.pageSection__grid}>{children}</div>
        ) : (
          children
        )}
      </section>
    </div>
  );
}
