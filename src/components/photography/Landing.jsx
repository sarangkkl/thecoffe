import Image from "next/image";
import { SiPhotobucket } from "react-icons/si";

const Landing = () => {
  return (
    <>
      <div className="section">
        <div className="background">
          <Image
            layout="fill"
            objectFit="cover"
            loading="eager"
            objectPosition="bottom"
            className="parallex an_fade-1"
            src="/assets/photography-landing.jpeg"
            alt="thelocalfeet_photography_background"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="container flex">
          <h1 className="an_fade-1">Photography</h1>
          <p className="an_fade-2">Can be a speaker of an introvert Soul</p>
          <div className="icon disabled an_fade-3">
            <SiPhotobucket />
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
          background: #101010ba;
        }

        .container {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        p {
          color: #afafaf;
          margin: 0;
        }

        h1 {
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: 0.7rem;
        }

        .icon {
          color: #9d9d9d;
          position: absolute;
          bottom: 2rem;
          font-size: 1.5rem;
          cursor: initial;
        }

        @media (max-width: 768px) {
          .section {
            height: 100vh;
            padding: 2rem;
          }
          .container {
            padding: 2rem 1rem;
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
