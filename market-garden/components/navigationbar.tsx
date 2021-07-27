import { FunctionComponent } from "react";
import styles from "./NavigationBar.module.sass";

export const NavigationBar: FunctionComponent = () => {
  return (
    <div className={`${styles["navigation-bar-container"]} navigation-bar-container`}>
      <div className={`${styles["navigation-bar"]} navigation-bar`}>
        <div className={`${styles["top-category-container"]} top-category-container`}>
          <div className={`${styles["nav-category"]} ${styles["home-category"]} nav-category home-category`}>
            <div className={`${styles["home-button"]} ${styles["button"]} home-button button`}></div>
          </div>
        </div>
        <div className="nav-category bottom-category">
          <div className="button profile-button"></div>
        </div>
      </div>
    </div>
  );
};
