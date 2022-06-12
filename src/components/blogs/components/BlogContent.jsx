import { Portabletext, urlFor, sanityClient } from "../../../../config/sanity";
import FallbackLinks from "../../layout/helper/FallbackLinks";
import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProductCard from "./ProductCard/ProductCard";
const BlogContent = ({ blog, links, currPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blog.affiliateProducts) {
      setLoading(false);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
      </div>
      {/* {blog.affiliateProducts ? (
        <div
          className="product_main_container"
          style={{ boxSizing: "none", width: "150%" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            
            
          {blog.affiliateProducts.map((item, index) => (
            <SwiperSlide>
              <ProductCard key={index} item={item} />
            </SwiperSlide>
            
          ))}
           
          </Swiper>

        </div>
      ) : (
        ""
      )} */}

      <Swiper
        modules={[Navigation,EffectFade,Autoplay]}
        navigation
        centeredSlides={true}
        breakpoints={{
          200:{
            slidesPerView:1,
            spaceBetween: 0,
          },
          400:{
            slidesPerView:2,
            spaceBetween: 0,
          },
          700:{
            slidesPerView:3,
            spaceBetween: 0,
          },
          900:{
            slidesPerView:5,
            spaceBetween: 0,
          },

        }}
        effect
        speed={800}
        slidesPerView={5}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        loop
        
        className="mySwiper"
      >

          {blog.affiliateProducts.map((item, index) => (
            <SwiperSlide>
              <ProductCard key={index} item={item} />
            </SwiperSlide>
            
          ))}
        

      </Swiper>

      <style jsx>{`
        .product_main_container {
          display: flex;
          // flex-wrap: wrap;
          // justify-content: space-between;
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
