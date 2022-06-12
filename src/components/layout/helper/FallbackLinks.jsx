import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export default function FallbackLinks({ links, currPage, position }) {
  return (
    <>
      <div className="flex fallback">
        {links.map((l, i) => (
          <Link href={l.url} key={i}>
            <a className="flex link">
              <p>{l.name}</p>
              <div className="icon disabled">
                <IoMdArrowDropright />
              </div>
            </a>
          </Link>
        ))}

        <p>{currPage}</p>
      </div>

      <style jsx>{`
        .fallback {
          padding: 0.3rem;
        }

        .flex {
          gap: 0.5rem;
          align-items: flex-start;
          justify-content: ${position};
        }

        .icon {
          padding: 0;
          font-size: 1rem;
          margin-bottom: 0.1rem;
          color: #b6b6b6;
        }

        p {
          margin: 0;
          text-align: left;
        }

        a:hover p {
          font-weight: 600;
        }

        p:last-child() {
          font-weight: 700;
        }

        @media (max-width: 768px) {
          a:hover p {
            font-weight: initial;
          }
        }
      `}</style>
    </>
  );
}

FallbackLinks.defaultProps = {
  position: "left",
};
