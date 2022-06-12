import Image from "next/image";

import HrTag from "../design/HrTag";
import ReadMoreType from "../design/buttons/ReadMoreType";

const About = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="main">
            <h2>Our travel style</h2>

            <p className="tag">
              You only live once, but if you do it right, once is enough'
            </p>

            <p>
              We follow this spirit while we travel. We are deeply passionate
              about travel, but now the hobby turned into our profession. We are
              not much comfortable in touring with a fixed itinerary. Gradually,
              we started to like the way we explore like an experimental
              traveler and come up with an idea to start our own blog,
              thelocalfeet, where we share our offbeat experiences and
              discoveries on new places, interacting with the local people,
              knowing their culture and taste local food.
            </p>

            <ReadMoreType
              text="Read our Story"
              url="/about"
              color="#fff"
              colorOnHover="#fff"
              background="#2c2c2c"
              backgroundOnHover="#000"
              top="2rem"
            />

            <div className="featured_img">
              <Image
                layout="responsive"
                objectFit="cover"
                width={870}
                height={700}
                loading="eager"
                src="/assets/collage.png"
                alt="collage"
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>

        <HrTag background="#7cd7cf" bottom="-2rem" top="auto" />
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding: 6rem 4rem 0;
          z-index: 2;
        }

        .section:before {
          position: absolute;
          content: "";
          width: 50%;
          height: 67%;
          bottom: 0;
          left: 0;
          background: radial-gradient(#016ca961, transparent, transparent);
          z-index: -1;
        }

        .section:after {
          position: absolute;
          content: "";
          width: 50%;
          height: 82%;
          bottom: 0;
          right: 0;
          background: radial-gradient(#ff980045, transparent, transparent);
          z-index: -1;
        }

        .main {
          max-width: 730px;
          margin: auto;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #f5f5f5;
          display: inline-block;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
        }
        .tag {
          margin-bottom: 1rem;
          color: #737373;
        }

        .featured_img {
          position: relative;
          width: 100%;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .section {
            padding: 2rem;
            padding-top: 4rem;
          }
          .container {
            padding: 2rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default About;
