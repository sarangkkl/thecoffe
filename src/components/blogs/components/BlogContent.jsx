import { Portabletext, urlFor, sanityClient } from "../../../../config/sanity";
import FallbackLinks from "../../layout/helper/FallbackLinks";
import { useState,useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from "./ProductCard/ProductCard";
const BlogContent = ({ blog, links, currPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(blog.affiliateProducts){
      console.log(loading)
      setLoading(false);
    }
  }, [])
  
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  

  const serializers = {
    types: {
      image: ({ node }) => {
        return (
          <div className="blog-image" style={{ margin: "2rem 0" }}>
            <img
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
              src={urlFor(node).url()}
              alt={node.caption}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />

            <p
              style={{
                textaAlign: "left",
                fontStyle: "italic",
                color: "#7e7e7e",
                fontWeight: "400",
              }}
            >
              {node.caption}
            </p>
          </div>
        );
      },
    },
  };
 
  return (
    <>
      <div className="main">
        {currPage && (
          <div className="links_mob">
            <FallbackLinks links={links} currPage={currPage} />
          </div>
        )}

        <Portabletext
          className="blog_body"
          blocks={blog.body}
          serializers={serializers}
        />
        
        
        <p className="tag">the end</p>
        {blog.affiliateProducts ? <div className="product_main_container">
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {blog.affiliateProducts && blog.affiliateProducts.map((item,index)=>(
                <ProductCard key={index} item={item} />
                ))}
            </Carousel>
            
          </div>:""}
      </div>

      <style jsx>{`
        .product_main_container {
          display: flex;
          // flex-wrap: wrap;
          justify-content: space-between;
        }

        .main {
          position: relative;
          max-width: 735px;
          margin: auto;
          padding: 2rem;
        }

        .links_mob {
          display: none;
        }

        @media (max-width: 867px) {
          .main {
            padding: 1rem 0rem;
          }
        }

        @media (max-width: 768px) {
          .links_mob {
            display: block;
            background: white;
            position: sticky;
            padding: 1rem 0rem;
            top: 5.5rem;
            z-index: 2;
          }
        }

        @media (max-width: 600px) {
          .links_mob {
            top: 4.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogContent;
