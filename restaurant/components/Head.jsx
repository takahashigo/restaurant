import Head from "next/head";

const HeadContent = ({ title }) => {
  return (
    <Head>
      <meta name="description" content="Best piza shop in town" />
      <title>Pizzall-{title}</title>
      <link rel="icon" href="/img/featured.png" />
    </Head>
  );
};

export default HeadContent;
