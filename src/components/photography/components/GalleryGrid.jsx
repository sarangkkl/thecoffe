import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { urlFor } from "../../../../config/sanity";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function GalleryGrid({ data, setCaption, setSelected }) {
  return (
    <>
      <div className="gallery">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 1024: 3, 1260: 4 }}
        >
          <Masonry gutter="1rem">
            {data.map((i) => (
              <div
                className="box"
                key={i.id}
                onClick={() => {
                  setSelected(urlFor(i.photo).url());
                  setCaption(i.caption);
                }}
              >
                <img src={urlFor(i.photo).url()} alt={i.caption} />

                <div className="black">
                  {i?.Ilink && (
                    <a className="icon" href={i?.Ilink} target="blank">
                      <AiFillInstagram />
                    </a>
                  )}
                  {i?.Flink && (
                    <a className="icon" href={i?.Flink} target="blank">
                      <IoLogoFacebook />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <style jsx>{`
        .gallery {
          position: relative;
          padding: 0.1rem;
        }

        .box {
          position: relative;
          overflow: hidden;
          width: 100%;
          cursor: pointer;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease !important;
        }
        .box:hover img {
          transform: scale(1.03);
        }

        .black {
          width: 100%;
          height: 100%;
          position: absolute;
          padding: 1rem;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          opacity: 0;
          transition: all 0.6s ease;
          gap: 1rem;
        }
        .box:hover .black {
          opacity: 1;
        }

        .icon {
          color: white;
          font-size: 2rem;
          padding: 0;
        }

        .icon:last-child() {
          font-size: 1.7rem;
          margin-bottom: 0.15rem;
        }

        .icon:hover {
          background: transparent;
        }

        @media (max-width: 768px) {
          .black {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
