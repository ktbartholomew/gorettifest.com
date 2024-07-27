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
  grid?: number;
  children: ReactNode;
}) {
  function gridClass(columns: number) {
    switch (columns) {
      case 1:
      default:
        return "md:!grid-cols-1";
      case 2:
        return "md:!grid-cols-2";
      case 3:
        return "md:!grid-cols-3";
      case 4:
        return "md:!grid-cols-4";
    }
  }

  return (
    <div className={["overflow-hidden", className ?? ""].join(" ")}>
      <section id={id} className={styles.pageSection}>
        {grid ? (
          <div className={`${styles.pageSection__grid} ${gridClass(grid)} `}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    </div>
  );
}
