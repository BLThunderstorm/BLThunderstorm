import Link from "next/link";
import { BattlelogClient, Soldier, Profile } from "battlelog.js/src/index";
import { GetServerSidePropsContext } from "next";
import { SupportedGames } from "battlelog.js/src/types/games";
import * as gameInverted from "@nefomemes/blscraps-strings/inverted/games.json";
import * as platforms from "@nefomemes/blscraps-strings/inverted/platform.json";
import getPortrait from "~/util/getPortrait";
import styles from "./BattlelogUserPage.module.scss";

interface BattlelogUserPageContext extends GetServerSidePropsContext<any> {
  params: {
    game: SupportedGames;
    user: string;
  };
}
interface SuperSoldier extends Soldier {
  platformName: string;
  gameName: string;
  soldierPic: string;
  url: string;
  displayName: string;
  displayText: string;
}
interface SuperUser extends Profile {
  soldiers: Array<SuperSoldier>;
  staticAvatarURL: string;
}

export const getServerSideProps = async function getServerSideProps(
  ctx: BattlelogUserPageContext
) {
  if (!ctx.params.user || !ctx.params.game) return { notFound: true };

  let battlelog = new BattlelogClient();
  let game = battlelog.game(ctx.params.game);
  // @ts-expect-error
  let user: SuperUser = await game.fetchProfile(ctx.params.user);

  user.staticAvatarURL = `https://gravatar.com/avatar/${user.user.gravatarMd5}?r=pg&d=retro`;

  for (let soldier of user.soldiers) {
    soldier.platformName = platforms[soldier.platform];
    soldier.gameName = gameInverted[soldier.game];
    soldier.soldierPic = getPortrait(soldier.game, soldier.persona.picture);
    soldier.url = `/${soldier.gameName.toLowerCase()}/user/${
      user.user.username
    }/soldier/${soldier.persona.personaId}`;
    soldier.displayName =
      (soldier.persona.clanTag ? `[${soldier.persona.clanTag}]` : "") +
      (soldier.persona.personaName || user.user.username);

    soldier.displayText = `${soldier.gameName} - ${soldier.platformName}`;
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};

function SoldierBox(props: {soldier: SuperSoldier}){
  return  (<div className={` soldier-box-container`}>
  <Link href={props.soldier.url}>
    <div className={`soldier-box`}>
    <div className={`${styles["soldier-text"]} ${styles["soldier-content"]} soldier-content soldier-text`}>
      <p className={`${styles["title"]} title`}> {props.soldier.displayName} </p>
      <p className={`${styles["text"]} text`}> {props.soldier.displayText} </p>
    </div>
    <div className={`${styles["soldier-portrait"]} ${styles["soldier-content"]} soldier-content soldier-portrait`}>
      <img src={props.soldier.soldierPic} />
    </div>
    </div>
  </Link>
</div>)
}

export default function BattlelogUserPage(prop: { user: SuperUser }) {

  return (
  
      <div className={`${styles["user-page"]} user-page`}>
        <div className={` ${styles["user-wallpaper"]} ${styles["user-page-content"]} user-wallpaper user-page-content`}>
          <img src={prop.user.staticAvatarURL} />
          <div className={`${styles["user-name"]} user-name`}>
            <p className={`${styles[`title`]} title`}> {prop.user.user?.username || "No name"} </p>
          </div>
        </div>

        <div className={`${styles["user-page-content"]} ${styles["user-presentation"]} user-page-content user-presentation`}>
           <div>{!prop.user.userinfo.presentationHidden
              ? prop.user.userinfo.presentation
              : "Privacy bits. The user's presentation is hidden. "}</div> 
        </div>

        <div className={`${styles["soldier-boxes"]} ${styles["user-page-cotent"]} soldier-boxes user-page-content`}>
          {prop.user.soldiers.map((soldier) => {
            return (
              <SoldierBox soldier={soldier} key={soldier.persona.personaId}></SoldierBox>
            );
          })}
        </div>

        <div className={`${styles["friends-box"]} friends-box`}>
          <div className={`${styles["friends-list"]} friends-list`}>
            {prop.user.friends.map((friend) => {
            return <img
                src={`https://gravatar.com/avatar/${friend.gravatarMd5}.jpg?r=pg&d=retro`}
              />;
            })}
          </div>
        </div>
      </div>
  
  );
}
