import { SuperSoldier } from "~/lib/data/bl-user";
import Link from "next/link";
import styles from "../../styles/user/SoldierBox.module.scss";
export function SoldierBox(props: { soldier: SuperSoldier }) {
  return (
    <div className={` soldier-box-container`}>
      <Link href={props.soldier.url}>
        <div className={`${styles["soldier-box"]} soldier-box`}>
          <div
            className={`${styles["soldier-text"]} ${styles["soldier-content"]} soldier-content soldier-text`}
          >
            <p className={`${styles["title"]} title`}>
              {props.soldier.displayName}
            </p>
            <p className={`${styles["text"]} text`}>
              {props.soldier.displayText}
            </p>
          </div>
          <div
            className={`${styles["soldier-portrait"]} ${styles["soldier-content"]} soldier-content soldier-portrait`}
          >
            <img src={props.soldier.soldierPic} />
          </div>
        </div>
      </Link>
    </div>
  );
}
