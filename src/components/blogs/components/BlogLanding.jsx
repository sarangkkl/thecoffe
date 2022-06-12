import Rellax from "rellax";
import Image from "next/image";
import { useEffect } from "react";
import Moment from "react-moment";
import { AiFillRead } from "react-icons/ai";
import { urlFor } from "../../../../config/sanity";

const BlogLanding = ({ blog }) => {
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
      <div className="section">
        <div className="background">
          {blog?.mainImage && (
            <Image
              layout="fill"
              objectFit="cover"
              loading="eager"
              objectPosition="50% 36%"
              className="parallex an_fade-1"
              src={urlFor(blog.mainImage).url()}
              alt={blog.title}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          )}
          {blog?.mainImage && (
            <Image
              layout="fill"
              objectFit="cover"
              loading="eager"
              objectPosition="50% 36%"
              className="half_ht_mob an_fade-1"
              src={urlFor(blog.mainImage).url()}
              alt={blog.title}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          )}
        </div>

        <div className="container flex">
          <p className="date an_fade-2">
            <Moment format="MMMM D[, ] YYYY">{blog.publishedAt}</Moment>
          </p>

          <h1 className="an_fade-1">{blog.title}</h1>

          <div className="icon an_fade-3 disabled">
            <AiFillRead />
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: 768px;
          text-align: center;
          padding: 0 4rem;
          background: black;
        }

        .section:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          z-index: -1;
          background: #01324838;
        }

        p {
          color: #fff;
        }

        h1 {
          color: #fff;
          line-height: 2rem;
          letter-spacing: 0;
          max-width: 468px;
        }

        span {
          display: block;
          font-family: "Source Serif Pro";
        }

        .date {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        .icon {
          color: white;
          margin-top: 0.6rem;
          font-size: 1.3rem;
          cursor: initial;
        }

        span {
          letter-spacing: 0.2rem;
          margin-top: 0.5rem;
          font-size: 1.6rem;
        }

        .container {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .half_ht_mob {
          display: none;
        }

        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }
          .section {
            height: 60vh;
            padding: 2rem;
          }
          .parallex {
            display: none;
          }
          .half_ht_mob {
            display: block;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 2rem 0rem;
            justify-content: flex-end;
            align-items: flex-start;
            text-align: left;
          }

          .icon {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default BlogLanding;
