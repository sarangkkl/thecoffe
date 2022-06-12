import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Moment from "react-moment";
import { urlFor } from "../../../../config/sanity";

export default function Card_two({ i, link }) {
  const [expandData, setExpandData] = useState(false);

  const expand = (e) => {
    e.preventDefault();
    setExpandData(true);
  };

  const shrink = (e) => {
    e.preventDefault();
    setExpandData(false);
  };

  return (
    <>
      <Link href={link} key={i.id}>
        <a className="box">
          <div className="background">
            {i?.mainImage && (
              <Image
                priority
                layout="fill"
                objectFit="cover"
                loading="eager"
                src={urlFor(i.mainImage).url()}
                alt={i.title}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            )}
          </div>

          <div className="content flex">
            {i.country && <p className="country">{i.country?.name}</p>}

            <p className="title">{i?.title}</p>

            {/* {i.subtitle.length > 90 ? (
              expandData ? (
                <p>
                  {i?.subtitle}
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
                  {i?.subtitle.slice(0, 75)} ...
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
              <p>{i?.subtitle}</p>
            )} */}

            <p>
              <Moment format="Do MMM[,] YY">{i?.publishedAt}</Moment>
            </p>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .box {
          flex: 1 1 225px;
          position: relative;
          min-height: 330px;
          border-radius: 10px;
          overflow: hidden;
          text-align: left;
        }
        .background {
          transition: 0.3s ease;
          background: black;
        }
        .box:hover .background {
          transform: scale(1.03);
        }

        .box:hover {
          transform: scale(1.03);
        }

        .content {
          padding: 1.5rem;
          color: white;
          background: linear-gradient(45deg, #000000, #2929297d, transparent);
          height: 100%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        }

        p {
          font-weight: 300;
          max-width: 450px;
          line-height: 1.45rem;
        }

        .country {
          padding: 0.25rem 0.7rem 0.2rem;
          background: #ffffff36;
          color: white;
          border-radius: 5px;
          position: absolute;
          top: 1rem;
        }

        p:last-child() {
          margin: 0;
          color: white;
        }

        .title {
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.6rem;
        }

        @media (max-width: 768px) {
          .box:hover .background,
          .box:hover {
            transform: scale(1);
          }

          .box {
            height: auto;
          }

          p {
            max-width: 209px;
          }
        }
      `}</style>
    </>
  );
}
