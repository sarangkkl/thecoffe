import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../config/sanity";

import Seo from "../components/Seo";
import Extra from "../components/about/Extra";
import WhyUs from "../components/about/WhyUs";
import Layout from "../components/layout/Layout";
import Landing from "../components/about/Landing";
import Contact from "../components/design/form/Contact";
import OurJourney from "../components/about/OurJourney";
import AboutTravel from "../components/about/AboutTravel";

const blogQuery = `*[_type == "blog"]|order( publishedAt desc) 
                      {
                        'id':_id, 
                        publishedAt, 
                        'country':country->{name}, 
                        mainImage,
                        'slug':slug.current, 
                        title, 
                        subtitle 
                      }`;

const photoBlogQuery = `*[_type == "photoBlog"]|order( publishedAt desc)
                      {
                        "id":_id, 
                        title, 
                        subtitle, 
                        "slug":slug.current, 
                        mainImage
                      }`;

const traveltipsQuery = `*[_type == "travelPosts"]|order( publishedAt desc)  
                      {
                        'id':_id, 
                        publishedAt, 
                        title, 
                        subtitle, 
                        mainImage,
                        'slug':slug.current, 
                        'category':travelCategory->{name}
                      }`;

const seoQuery = `*[_type == "seo" && page=="About"][0]
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
  const photoBlog = await sanityClient.fetch(photoBlogQuery);
  const traveltips = await sanityClient.fetch(traveltipsQuery);

  return {
    props: { seo, blog, photoBlog, traveltips },
    revalidate: 1,
  };
};

function about({ seo, blog, photoBlog, traveltips }) {
  useEffect(() => {
    new Rellax(".parallex", {
      speed: -7,
      center: false,
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
        <Landing />
        <OurJourney />
        <WhyUs />
        <AboutTravel />
        <Extra blog={blog} album={photoBlog} travelTips={traveltips} />
        <Contact />
      </Layout>
    </>
  );
}

export default about;
