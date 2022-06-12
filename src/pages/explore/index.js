import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../../config/sanity";

import Seo from "../../components/Seo";
import Body from "../../components/explore/Body";
import Layout from "../../components/layout/Layout";
import Landing from "../../components/explore/Landing";
import ComingSoon from "../../components/design/template/ComingSoon";

const blogQuery = `*[_type == "blog"]|order( publishedAt desc) 
                  {
                    'id':_id, 
                    publishedAt, 
                    keywords,
                    'country':country->{name}, 
                    mainImage,
                    'slug':slug.current, 
                    title, 
                    subtitle 
                  }`;

const countryQuery = `*[_type == "country"]
                      { 
                        "id":_id, 
                        coverImage, 
                        name 
                      }`;

const seoQuery = `*[_type == "seo" && page=="Explore"][0]
                  {
                    title,
                    description,
                    keywords,
                    url,
                    ogImage,
                    "alt":ogImage.ogAlt
                  }`;

export const getStaticProps = async () => {
  const seo = await sanityClient.fetch(seoQuery);
  const blog = await sanityClient.fetch(blogQuery);
  const country = await sanityClient.fetch(countryQuery);

  return {
    props: { seo, country, blog },
    revalidate: 1,
  };
};

function index({ seo, country, blog }) {
  useEffect(() => {
    new Rellax(".parallex", {
      speed: -7,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <>
      <Seo data={seo} />
      <Layout>
        {blog.length > 0 ? (
          <>
            <Landing />
            <Body country={country} blog={blog} />
          </>
        ) : (
          <ComingSoon asset="/assets/explore-landing.jpeg" />
        )}
      </Layout>
    </>
  );
}

export default index;
