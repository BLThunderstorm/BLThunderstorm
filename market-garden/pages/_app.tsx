import { DefaultLayout } from "../components/DefaultLayout";
import type { AppProps /*, AppContext */ } from 'next/app';
import "../styles/globals.scss";

export default function BLThunderstormApp({ Component, pageProps }: AppProps){
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
}