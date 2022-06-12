import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../../config/sanity";

import Seo from "../../components/Seo";
import CustomLayout from "../../components/layout/CustomLayout";
import Gallery from "../../components/photography/gallery/Gallery";
import Landing from "../../components/photography/gallery/Landing";

const photoBlogQuery = `*[_type == "photoBlog"]|order( publishedAt desc)
                      {
                        "id":_id, 
                        title, 
                        "slug":slug.current, 
                        mainImage
                      }`;

const galleryQuery = `*[_type == "photography"]|order( _createdAt desc)
                    {
                      "id":_id, 
                      caption,
                      "Ilink":IsLink,
                      "Flink":FbLink, 
                      photo
                    }`;

const seoQuery = `*[_type == "seo" && page=="Gallery"][0]
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
  const gallery = await sanityClient.fetch(galleryQuery);
  const blog = await sanityClient.fetch(photoBlogQuery);

  return {
    props: {
      seo,
      gallery,
      blog,
    },
    revalidate: 1,
  };
};

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Photography",
    url: "/photography",
  },
];

function gallery({ seo, gallery, blog }) {
  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };

  const random_item = getRandomItem(gallery);
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

      <CustomLayout links={links} currPage="Gallery">
        <Landing item={random_item} />
        <Gallery
          data={gallery}
          reel_type={blog}
          links={links}
          currPage="Gallery"
        />
      </CustomLayout>
    </>
  );
}

export default gallery;
