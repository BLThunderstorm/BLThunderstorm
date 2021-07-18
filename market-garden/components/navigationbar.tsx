import { FunctionComponent } from "react";
import styles from "./NavigationBar.module.sass";

export const NavigationBar: FunctionComponent = () => {
    return (<div className={styles["navigation-bar-container"]}>
    <div className="navigation-bar">
      <div className="top-category-container">
        <div className="nav-category home-category">
          <div className="home-button button"></div>
        </div>
      </div>
      <div className="nav-category bottom-category">
        <div className="button profile-button"></div>
      </div>
    </div>
  </div>);
}