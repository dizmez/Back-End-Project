import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles-2.css";
import "../styles.css";
import Head from "next/head";

import { Navbar } from "../components/Navhero/Nav";
import { Water } from "../components/Elements/water";

export default () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <Water />
  </div>
);
