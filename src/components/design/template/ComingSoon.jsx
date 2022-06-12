import Image from "next/image";

const ComingSoon = ({ asset }) => {
  return (
    <>
      <div className="section">
        <div className="background">
          {/* <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src={asset}
            alt="Coming_soon"
          /> */}

          <Image
            layout="fill"
            objectFit="cover"
            loading="eager"
            className="an_fade-1"
            src={asset}
            alt="Coming_soon"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="container flex">
          <h1 className="an_fade-2">Coming soon</h1>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: 100vh;
          text-align: center;
        }

        h1 {
          color: #fff;
          letter-spacing: 0.2rem;
          padding: 0.5rem 2rem;
          border: 1px solid #9d9d9d;
        }

        .section:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          z-index: -1;
          background: #3f3f3f5c;
        }

        .flex {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default ComingSoon;
