import Image from "next/image";
import { urlFor } from "../../../config/sanity";

const Countries = ({ data }) => {
  return (
    <>
      <div className="country">
        <div className="background">
          <Image
            priority
            layout="responsive"
            objectFit="cover"
            width={550}
            height={380}
            loading="eager"
            src="/assets/decorations/world-map.png"
            alt="background_image"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <h2>Destinations</h2>
        <div className="flex">
          {data.map((i) => (
            <div className="circle" key={i.id}>
              <div className="image">
                <img
                  src={urlFor(i.coverImage).url()}
                  alt={i.name}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .country {
          position: relative;
          text-align: center;
          /* padding: 2rem; */
          /* background: #f6f6f6; */
        }

        .background {
          max-width: 392px;
          left: 50%;
          top: -2rem;
          transform: translateX(-50%);
          opacity: 0.2;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 2rem;
          background: #ffffff99;
          display: inline-block;
        }

        p {
          margin: 1rem 0;
          font-weight: 700;
          margin: 1rem 0;
          font-weight: 700;
          text-align: center;
        }
        .flex {
          position: relative;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #dadada;
        }
        .circle {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          flex: 1 1 118px;
          max-width: 168px;
          transform: scale(1);
        }

        .image {
          width: 120px;
          height: 120px;
          border-radius: 100%;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 2px 2px 20px #00000057;
        }

        /* 

        @media (max-width: 768px) {
          .box:hover {
            transform: scale(1);
          }

          .section {
            padding-top: 4rem;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 0;
          }
          .box {
            height: 150px;
            width: 85px;
            flex: 1 1 120px;
            padding: 0;
            border-radius: 53px;

            align-items: center;
          }
        } */
      `}</style>
    </>
  );
};

export default Countries;
