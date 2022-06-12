import Image from "next/image";
import ReadMoreType from "../buttons/ReadMoreType";

const PhotographyTemplate = ({
  top,
  bottom,
  img_url,
  caption_one,
  caption_two,
  img_position,
  img_position_mob,
}) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="background">
            {/* <img
              src={img_url}
              alt={caption_one}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            /> */}

            <Image
              layout="fill"
              objectFit="cover"
              loading="eager"
              className="cover_image"
              src={img_url}
              alt={caption_one}
              objectPosition={img_position}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          </div>
          <div className="content">
            <p>{caption_one}</p>

            <p>{caption_two}</p>

            <ReadMoreType
              text="View gallery"
              url="/photography/gallery"
              color="#fff"
              colorOnHover="#fff"
              background=" #ffffff3d"
              backgroundOnHover="#ffffff21"
              top="1rem"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 2rem;
        }
        .container {
          height: 480px;
          margin-top: ${top};
          margin-bottom: ${bottom};
          overflow: hidden;

          display: flex;
          align-items: center;
        }

        .container:before {
          content: "";
          z-index: -1;
          width: 100%;
          height: 100%;
          background: #00000082;
          inset: 0;
          position: absolute;
        }

        .content {
          max-width: 531px;
          padding: 2rem;
          text-align: center;
          margin: auto;
        }

        p:first-child() {
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
        }
        p {
          color: #dfdfdf;
        }
        .background {
          transition: transform 5.5s ease-in-out;
        }

        .container:hover .background {
          transform: scale(1.15);
        }

        /* img {
          object-position: ${img_position};
        } */

        @media (max-width: 768px) {
          .section {
            padding: 1rem;
          }
          .container:hover .background {
            transform: scale(1);
          }

          .content {
            padding: 1rem 0;
            text-align: left;
            margin: auto auto 0;
          }
        }

        @media (max-width: 600px) {
          img {
            object-position: ${img_position_mob};
          }
        }
      `}</style>
    </>
  );
};

PhotographyTemplate.defaultProps = {
  img_position: "center",
  img_position_mob: "center",
  top: 0,
  bottom: 0,
};

export default PhotographyTemplate;
