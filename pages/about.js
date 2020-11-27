import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import axios from "axios"
import Link from "next/link"


export default function About({current}) {
  return (
    <Layout>
        現在時刻は{current}です。
    </Layout>
  );
}

// Change method from getServerSideProps to getStaticProps for testing SSR/ISG behavior.
export async function getServerSideProps() {
    const date = new Date();
    const current = date.toLocaleString()
  return {
    props: {
      current,
    },
  };
}
