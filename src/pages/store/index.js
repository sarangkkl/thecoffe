import { sanityClient } from "../../../config/sanity";

import Seo from "../../components/Seo";
import App from "../../components/shop/App";
import Layout from "../../components/layout/Layout";
import ComingSoon from "../../components/design/template/ComingSoon";
import Navbar from "../../components/layout/Navbar";
import Landing from "../../components/shop/Landing";

const productsQuery = `*[_type == "shop"]|order(_createdAt desc)
                        {
                          "id":_id, 
                          name, 
                          price, 
                          photo, 
                          offer, 
                          status,
                          discountPrice,
                          "slug":slug.current 
                        }`;

const affiliateAdsQuery = `*[_type == "ads"]|order(_createdAt desc)
                      {
                        "id":_id, 
                        name, 
                        dataWRID, 
                        dataWidgetType, 
                        dataClass, 
                        scriptSrc,
                      }`;

const offerQuery = `*[_type == "offer" && status == true][0]
                    { 
                      status,
                      discount,
                      specialMsg,
                      endingDate, 
                      startingDate
                    }`;

const seoQuery = `*[_type == "seo" && page=="Shop"][0]
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
  const offer = await sanityClient.fetch(offerQuery);
  const data = await sanityClient.fetch(productsQuery);
  const ads = await sanityClient.fetch(affiliateAdsQuery);

  return {
    props: { seo, data, offer, ads },
    revalidate: 1,
  };
};

const index = ({ seo, data, offer, ads }) => {
  return (
    <>
      <Seo data={seo} />

      {data.length > 0 || ads.length > 0 ? (
        <>
          <Layout>
            <Landing />
            <App data={data} offer={offer} ads={ads} />
          </Layout>
        </>
      ) : (
        <>
          <Navbar />
          <ComingSoon asset="/assets/about-gallery.jpg" />
        </>
      )}
    </>
  );
};

export default index;
