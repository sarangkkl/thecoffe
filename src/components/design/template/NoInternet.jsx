import Head from "next/head";
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";

const NoInternet = () => {
  return (
    <>
      <Head>
        <title>No internet, Check your connection.</title>
      </Head>
      <div className="section">
        <div className="main">
          <div className="icon">
            <MdSignalWifiConnectedNoInternet0 />
          </div>
          <p className="title">No Internet !</p>
          <p>Check your connection</p>
        </div>
      </div>

      <style jsx>{`
        .section {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: #000000eb;
          width: 100vw;
          height: 100vh;
          display: grid;
          place-items: center;
          text-align: center;
        }
        p {
          color: #4e4e4e;
          font-size: 1rem;
          margin: 0;
        }
        .title {
          color: white;
          font-size: 1.3rem;
        }
        .icon {
          font-size: 3rem;
          display: grid;
          place-items: center;
          color: red;

          margin-bottom: 0.7rem;
          animation: transform 2.3s linear infinite;
        }
        @keyframes transform {
          0%,
          100% {
            opacity: 0;
          }
          50%,
          60% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default NoInternet;
