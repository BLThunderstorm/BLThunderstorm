import { Provider } from "next-auth/client";
import { DefaultLayout } from "../components/DefaultLayout";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.scss";

export default function BLThunderstormApp({
  Component,
  pageProps: { session, ...pageprops },
}: AppProps) {
  return (
    <Provider session={session}>
      <DefaultLayout>
        <Component {...pageprops} />
      </DefaultLayout>
    </Provider>
  );
}
