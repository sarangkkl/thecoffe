import Image from "next/image";
import Moment from "react-moment";
import { IoMdArrowDropdown } from "react-icons/io";

const Landing = () => {
  return (
    <>
      <div className="section">
        <div className="background">
          <Image
            layout="fill"
            objectFit="cover"
            loading="eager"
            objectPosition="50% 36%"
            className="parallex an_fade-1"
            src="/assets/home-landing.webp"
            alt="thelocalfeet_home_background"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="container flex">
          <p className="an_fade-3">Welcome</p>

          <h1 className="an_fade-2">
            Experience the journey of <span>thelocalfeet</span>
          </h1>

          <div className="icon disabled an_fade-4">
            <IoMdArrowDropdown />
          </div>

          <p className="date an_fade-2">
            <Moment format="MMMM DD[, ]YYYY">{new Date()}</Moment>
          </p>
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
          background: #01324838;
        }

        p {
          color: #fff;
        }

        h1 {
          color: #fff;
          line-height: 2rem;
          max-width: 756px;
        }

        span {
          display: block;
          font-family: "Source Serif Pro";
        }
        .date {
          margin: 0;
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          color: white;
        }

        .icon {
          color: white;
          border: 1px solid #ffffffa1;
          margin-top: 1rem;
          border-radius: 100%;
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

        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
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
          .date {
            bottom: 0;
            right: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Landing;
