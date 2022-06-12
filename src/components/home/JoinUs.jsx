import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

const feed = [
  {
    url: "/assets/404.jpeg",
    class: "img_1",
  },
  {
    url: "/assets/collage-one.jpg",
    class: "img_2",
  },
  {
    url: "/assets/collage-two.webp",
    class: "img_3",
  },
  {
    url: "/assets/explore-landing.jpeg",
    class: "img_4",
  },
];

export default function JoinUs() {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">Follow us</p>
          <div className="background flex">
            {feed.map((d, i) => (
              <img
                className={d.class}
                key={i}
                src={d.url}
                alt="instagram feed"
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            ))}
          </div>

          <div className="main">
            <h2>Join Us On Instagram</h2>
            <p>
              Explore with us to see this beautiful mama earth !{" "}
              <span>thelocalfeet | Travel | Street</span>
            </p>

            <Link href="https://www.instagram.com/thelocalfeet/">
              <a className="flex btn" target="blank">
                <div className="icon">
                  <FiInstagram />
                </div>
                <p>Follow us</p>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: 620px;
          padding: 6rem 2rem;
        }

        .tag {
          margin: 0;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          max-width: 25%;
          height: 100%;
          object-position: center;
        }

        .img_3 {
          object-position: 20% 50%;
        }
        .main {
          position: relative;
          text-align: center;
          margin: auto;
          padding: 2.3rem;
          background: #ffffffc9;
          backdrop-filter: blur(2px);
          max-width: 455px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: auto;
        }

        .main:after {
          content: "";
          position: absolute;
          inset: -9px;
          z-index: -1;
          border: 2px solid white;
        }

        p {
          font-weight: 600;
          margin-bottom: 2rem;
        }

        span {
          display: block;
          font-weight: 400;
        }

        .icon {
          font-size: 1.3rem;
          padding: 0;
        }

        .flex {
          justify-content: center;
          gap: 0.5rem;
        }

        .btn {
          background: black;
          color: white;
        }

        .btn p {
          margin: 0;
          padding-top: 0.05rem;
        }

        .btn:active {
          transform: scale(0.9);
        }
        @media (max-width: 768px) {
          .section {
            padding: 4rem 0;
            height: auto;
          }
          .tag {
            opacity: 1;
            color: white;
            font-weight: 100;
            font-size: 3rem;
            top: 15%;
          }
          .container {
            flex-direction: column;
          }

          .main {
            backdrop-filter: blur(0px);
          }

          .background {
            position: relative;
            margin-bottom: 3rem;
          }

          img {
            height: 200px;
          }
        }
        @media (max-width: 600px) {
          .section {
            padding: 5rem 0 3rem;
          }

          .container {
            padding: 0;
          }

          .main {
            background: #eaeaeac9;
            padding: 2rem;
          }

          .main:after {
            border: 2px solid #eeeeee;
          }
        }
      `}</style>
    </>
  );
}
