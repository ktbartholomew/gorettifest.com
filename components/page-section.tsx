import { ReactNode } from "react";
import styles from "./page-section.module.css";
import { VirtualPageview } from "./virtual-pageview";

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
    <VirtualPageview id={id ?? ""}>
      <div className={["overflow-hidden", className ?? ""].join(" ")}>
        <section id={id} className={styles.pageSection}>
          {grid ? (
            <div className={styles.pageSection__grid}>{children}</div>
          ) : (
            children
          )}
        </section>
      </div>
    </VirtualPageview>
  );
}
