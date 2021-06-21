import * as games from "@nefomemes/blscraps-strings/games.json";
import * as bf4cdn from "@nefomemes/blscraps-strings/bf4_cdn.json";

export default function getPortrait(game: string, personaPicture: string) : string {
          switch (game) {
            case games["BF3"]: {
              return `https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/profile/bf3/soldier/l/${
                personaPicture    
              }.png`;
            }
            case games["BF4"]: {
              return `https://d34ymitoc1pg7m.cloudfront.net/bf4/soldier/large/${
                personaPicture
              }-${bf4cdn["l_large"][soldier.persona.picture]}.png`;
            }
       

            case games["MOHW"]: {
              return `https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/profile/mohw/soldiers/295x350/${
                personaPicture || "default"
              }.png`;
              
            }
            default:{
              return "https://d34ymitoc1pg7m.cloudfront.net/bf4/soldier/large/default-1066f14a.png";
            }
          }
}