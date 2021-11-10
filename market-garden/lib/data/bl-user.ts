import { Soldier, Profile } from "battlelog.js/src";

export interface SuperUser extends Profile {
  soldiersBox: Array<SuperSoldier>;
  staticAvatarURL: string;
}
export interface SuperSoldier extends Soldier {
  platformName: string;
  gameName: string;
  soldierPic: string;
  url: string;
  displayName: string;
  displayText: string;
}
