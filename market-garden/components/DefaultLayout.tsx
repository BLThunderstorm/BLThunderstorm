import { FunctionComponent } from "react";
import { NavigationBar } from "./navigationbar";
import { Footer } from "./Footer";
import type { ReactElement } from "react";
import styles from "./DefaultLayout.module.scss";
export const DefaultLayout: FunctionComponent<{ children: ReactElement }> = ({
  children,
}) => {
  return (
    <div className={`${styles["layout"]} layout`}>
      <div className={`${styles["bg-picture"]} bg-picture`}></div>
      <NavigationBar />
      <div
        className={`${styles["page-content-container"]} page-content-container`}
      >
        <div className={`${styles["pagecontent"]} pagecontent`}>{children}</div>

        <Footer
          disclaimers={[
            {
              id: "credit",
              content: "Made with ♥️ by Nefomemes",
            },
          ]}
        />
      </div>
    </div>
  );
};
