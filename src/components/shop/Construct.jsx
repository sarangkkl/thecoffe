import { useState } from "react";
import { urlFor } from "../../../config/sanity";

import Model from "./components/Model";
import Details from "./components/Details";

export default function Construct({ data, offer, others, links, currPage }) {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="section an_fade-2">
        <Model open={open} close={closePopUp} data={data} />

        <div className="background desktop">
          {data.coverPhoto ? (
            <img
              className="parallex"
              onDragStart={(e) => {
                e.preventDefault();
              }}
              src={urlFor(data.coverPhoto).url()}
              alt={data.name}
            />
          ) : (
            <img
              className="parallex"
              onDragStart={(e) => {
                e.preventDefault();
              }}
              src={urlFor(data.photo).url()}
              alt={data.name}
            />
          )}
        </div>

        <div className="container">
          <div className="landing">
            {offer && data.offer && data.status ? (
              <p>{offer.specialMsg}</p>
            ) : (
              <>
                <p>{data.name}</p>
                {data?.caption && <p>{data.caption}</p>}
              </>
            )}
          </div>

          <div className="details">
            <div className="background mob">
              {data.coverPhoto ? (
                <img
                  className="parallex"
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                  src={urlFor(data.coverPhoto).url()}
                  alt={data.name}
                />
              ) : (
                <img
                  className="parallex"
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                  src={urlFor(data.photo).url()}
                  alt={data.name}
                />
              )}
            </div>

            <Details
              data={data}
              openPopup={openPopup}
              offer={offer}
              otherProducts={others}
              links={links}
              currPage={currPage}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .landing {
          padding: 3rem;
          text-align: center;
          color: white;
        }
        .landing p {
          max-width: 490px;
          margin: 0 auto;
        }
        .landing p:first-child() {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.3rem;
        }

        .background {
          height: 500px;
        }

        img {
          object-position: top;
        }

        .background:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #00000078;
          z-index: 1;
          inset: 0;
        }

        .mob {
          opacity: 0;
          pointer-events: none;
        }

        .details {
          position: relative;
          background: #ffffff;
          box-shadow: 0px 7px 20px 7px #00000014;
          padding: 3rem;
          border-radius: 20px;
        }

        p:first-letter() {
          text-transform: uppercase;
        }

        @media (max-width: 967px) {
          .section {
            padding: 1rem;
          }
        }

        @media (max-width: 867px) {
          .details {
            padding: 2rem;
          }
        }

        @media (max-width: 767px) {
          .section {
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 0;
          }

          .mob {
            opacity: 1;
            pointer-events: visible;
            height: auto;
          }

          .desktop,
          .landing {
            display: none;
          }

          .details {
            padding-top: 14rem;
            background: transparent;
          }
        }
      `}</style>
    </>
  );
}
