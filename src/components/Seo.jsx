import Head from "next/head";
import { urlFor } from "../../config/sanity";

function Seo({ data }) {
  return (
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.keywords} />
      <meta property="og:url" content={data.url} />
      <meta property="og:image" content={urlFor(data.ogImage).url()} />
      <meta property="og:image:alt" content={data.alt} />
    </Head>
  );
}

export default Seo;
