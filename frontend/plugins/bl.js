import bljs from "battlelog.js/dist/bundle.dev.js";

export default function ({ params, $bljs, $client, $blclient }, inject) {
  if (!$bljs) {
    $bljs = bljs;
    inject("bljs", $bljs);
  }
  if (!$blclient) {
    $blclient = bljs();
    inject("blclient", $blclient);
  }
  if (params.game && (!$client || $client.game !== params.game)) {
    inject("client", $blclient.game(params.game));
  }
}
