import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../../config/sanity";

import Seo from "../../components/Seo";
import Layout from "../../components/layout/Layout";
import Landing from "../../components/travel/Landing";
import TravelTips from "../../components/travel/TravelTips";
import ComingSoon from "../../components/design/template/ComingSoon";
import Navbar from "../../components/layout/Navbar";

const seoQuery = `*[_type == "seo" && page=="Travel"][0]
                  {
                    title,
                    description,
                    keywords,
                    url,
                    ogImage,
                    "alt":ogImage.ogAlt
                  }`;

const postQuery = `*[_type == "travelPosts"]|order( publishedAt desc)  
                      {
                        'id':_id, 
                        publishedAt, 
                        title, 
                        subtitle, 
                        mainImage,
                        'slug':slug.current, 
                        'category':travelCategory->{name}
                      }`;

export const getStaticProps = async () => {
  const seo = await sanityClient.fetch(seoQuery);
  const post = await sanityClient.fetch(postQuery);

  return {
    props: { seo, post },
    revalidate: 1,
  };
};

function travel({ seo, post }) {
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

      {post.length > 0 ? (
        <>
          <Layout>
            <Landing />
            {console.log("EVerything upto slug.js work")}
            <TravelTips tips={post} />
          </Layout>
        </>
      ) : (
        <>
          <Navbar />
          <ComingSoon asset="/assets/coming-soon.jpeg" />
        </>
      )}
    </>
  );
}

export default travel;
