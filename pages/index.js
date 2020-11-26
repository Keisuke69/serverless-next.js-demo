import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import axios from "axios"
import Link from "next/link"


export default function Home({postsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul>
        {postsData.map((posts,index) => <li key={posts.ID}><Link href={`/posts/${posts.ID}`}>{posts.title}</Link></li>)}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {

  const url = "https://public-api.wordpress.com/rest/v1.1/sites/keisuke69.wordpress.com/posts/"
  const response = await axios.get(url)
  const postsData = await response.data.posts

  return {
    props: {
      postsData
    },
  };
}
