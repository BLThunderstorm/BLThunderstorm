import Link from "next/link";
import { BattlelogClient, User } from "battlelog.js/src/index";
import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { SupportedGames } from "battlelog.js/src/types/games";
interface BattlelogUserPageContext extends GetServerSidePropsContext<any> {
    params: {
        game: SupportedGames,
        user: string
    }
};

export const getServerSideProps = async function getServerSideProps(ctx: BattlelogUserPageContext){
if(!!ctx.params.user || !!ctx.params.game) return { notFound: true }

let battlelog = new BattlelogClient();
let game = battlelog.game(ctx.params.game);
let user = await game.fetchUser(ctx.params.user)
return {
    prop: {
        user
    }
}
};

/**
 * Type '(ctx: GetServerSidePropsContext<ParsedUrlQuery>) => { prop: {}; }' is not assignable to type 'GetServerSideProps<{ [key: string]: any; }, ParsedUrlQuery>'.
  Type '{ prop: {}; }' is missing the following properties from type 'Promise<GetServerSidePropsResult<{ [key: string]: any; }>>': then, catch, finally, [Symbol.toStringTag]
 */

export default function BattlelogUserPage(prop: {user: User}){
return    <div  className="user-page">

    <div className="user-wallpaper user-page-content">
      <img v-key:src="user.staticAvatarURL"/>
      <div className="user-name">
          <p className="title"> { prop.user.user?.username || "No name" } </p>
        

        </div>
    
    
    </div>



  

    <div className="user-page-content">
      <div v-if="user.readme">
            {{ user.readme }}
      </div>
    </div>

    <div className="soldier-boxes user-page-content">
      <div className="soldier-box" v-for="soldier in user.soldiers">
        <Link href={soldier.url}>
          <div className="soldier-text">
            <p className="title"> {{ soldier.displayName }} </p>
            <p className="text"> {{ soldier.displayText }} </p>
          </div>
          <div class="soldier-portrait">
            <img v-key:src="user.soldierPic"/>
          </div>
        </Link>
      </div>

    </div>


    <div className="friends-box">
        <div className="friends-list">
          <div v-for="friend in user.friends" className="friend-box">
              <img v-key:src="getAvatar(friend.gravatarMd5)"/>
          </div>
        </div>

    </div>

</div>

}