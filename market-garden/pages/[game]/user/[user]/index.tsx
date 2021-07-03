import Link from "next/link";
import { BattlelogClient, Soldier, User } from "battlelog.js/src/index";
import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { SupportedGames } from "battlelog.js/src/types/games";
import * as gameInverted from "@nefomemes/blscraps-strings/inverted/games.json";
import * as platforms from "@nefomemes/blscraps-strings/inverted/platform.json";
import getPortrait from "~/util/getPortrait";
interface BattlelogUserPageContext extends GetServerSidePropsContext<any> {
    params: {
        game: SupportedGames,
        user: string
    }
};
interface SuperSoldier extends Soldier {
  platformName: string;
  gameName: string;
  soldierPic: string;
  url: string;
  displayName: string;
  displayText: string;
};
interface SuperUser extends User {

  soldiers: Array<SuperSoldier>;
  staticAvatarURL: string;

};

export const getServerSideProps = async function getServerSideProps(ctx: BattlelogUserPageContext){
if(!!ctx.params.user || !!ctx.params.game) return { notFound: true }

let battlelog = new BattlelogClient();
let game = battlelog.game(ctx.params.game);
// @ts-expect-error
let user: SuperUser = await game.fetchUser(ctx.params.user);

         user.staticAvatarURL = `https://gravatar.com/avatar/${user.gravatarMd5}?r=pg&d=retro`;

        for (let soldier of user.soldiers) {
          soldier.platformName = platforms[soldier.platform];
          soldier.gameName = gameInverted[soldier.game];
          soldier.soldierPic = getPortrait(
            soldier.game,
            soldier.persona.picture
          );
          soldier.url = `/${soldier.gameName.toLowerCase()}/user/${
            user.user.username
          }/soldier/${soldier.persona.personaId}`;
          soldier.displayName =  (soldier.persona.clanTag
                    ? `[${soldier.persona.clanTag}]`
                    : "") + (soldier.persona.personaName || user.user.username);
      
          soldier.displayText = `${soldier.gameName} - ${soldier.platformName}`
      }

return {
    prop: {
        user
    }
}
};

export default function BattlelogUserPage(prop: {user: SuperUser}){
return    <div  className="user-page">

    <div className="user-wallpaper user-page-content">
      <img src={ prop.user.staticAvatarURL }/>
      <div className="user-name">
          <p className="title"> { prop.user.user?.username || "No name" } </p>
        

        </div>
    
    
    </div>



  

 <div className="user-page-content user-presentation">
  <div className="user-presentation">
    { !prop.user.userinfo.presentationHidden ?  prop.user.userinfo.presentation : "Privacy bits. The user's presentation is hidden. " }
    </div>
 </div>

    <div className="soldier-boxes user-page-content">
      {
     prop.user.soldiers.map((soldier) => { 
     return (
       <div className="soldier-box">
        <Link href={soldier.url}>
          <div className="soldier-text">
            <p className="title"> { soldier.displayName } </p>
            <p className="text"> { soldier.displayText } </p>
          </div>
          <div className="soldier-portrait">
            <img src={ soldier.soldierPic }/>
          </div>
        </Link>
      </div>);
      
})
}

     

    </div>


    <div className="friends-box">
        <div className="friends-list">
         {
           prop.user.friends.map((friend) => {
               <img src={ `https://gravatar.com/avatar/${friend.gravatarMd5}.jpg?r=pg&d=retro` }/>
        
           })
}
       </div>

    </div>

</div>

}