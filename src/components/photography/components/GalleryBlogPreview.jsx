import Link from "next/link";
import { useRouter } from "next/router";
import { BiRightArrowAlt } from "react-icons/bi";
import { urlFor } from "../../../../config/sanity";

export default function GalleryBlogPreview({ data }) {
  const router = useRouter();

  return (
    <>
      <div className="flex">
        {data.slice(0, 6).map((i) => (
          <Link key={i.id} href={i.slug}>
            <div className="circle">
              <div className="image">
                <img
                  src={urlFor(i.mainImage).url()}
                  alt={i.title}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
              <p>{i.title}</p>
            </div>
          </Link>
        ))}

        {data.length > 6 && (
          <div
            className="icon next"
            onClick={() => router.push("/photography#album")}
          >
            <BiRightArrowAlt />
          </div>
        )}
      </div>

      <style jsx>{`
        .flex {
          position: relative;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #dadada;
        }
        .circle {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: pointer;
          flex: 1 1 118px;
          max-width: 168px;
          transform: scale(1);
        }

        .circle:hover {
          transform: scale(1.05);
        }

        .image {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          overflow: hidden;
          border: 4px solid transparent;
        }

        .circle:hover .image {
          box-shadow: 2px 2px 20px #00000057;
        }

        p {
          margin: 1rem 0;
          font-weight: 700;
          font-weight: 700;
          max-width: 150px;
          text-align: center;
        }

        .next {
          background: #ffce86;
          color: white;
          border-radius: 100%;
          font-size: 1.3rem;
          position: absolute;
          right: 0;
          top: 50%;
          cursor: pointer;
          transform: translateY(-100%);
        }

        .next:active {
          transform: translateY(-100%) scale(0.9);
        }

        @media (max-width: 600px) {
          .flex {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
