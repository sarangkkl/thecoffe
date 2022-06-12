import Image from "next/image";

import HrTag from "../../design/HrTag";
import AboutFollow from "./AboutFollow";
import MainSocialLink from "./MainSocialLink";

export default function HomeDetails() {
  return (
    <>
      <div className="details an_fade-1">
        <div className="profile_pic an_fade-1">
          <Image
            layout="responsive"
            objectFit="cover"
            width={870}
            height={900}
            loading="eager"
            src="/assets/Profile_pic.jpg"
            alt="Who we are"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className=" decoration">
          <Image
            layout="responsive"
            objectFit="cover"
            width={870}
            height={900}
            loading="eager"
            src="/assets/decorations/decorator_img.png"
            alt="decoration"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <h1>thelocalfeet</h1>
        <p>Our story</p>

        <MainSocialLink />

        <p className="description">
          <span>Mayuri</span> and <span>Shubha</span>, the{" "}
          <span>Storyteller-Photographer</span> duo have been traveling places
          around the world, since tying the knot in 2014: 2 continents, 4
          countries, and countless cities. Explore with us to see this beautiful
          mama earth !
        </p>

        <AboutFollow />

        <div className="cover_photo">
          <Image
            layout="responsive"
            objectFit="cover"
            width={870}
            height={650}
            loading="eager"
            src="/assets/about-frame.jpg"
            alt="collage"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <HrTag background="#e1e1e1" bottom="-1.35rem" top="auto" />
      </div>

      <style jsx>{`
        h1 {
          letter-spacing: 0;
        }
        .details {
          position: relative;
          background: #ffffff;
          box-shadow: 0px -20px 11px 0px #00000014;
          padding: 3rem;
          z-index: 1;

          border-radius: 20px 20px 0 0;
          z-index: 1;
          border-bottom: 1px solid #e1e1e1;
        }

        .profile_pic {
          position: relative;
          width: 170px;
          height: 170px;
          border: 7px solid white;
          box-shadow: 0px 8px 20px 0px #00000021;
          border-radius: 100%;
          margin: -8rem auto 2rem;
          overflow: hidden;
        }

        .decoration {
          z-index: -1;
          position: absolute;
          width: 100%;
          max-width: 650px;
          top: 0%;
          left: 50%;
          transform: translateX(-50%) rotate(-25deg);
          opacity: 0.08;
        }

        p:first-child() {
          font-size: 1.3rem;
          color: #8d8d8d;
        }
        .description {
          max-width: 450px;
          margin: 2rem auto;
        }

        .description span {
          font-weight: 600;
        }

        .description span:last-of-type {
          color: #ff9800;
        }

        .cover_photo {
          position: relative;
          margin: 5rem auto 4rem;
          max-width: 693px;
          height: 500px;
          transform: rotate(2deg);
          border: 0.7rem solid white;
          box-shadow: 7px 6px 20px #00000033;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .cover_photo {
            height: auto;
            transform: rotate(0deg);
          }

          .profile_pic {
            width: 150px;
            height: 150px;
            margin: -9rem auto 2rem;
          }
        }
      `}</style>
    </>
  );
}
