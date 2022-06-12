import { urlFor } from "../../../../config/sanity";

const Preview = ({ prv }) => {
  return (
    <>
      <div className="preview">
        <p>Additional images</p>

        <div className="Preview_image">
          {prv.preview.map((i, k) => (
            <div key={k} className="box">
              <img
                onDragStart={(e) => {
                  e.preventDefault();
                }}
                src={urlFor(i).url()}
                alt={prv.name}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .preview {
          position: relative;
          text-align: center;
          padding: 3rem;
          margin-top: 4rem;
          background: #f2f2f2;
          border-radius: 20px;
        }

        p {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.15rem;
          padding: 0.2rem 1rem;
          background: white;
          display: inline-block;
        }

        .Preview_image {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .box {
          max-width: 270px;
          height: 350px;
          border: 5px solid white;
          flex: 1 1 200px;
          border-radius: 20px;
          overflow: hidden;
        }
        @media (max-width: 967px) {
          .box {
            height: 250px;
          }
        }

        @media (max-width: 600px) {
          .preview {
            padding: 0;
            background: #fff;
          }

          .box {
            height: 150px;
            flex: 1 1 147px;
          }

          p {
            background: #f2f2f2;
          }
        }
      `}</style>
    </>
  );
};

export default Preview;
