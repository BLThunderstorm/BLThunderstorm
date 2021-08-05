import type { ReactElement, FunctionComponent } from "react";
import styles from "./PageSpacer.module.scss";
export const PageSpacer: FunctionComponent<{ children: ReactElement }> =
  function ({ children }) {
    return <div className={styles.pagespacer}> {children} </div>;
  };
