import styles from "./About.module.scss";

import Head from "next/head";
export default function AboutPage() {
  return (

      <div className={`${styles["about-page"]} about-page`}>
        <Head>
          <title>About - BLTHunderstorm</title>
        </Head>
        <div className={`${styles["intro"]} box intro`}>
          <div className={`${styles["title"]} title`}>
            <p className={`${styles["service-name"]} service-name`}>BLTHUNDERSTORM</p>
            <p className={`${styles["message"]} message`}>
              Unofficial stats-tracking and dashboard site for Battlefield
              games.
            </p>
          </div>
        </div>

      </div>
  
  );
}
