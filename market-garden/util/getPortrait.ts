import bf4cdn from "@nefomemes/blscraps-strings/bf4_cdn.json";

export default function getPortrait(
  game: number,
  personaPicture: string
): string {
  switch (game) {
    case 2: {
      // Battlefield 3
      return `https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/profile/bf3/soldier/l/${personaPicture}.png`;
    }
    case 2048: {
      // Battlefield 4
      // @ts-expect-error
      return `https://d34ymitoc1pg7m.cloudfront.net/bf4/soldier/large/${personaPicture}-${bf4cdn["l_large"][personaPicture]}.png`;
    }

    case 4096: {
      // Medal of Honor: Warfighter
      return `https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/profile/mohw/soldiers/295x350/${
        personaPicture || "default"
      }.png`;
    }
    default: {
      return "https://d34ymitoc1pg7m.cloudfront.net/bf4/soldier/large/default-1066f14a.png";
    }
  }
}
