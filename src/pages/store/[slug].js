import Head from "next/head";
import { sanityClient, urlFor } from "../../../config/sanity";

import Construct from "../../components/shop/Construct";
import FallbackLoading from "../../components/design/template/FallbackLoading";
import CustomLayout from "../../components/layout/CustomLayout";

const allProductsQuery = `*[_type == "shop" && defined(slug.current)][].slug.current`;

const productsQuery = `*[_type == "shop" && slug.current == $slug][0]
                      {
                        "id":_id, 
                        name,
                        category->{name},
                        description,
                        caption,
                        price, 
                        preview, 
                        photo, 
                        coverPhoto,
                        size, 
                        status, 
                        preBooking,
                        offer, 
                        offerName->{name}, 
                        discountPrice,
                        "slug":slug.current 
                      }`;

const otherProductQuery = `*[_type == "shop" && slug.current != $slug]|order(_createdAt desc)
                        {
                          "id":_id, 
                          name, 
                          price, 
                          photo, 
                          category->{name}, 
                          offer, 
                          discountPrice,
                          status,
                          "slug":slug.current 
                        }`;

const offerQuery = `*[_type == "offer" && status == true][0]
                  { 
                    status,
                    discount,
                    specialMsg
                  }`;

export async function getStaticPaths() {
  const response = await sanityClient.fetch(allProductsQuery);

  const paths = response.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const offer = await sanityClient.fetch(offerQuery);
  const evt = await sanityClient.fetch(productsQuery, {
    slug: params.slug,
  });

  const others = await sanityClient.fetch(otherProductQuery, {
    slug: params.slug,
  });

  if (!evt) {
    return {
      redirect: {
        destination: "/store",
        permanent: false,
      },
    };
  }

  return {
    props: {
      evt,
      offer,
      others,
    },
    revalidate: 1,
  };
}

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Store",
    url: "/store",
  },
];

export default function products({ evt, offer, others }) {
  if (!evt) return <FallbackLoading />;

  return (
    <>
      <Head>
        <title>{evt.name} | The Local Feet </title>
        <meta name="description" content={evt.caption} />
        <meta property="og:title" content={`${evt.name} | The Local Feet `} />
        <meta property="og:description" content={evt.caption} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/store/${evt.slug}`}
        />
        <meta property="og:image" content={`${urlFor(evt.photo).url()}`} />
        <meta property="og:image:alt" content={evt.name} />
      </Head>

      <CustomLayout links={links} currPage={evt.name}>
        <Construct
          data={evt}
          offer={offer}
          others={others}
          links={links}
          currPage={evt.name}
        />
      </CustomLayout>
    </>
  );
}
