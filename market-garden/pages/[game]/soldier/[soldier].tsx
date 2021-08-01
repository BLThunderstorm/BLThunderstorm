import { BattlelogClient } from "battlelog.js/src";
import { SupportedGames } from "battlelog.js/src/types/games";
import type { Soldier } from "battlelog.js/src";

export const getServerSideProps = async function getServerSideProps(ctx: {params: {game: SupportedGames, soldier: string}}){

 let battlelog = new BattlelogClient();
 let game = battlelog.game(ctx.params.game);

let soldier = await game.fetchSoldier(ctx.params.soldier);

return {
props: {soldier}
}
}

const BattlelogSoldierPage = function BattlelogSoldierPage(props: {soldier: Soldier}){
    return (<div className="soldier-page">

        <div>
            <div><div></div><div></div></div>
            <div className="soldier-portrait"></div>

        </div>
    </div>);
}

export default BattlelogSoldierPage;