import Image from "next/image";

const WhyUs = () => {
  return (
    <>
      <div className="container">
        <div className="background">
          <Image
            layout="fill"
            objectFit="cover"
            loading="eager"
            objectPosition="50% 64%"
            src="/assets/about.jpeg"
            alt="collage"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="main">
          <h2>Why thelocalfeet</h2>
          <p>
            Being a tourist is fine, vacations are great. But, have you ever
            thought to experience a place as local people do? What if you want
            to shed off some limitations of monopoly traveling and turn yourself
            into an explorer to absorb the culture, food, activities of the
            hidden local trail in any corner of the world?
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          text-align: left;
          height: 590px;
          z-index: 1;
          display: flex;
          overflow: hidden;
        }

        .container:before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;

          background: linear-gradient(
            45deg,
            #000000b8,
            #00000078,
            transparent,
            #ff9e43a6
          );
          inset: 0;
          z-index: -1;
        }

        .background {
          transition: transform 5.5s ease-in-out;
        }

        .container:hover .background {
          transform: scale(1.15);
        }

        .main {
          max-width: 805px;
          padding: 3rem;
          margin: auto 0 0;
          text-align: left;
          color: white;
        }

        h2 {
          position: relative;
          font-size: 2rem;
          letter-spacing: 0;
          margin-bottom: 1rem;
          background: white;
          color: black;
          display: inline-block;
          padding: 0.3rem 2rem;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
          max-width: 492px;
        }

        @media (max-width: 867px) {
          .main {
            padding: 2rem;
            max-width: 500px;
          }
        }

        @media (max-width: 767px) {
          .container:hover .background {
            transform: scale(1);
          }
        }

        @media (max-width: 600px) {
          .main {
            padding: 0;
            max-width: 350px;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default WhyUs;
