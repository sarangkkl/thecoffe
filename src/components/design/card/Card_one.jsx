import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Moment from "react-moment";
import { BiRightArrowAlt } from "react-icons/bi";
import { urlFor } from "../../../../config/sanity";

const Card_one = ({ data, link }) => {
  const [expandData, setExpandData] = useState(false);

  const expand = () => {
    setExpandData(true);
  };

  const shrink = () => {
    setExpandData(false);
  };

  return (
    <>
      <div className="box">
        <div className="coverimg">
          {data?.mainImage && (
            <Image
              layout="responsive"
              objectFit="cover"
              width={350}
              height={250}
              loading="eager"
              src={urlFor(data?.mainImage).url()}
              alt={data.title}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          )}
        </div>

        <div className="data">
          {data.country && <p className="top">{data.country?.name}</p>}
          <p className="title">{data?.title}</p>

          {data.subtitle.length > 90 ? (
            expandData ? (
              <p>
                {data?.subtitle}
                <span
                  style={{
                    fontWeight: 700,
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={shrink}
                >
                  Hide
                </span>
              </p>
            ) : (
              <p>
                {data?.subtitle.slice(0, 75)} ...
                <span
                  style={{
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  onClick={expand}
                >
                  {" "}
                  Show more
                </span>
              </p>
            )
          ) : (
            <p>{data?.subtitle}</p>
          )}

          <div className="interact">
            <p className="date">
              <Moment format="Do MMM[,] YY">{data?.publishedAt}</Moment>
            </p>

            <Link href={link}>
              <a className="icon">
                <BiRightArrowAlt />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .box {
          text-align: left;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          z-index: 1;
          transition: 0.1s ease-in;
          flex: 1 1 235px;
          max-width: 345px;
        }

        .coverimg {
          border-top-left-radius: 40px;
          border-bottom-right-radius: 40px;
          height: 183px;
          overflow: hidden;
          background: black;
        }

        .box:before {
          content: "";
          position: absolute;
          width: 97%;
          height: 22%;
          background: #00000014;
          filter: blur(3px);
          bottom: 0;
          z-index: -1;
          left: -2px;
          transform: skew(352deg, 357deg);
          transition: 0.1s ease;
        }

        .box:hover {
          transform: scale(1.03);
        }

        .box:hover:before {
          transform: skew(360deg, 360deg);
          filter: blur(10px);
          width: 100%;
          height: 100%;
          background: #00000014;
          bottom: -8px;
          left: -8px;
        }

        .data {
          padding: 1.8rem 1.5rem;
          position: relative;
          background: white;
        }
        .data:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 50%;
          top: -52px;
          left: 0;
          background: white;
          z-index: -1;
        }
        .top {
          margin-bottom: 0.4rem;
          color: #7d7d7d;
        }
        p {
          margin: 0;
        }

        p.date {
          color: black;
        }

        .title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .interact {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .icon {
          font-size: 1rem;

          border-radius: 100%;
          background: white;
          color: #000000;
          box-shadow: 0px 0px 4px 0px #00000038;
        }

        .icon:hover {
          box-shadow: 0px 0px 20px 3px #00000038;
        }

        .icon:active {
          transform: scale(0.9);
          box-shadow: 0px 0px 4px 0px #00000099;
        }
        .date {
          font-weight: 500;
          color: #656565;
        }
        @media (max-width: 857px) {
          .data {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .box:hover {
            transform: scale(1);
          }

          .box:hover:before {
            width: 97%;
            height: 22%;
            background: #00000014;
            filter: blur(3px);
            bottom: 0;
            z-index: -1;
            left: -2px;
            transform: skew(352deg, 357deg);
            transition: 0.1s ease;
          }

          .icon {
            font-size: 2rem;
          }

          .icon:hover {
            box-shadow: 0px 0px 4px 0px #00000038;
          }

          .icon:active {
            transform: scale(0.9);
            box-shadow: 0px 0px 4px 0px #00000038;
          }
        }

        @media (max-width: 600px) {
          .data {
            padding: 1.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Card_one;
