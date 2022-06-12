import Head from "next/head";

const FallbackLoading = () => {
  return (
    <>
      <Head>
        <title>Loading please wait</title>
      </Head>
      <div className="section">
        <div className="main">
          <p>Loading</p>
          <div className="circle"></div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100vw;
          height: 100vh;
          display: grid;
          background: #f0f0f0;
          place-items: center;
        }

        .main {
          display: flex;
          align-items: center;
        }
        p {
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0;
        }

        .circle {
          position: relative;
          width: 25px;
          height: 25px;
          border: 3px solid black;
          border-radius: 100%;
          margin-left: 1rem;
          border-right: 3px solid transparent;
          animation: transform 1s linear infinite;
        }
        @keyframes transform {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default FallbackLoading;
