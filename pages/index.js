import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
// import someDatabaseSDK from 'someDatabaseSDK'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

//const databaseClient = someDatabaseSDK.createClient(...)
export async function getStaticProps() {
  // return databaseClient.query('SELECT posts...')

  // const res = await fetch('..');
  // return res.json();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

/**
 * Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
 */


/**
 * Essentially, getStaticProps allows you to tell Next.js: 
 * “Hey, this page has some data dependencies — so when you pre-render 
 * this page at build time, make sure to resolve them first!”
 *     Note: In development mode, getStaticProps runs on each request instead.
 */

/**
 * Client-side Rendering
 * If you do not need to pre-render the data, you can also use the following strategy (called Client-side Rendering):

    Statically generate (pre-render) parts of the page that do not require external data.
    When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

    SWR

The team behind Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re 
fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.
 We won’t cover the details here, but here’s an example usage:

 import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}

 */