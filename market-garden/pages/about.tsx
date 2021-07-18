import "../styles/About.module.scss";
import { DefaultLayout } from "../components/DefaultLayout";
import Head from 'next/head'
export default function AboutPage(){
    return (<DefaultLayout><div className="about-page">

      <Head><title>About - BLTHunderstorm</title></Head>
    <div id="intro" className="box">
      <div className="title">
        <p id="service-name">BLThunderstorm</p>
        <p className="message">
          Unofficial stats-tracking and dashboard site for Battlefield games.
        </p>
      </div>
    </div>

    <div id="about" className="box">
      <div id="features-container">

      </div>
    </div>
  </div></DefaultLayout>);
}