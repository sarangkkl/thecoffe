import { urlFor } from "../../../config/sanity";
import ReadMoreType from "../design/buttons/ReadMoreType";

const Gallery = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h2>Our Latest shots</h2>

          <div className="gallery">
            {data.map((d) => (
              <div className="img" key={d.id}>
                <img
                  className="disabled"
                  src={urlFor(d.photo).url()}
                  alt={d.caption}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            ))}
          </div>

          <ReadMoreType
            text="Explore more"
            url="/photography/gallery"
            color="#fff"
            colorOnHover="#fff"
            background="#009688"
            backgroundOnHover="#00685e"
            top="1rem"
          />
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding: 6rem 2rem;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1rem;
          background: #54d9cc57;
          display: inline-block;
        }

        .gallery {
          padding: 2rem 0;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }

        .img {
          border-radius: 20px;
          height: 234px;
          max-width: 188px;
          flex: 1 1 105px;
          transition: 0.1s ease !important;
          pointer-events: visible;
          overflow: hidden;
        }
        .img:hover {
          transform: scale(1.2);
          z-index: 2;
        }
        @media (max-width: 780px) {
          .container {
            padding: 0;
          }
        }
        @media (max-width: 767px) {
          .img {
            height: 150px;
          }

          .img:hover {
            transform: scale(1);
          }
        }

        @media (max-width: 600px) {
          .img {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;
