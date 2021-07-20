import styles from "./About.module.scss";

import Head from "next/head";
export default function AboutPage() {
  return (

      <div className={`${styles["about-page"]} about-page`}>
        <Head>
          <title>About - BLTHunderstorm</title>
        </Head>
        <div id="intro" className={`${styles["box"]} box`}>
          <div className={`${styles["title"]} title`}>
            <p id="service-name">BLThunderstorm</p>
            <p className={`${styles["message"]} message`}>
              Unofficial stats-tracking and dashboard site for Battlefield
              games.
            </p>
          </div>
        </div>

        <div id="about" className={`${styles["box"]} ${styles["about"]} box`}>
          <div id={`${styles["features-container"]} features-container`}></div>
        </div>
      </div>
  
  );
}
