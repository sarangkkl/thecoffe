import Image from "next/image";
import Moment from "react-moment";
import { urlFor } from "../../../../config/sanity";
import HrTag from "../../design/HrTag";

function BlogPreview({ blog }) {
  return (
    <>
      {" "}
      <div className="preview">
        <div
          className="background"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1320' height='390' preserveAspectRatio='none' viewBox='0 0 1320 390'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1622%26quot%3b)' fill='none'%3e%3crect width='1320' height='390' x='0' y='0' fill='url(%23SvgjsLinearGradient1623)'%3e%3c/rect%3e%3cpath d='M1320 0L1213.85 0L1320 168.13z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1213.85 0L1320 168.13L1320 181.06L677.06 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M677.0600000000001 0L1320 181.06L1320 243.62L290.4700000000001 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M290.47 0L1320 243.62L1320 280.01L198.39000000000004 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 390L506.61 390L0 372.07z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 372.07L506.61 390L665 390L0 371.74z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 371.74L665 390L681.96 390L0 321.17z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 321.17L681.96 390L1041.3 390L0 197.83z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1622'%3e%3crect width='1320' height='390' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1623'%3e%3cstop stop-color='rgba(235%2c 235%2c 235%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
          }}
        ></div>

        <div className="main flex">
          <div className="preview_info">
            <p className="tag">You are Reading</p>
            <h3>{blog?.title}</h3>
            <p>{blog?.subtitle}</p>

            {blog?.publishedAt && (
              <p
                style={{
                  fontWeight: "700",
                  color: "gray",
                }}
              >
                <Moment format="MMM Do YYYY">{blog.publishedAt}</Moment>
              </p>
            )}
          </div>

          <div className="preview_image">
            {blog?.mainImage && (
              <Image
                layout="fill"
                objectFit="cover"
                loading="eager"
                src={urlFor(blog?.mainImage).url()}
                alt={blog?.title}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            )}
          </div>
        </div>

        <HrTag background="#d6d6d6" bottom="-2rem" top="auto" />
      </div>
      <style jsx>{`
        .preview {
          padding: 1rem 2rem;
          position: relative;
          margin-bottom: 0.2rem;
          z-index: 1;
        }

        .tag {
          font-size: 1.5rem;
          color: #848484;
        }

        .main {
          position: relative;
          gap: 2rem;
          justify-content: center;
        }

        .preview:before {
          content: "";
          position: absolute;
          width: 34px;
          height: 50px;
          top: 0;
          left: 10px;
          clip-path: polygon(100% 100%, 50% 66%, 0 100%, 0 0, 100% 0);
          background: #d6d6d6;
        }

        .preview h3 {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
        .preview p {
          font-size: 1rem;
          padding: 0;
          background: transparent;
        }

        .preview_info {
          max-width: 328px;
        }
        .preview_image {
          background: black;
          width: 315px;
          overflow: hidden;
          transform: translateY(-47px) rotate(3deg);
          height: 252px;
          box-shadow: 4px 4px 20px 0px #00000045;
          border: 0.7rem solid white;
        }

        @media only screen and (max-width: 768px) {
          .preview {
            padding: 3rem;
          }
          .flex {
            flex-direction: column;
            text-align: center;
          }
          .preview_image {
            position: relative;
            transform: rotate(0);
            width: 100%;
            height: 225px;
          }
          .preview:before {
            display: none;
          }
        }

        @media only screen and (max-width: 600px) {
          .preview {
            padding: 3rem 0;
          }

          .background {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default BlogPreview;
