import Image from "next/image";
import { MdOutlineExplore } from "react-icons/md";

const Landing = () => {
  return (
    <>
      <div className="section">
        <div className="background">
          {/* <img
            className="parallex"
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/explore-landing.jpeg"
            alt="thelocalfeet_explore_background"
          /> */}

          <Image
            layout="fill"
            objectFit="cover"
            loading="eager"
            objectPosition="0 58%"
            className="parallex an_fade-1"
            src="/assets/explore-landing.jpeg"
            alt="thelocalfeet_explore_background"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="container flex">
          <h1 className="an_fade-1">Explore</h1>
          <p className="an_fade-2">Lets make your best trip ever</p>

          <div className="icon disabled an_fade-3">
            <MdOutlineExplore />
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: 768px;
          text-align: center;
          padding: 0 4rem;
        }

        .section:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          z-index: -1;
          background: #1e406d52;
        }

        .container {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* img {
          object-position: 0 58%;
        } */

        p {
          color: #fff;
          margin: 0;
        }

        h1 {
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: 0.7rem;
          max-width: 179px;
        }

        .icon {
          color: #fff;
          position: absolute;
          bottom: 2rem;
          font-size: 1.5rem;
          cursor: initial;
        }

        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }

          img {
            object-position: center;
          }
          .section {
            height: 100vh;
            padding: 2rem;
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

export default Landing;
