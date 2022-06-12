import Image from "next/image";
import HrTag from "../design/HrTag";

const AboutTravel = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <h2>What interests us About Travel</h2>
          <p>
            When traveling, we love to stay in experimental accommodations. We
            like slow travel based on a local experiment we do, embracing the
            local culture, lifestyle, language, and food, exploring offbeat
            trails, and stay there as long as we want. We believe in the
            responsible travel concept because this idea has an impact on
            eco-tourism. Our goal is to make a deeper connection with the places
            we visit by contributing to the local economy and make budget
            travel. We always prefer to stay at local homestays, eat local food,
            and avoid using plastic commodities, try to drink water from natural
            resources, and use less water for other purposes. We communicate and
            build community relations with the local people and suggest or
            encourage them on sustainable travel ideas or innovative business
            ideas likely to promote their local products/ handmade crafts. We
            firmly believe that this could be the way how new travelers will
            understand and adopt sustainable travel philosophy and educate
            others.
          </p>

          <div className="featured_img">
            <Image
              layout="responsive"
              objectFit="contain"
              width={870}
              height={600}
              loading="eager"
              src="/assets/about-two.jpg"
              alt="collage"
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </div>

        <HrTag background="#dfdfdf" bottom="-2rem" top="auto" />
      </div>

      <style jsx>{`
        .container:before {
          position: absolute;
          content: "";
          width: 43%;
          height: 80%;
          top: 0;
          right: 0;
          background: radial-gradient(#2196f35c, transparent, transparent);
          z-index: -1;
        }

        .container:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 38%;
          bottom: -50px;
          left: 0;
          background: radial-gradient(#ff980045, transparent, transparent);
          z-index: -1;
        }

        .main {
          max-width: 925px;
          padding: 4rem 2rem;
          margin: auto;
          text-align: left;
        }

        h2 {
          position: relative;
          font-size: 2rem;
          letter-spacing: 0;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        h2:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 8%;
          height: 1px;
          background: #6b6b6b;
        }

        p {
          line-height: 1.5rem;
        }

        .featured_img {
          margin: 2rem 0 0;
        }
        @media (max-width: 767px) {
          .main {
            padding: 2rem;
          }
        }

        @media (max-width: 600px) {
          .main {
            padding: 2rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default AboutTravel;
