import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../../config/sanity";

import Seo from "../../components/Seo";
import Layout from "../../components/layout/Layout";
import Gallery from "../../components/photography/Gallery";
import Landing from "../../components/photography/Landing";
import PhotoBlog from "../../components/photography/PhotoBlog";

const photoBlogQuery = `*[_type == "photoBlog"]|order( publishedAt desc)
                      {
                        "id":_id, 
                        publishedAt,
                        keywords,
                        title, 
                        subtitle, 
                        mainImage,
                        "slug":slug.current
                      }`;

const galleryQuery = `*[_type == "photography"][0...6]|order( _createdAt desc)
                      {
                        "id":_id, 
                        caption,
                        "Ilink":IsLink,
                        "Flink":FbLink, 
                        photo
                      }`;

const seoQuery = `*[_type == "seo" && page=="Photography"][0]
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
  const blog = await sanityClient.fetch(photoBlogQuery);
  const gallery = await sanityClient.fetch(galleryQuery);

  return {
    props: {
      seo,
      gallery,
      blog,
    },
    revalidate: 1,
  };
};

function index({ seo, blog, gallery }) {
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
        <Landing />
        {blog.length > 0 && <PhotoBlog data={blog} />}
        <Gallery data={gallery} />
      </Layout>
    </>
  );
}

export default index;
