import Link from "next/link";
import { Session } from "next-auth";
import { FunctionComponent, useEffect } from "react";
import styles from "./NavigationBar.module.scss";
import { useSession } from "next-auth/client";
export const NavigationBar: FunctionComponent<{
  session?: Session | null;
}> = (props) => {
  let [session, isSession] = useSession();
  return (
    <div
      className={`${styles["navigation-bar-container"]} navigation-bar-container`}
    >
      <div className={`${styles["navigation-bar"]} navigation-bar`}>
        <div
          className={`${styles["top-category-container"]} top-category-container`}
        >
          <div
            className={`${styles["nav-category"]} ${styles["home-category"]} nav-category home-category`}
          >
            <Link href="/">
              <div
                className={`${styles["home-button"]} ${styles["button"]} home-button button`}
              ></div>
            </Link>
          </div>
        </div>
        <div className={`${styles["nav-category"]} bottom-category`}>
          <div className={`${styles["profile"]} ${styles["button"]}`}>
            <img alt={session?.user.name} src={session?.user?.image}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
