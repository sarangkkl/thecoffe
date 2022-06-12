import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../../../config/sanity";

export default function ShopCard({
  d,
  offer,
  background,
  borderDefault,
  borderOnHover,
  offerBackground,
}) {
  return (
    <>
      <Link href={`/store/${d.slug}`}>
        <a className="item">
          {offer && d.offer && d.status && (
            <p className="offer_value">{offer.discount}</p>
          )}

          {!d.status && <p className="not_available">Not available</p>}

          <div className="coverimg">
            <Image
              layout="responsive"
              objectFit="cover"
              width={350}
              height={250}
              loading="eager"
              src={urlFor(d.photo).url()}
              alt={d.name}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          </div>

          <div className="content">
            <p className="name">{d.name}</p>

            {offer && d.offer && d.status ? (
              <div className="flex">
                <p>₹ {d.discountPrice}</p>
                <p className="old">₹ {d.price}</p>
              </div>
            ) : (
              <p style={d.status ? { color: "#000" } : { color: "#b5b5b5" }}>
                ₹ {d.price}
              </p>
            )}
          </div>
        </a>
      </Link>

      <style jsx>{`
        .item {
          position: relative;
          text-align: left;
          max-width: 283px;
          flex: 1 1 220px;
          background: ${background};
          border: 2px solid;
          border-color: ${borderDefault};
          transition: 0.1s ease;
        }
        .item:hover {
          transform: scale(1.05);
          border: 2px solid;
          border-color: ${borderOnHover};
          background: #fff;
        }

        .item:focus {
          transform: scale(1);
          border: 2px solid #000;
        }
        .offer_value,
        .not_available {
          color: #ffffff;
          font-weight: 700;
          margin: 0;
          position: absolute;
          z-index: 1;
          padding: 0.3rem 1rem;
          background: ${offerBackground};
          top: 1rem;
          left: 1rem;
          font-size: 1rem;
        }

        .not_available {
          background: #ca1111;
          font-weight: 400;
          top: 1rem;
          left: auto;
          right: 1rem;
        }
        .flex {
          gap: 1rem;
          justify-content: center;
        }

        .flex p {
          margin: 0;
        }

        .coverimg {
          width: 100%;
          height: 200px;
        }

        .content {
          padding: 1rem 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        p {
          font-size: 1.2rem;
        }
        p:first-letter() {
          text-transform: uppercase;
        }
        .name {
          font-weight: 700;
          font-size: 1.3rem;
        }

        .old {
          color: #aeaeae;
        }

        @media (max-width: 767px) {
          .item:hover {
            transform: scale(1);
            border: 2px solid #e2e2e2;
          }
        }
      `}</style>
    </>
  );
}

ShopCard.defaultProps = {
  background: "#f8f8f8",
  borderDefault: "#e2e2e2",
  borderOnHover: "#000",
  offerBackground: "#000",
};
