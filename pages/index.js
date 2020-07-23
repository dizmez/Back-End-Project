import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";



import { Navhero } from "../components/Navhero/Navhero"
import { Overview } from "../components/Sections/Overview"
import { Synopsis } from "../components/Sections/Synopsis"
import { Mainchar } from "../components/Sections/Mainchars"
import { Influences } from "../components/Sections/Influence"
import { Themes } from "../components/Sections/Themes"
import { Footer } from "../components/Sections/Footer"


import Head from "next/head";


export default () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navhero/>
    <Overview/>
    <Synopsis/>
    <Mainchar/>
    <Influences/>
    <Themes />
  </div>
);
