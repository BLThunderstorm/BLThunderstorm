import Link from "next/link";
import { BattlelogClient, Soldier, Profile } from "battlelog.js/src";
import { GetServerSidePropsContext } from "next";
import { SupportedGames } from "battlelog.js/src/types/games";
import * as gameInverted from "@nefomemes/blscraps-strings/inverted/games.json";
import * as platforms from "@nefomemes/blscraps-strings/inverted/platform.json";
import getPortrait from "~/util/getPortrait";
import styles from "./BattlelogUserPage.module.scss";
import { PageSpacer } from "~/components/pagespacer";
import { SuperUser, SuperSoldier } from "../../../lib/data/bl-user";
import { SoldierBox } from "../../../components/user/soldier-box";
interface BattlelogUserPageContext extends GetServerSidePropsContext<any> {
  params: {
    game: SupportedGames;
    user: string;
  };
}

export const getServerSideProps = async function getServerSideProps(
  ctx: BattlelogUserPageContext
) {
  if (!ctx.params.user || !ctx.params.game) return { notFound: true };

  let battlelog = new BattlelogClient();
  let game = battlelog.game(ctx.params.game);

  let user = (await game.fetchProfile(ctx.params.user)) as SuperUser;

  if (!user.user.userId) return { notFound: true };

  user.staticAvatarURL = `https://gravatar.com/avatar/${user.user.gravatarMd5}?r=pg&d=retro`;

  for (let soldier of user.soldiersBox) {
    soldier.platformName = platforms[soldier.platform];
    soldier.gameName =
      gameInverted[soldier.game] != "WARSAW"
        ? gameInverted[soldier.game]
        : "bf4";
    soldier.soldierPic = getPortrait(soldier.game, soldier.persona.picture);
    soldier.url = `/${soldier.gameName.toLowerCase()}/user/${
      user.user.username
    }/soldier/${soldier.persona.personaId}/${soldier.platformName}`;
    soldier.displayName =
      (soldier.persona.clanTag ? `[${soldier.persona.clanTag}]` : "") +
      (soldier.persona.personaName || user.user.username);

    soldier.displayText = `${soldier.gameName} - ${soldier.platformName}`;
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      params: ctx.params,
    },
  };
};

export default function BattlelogUserPage(prop: {
  user: SuperUser;
  params: { game: string };
}) {
  return (
    <div className={`${styles["user-page"]} user-page`}>
      <div
        className={` ${styles["user-wallpaper"]} ${styles["user-page-content"]} user-wallpaper user-page-content`}
      >
        <img srcSet={`${prop.user.staticAvatarURL}&s=1024 1024w`} />
        <div className={`${styles["user-name"]} user-name`}>
          <p className={`${styles[`title`]} title`}>
            {prop.user.user?.username || "No name"}
          </p>
        </div>
      </div>
      <PageSpacer>
        <div>
          <div
            className={`${styles["user-page-content"]} ${styles["user-presentation"]} user-page-content user-presentation`}
          >
            <article>
              {!prop.user.userinfo.presentationHidden
                ? prop.user.userinfo.presentation
                : "Privacy bits. The user's presentation is hidden. "}
            </article>
          </div>

          <div
            className={`${styles["soldier-boxes"]} ${styles["user-page-cotent"]} soldier-boxes user-page-content`}
          >
            {prop.user.soldiersBox.map((soldier) => {
              return (
                <SoldierBox
                  soldier={soldier}
                  key={soldier.persona.personaId}
                ></SoldierBox>
              );
            })}
          </div>

          <div className={`${styles["friends-box"]} friends-box`}>
            <div className={`${styles["friends-list"]} friends-list`}>
              {prop.user.tenFriends.map((friend) => {
                return (
                  <div
                    key={friend.user.userId}
                    className={`${styles["user-friend"]} user-friend`}
                  >
                    <Link
                      href={`/${prop.params.game}/user/${friend.user.username}`}
                    >
                      <img
                        className={`${styles["friend-avatar"]}`}
                        src={`https://gravatar.com/avatar/${friend.user.gravatarMd5}.jpg?r=pg&d=retro`}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageSpacer>
    </div>
  );
}
