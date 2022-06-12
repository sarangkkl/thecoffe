import HomeDetails from "./HomeDetails";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="landing an_fade-3">
          <h1>Read our Story</h1>
        </div>
        <HomeDetails />
      </div>

      <style jsx>{`
        h1 {
          letter-spacing: 0;
        }
        .container {
          text-align: center;
        }
        .landing {
          position: relative;
          padding: 3rem;
          text-align: center;
          color: white;
          height: 270px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .landing:before {
          content: "About us";
          position: absolute;
          color: #ffffff36;
          font-size: 13rem;
          font-weight: 700;
          line-height: 1rem;
          bottom: 0;
        }

        @media (max-width: 1087px) {
          .landing:before {
            top: 50%;
            transform: translateY(-50%);
            font-size: 6rem;
            line-height: 9.5rem;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 2rem 0;
          }

          .landing {
            padding: 3rem 2rem;
          }
        }
      `}</style>
    </>
  );
}
