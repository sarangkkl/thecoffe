import Image from "next/image";
import Home from "./components/Home";

const Landing = () => {
  return (
    <>
      <div className="section">
        <div className="background an_fade-2">
          <Image
            layout="fill"
            objectFit="cover"
            loading="eager"
            objectPosition="left"
            className="parallex an_fade-2"
            src="/assets/about-landing.jpg"
            alt="thelocalfeet_aboutus_background"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <Home />
      </div>

      <style jsx>{`
        .section {
          padding-bottom: 2rem;
        }
        .background {
          height: 540px;
        }

        .background:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #1e215936;
          z-index: 1;
          inset: 0;
        }

        @media (max-width: 768px) {
          .section {
            padding: 2rem 0;
          }
        }

        @media (max-width: 600px) {
          .background {
            height: 433px;
          }
        }
      `}</style>
    </>
  );
};

export default Landing;
