import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles-2.css";
import "../styles.css"


import { Navbar } from "../components/Navhero/Nav";
import { Content } from "../components/Characters/Characters";
import Head from "next/head";


export default () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar/>
    <Content/>

  </div>
);