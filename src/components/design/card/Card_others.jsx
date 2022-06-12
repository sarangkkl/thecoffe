import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Moment from "react-moment";
import { urlFor } from "../../../../config/sanity";

export default function Card_others({ data, link }) {
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
      <Link href={link} key={data.id}>
        <a className="card">
          <div
            className="img"
            style={!data?.mainImage ? { height: 139 } : { height: "auto" }}
          >
            {data?.mainImage && (
              <Image
                layout="responsive"
                objectFit="cover"
                width={360}
                height={200}
                loading="eager"
                src={urlFor(data.mainImage).url()}
                alt={data.title}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            )}
          </div>
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
          <p className="date">
            <Moment format="Do MMM[,] YY">{data?.publishedAt}</Moment>
          </p>
        </a>
      </Link>

      <style jsx>{`
        .card {
          padding: 1rem;
          flex: 1 1 250px;
          max-width: 320px;
          text-align: left;
          transition: 0.1s ease;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card:focus {
          transform: scale(1);
        }

        .img {
          margin-bottom: 1rem;
          overflow: hidden;
          background: black;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .date {
          font-weight: 700;
          color: #bebebe;
        }

        @media (max-width: 767px) {
          .card {
            background: #f9f9f9;
          }

          .card:hover {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
