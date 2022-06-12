import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const ReadMoreType = ({
  text,
  url,
  color,
  colorOnHover,
  background,
  backgroundOnHover,
  top,
  bottom,
}) => {
  return (
    <>
      <Link href={url}>
        <a className="btn flex">
          <p>{text}</p>
          <div className="icon disabled">
            <MdKeyboardArrowRight />
          </div>
        </a>
      </Link>

      <style jsx>{`
        .btn {
          background: ${background};
          color: ${color};
          display: inline-flex;
          margin-top: ${top};
          margin-bottom: ${bottom};
        }

        .btn:before {
          content: "";
          position: absolute;
          z-index: -2;
          opacity: 0.5;

          width: 100%;
          height: 100%;
          top: 50%;
          left: 50%;

          border-radius: 40px;
          background: ${background};

          transform: translate(-50%, -50%);
          transition: 0.8s cubic-bezier(0.42, 0, 0, 1.01);
        }

        .btn:hover:before {
          opacity: 0;
          width: 120%;
          height: 150%;
          border-radius: 0px;
        }

        p {
          margin: 0;
        }
        .icon {
          transform: translateX(7px);
          padding: 0;
          font-size: 0.9rem;
        }
        .btn:hover {
          background: ${backgroundOnHover};
          color: ${colorOnHover};
        }

        .btn:focus {
          transform: scale(0.95);
        }

        .btn:active {
          background: ${backgroundOnHover};
        }

        .btn:active:before {
          opacity: 0.3;
          width: 115%;
          height: 145%;
          border-radius: 40px;
        }
        .btn:hover .icon {
          transform: translateX(16px);
          animation: move 1s ease-out infinite;
        }
        @keyframes move {
          0% {
            opacity: 1;
            transform: translateX(7px);
          }
          90% {
            transform: translateX(16px);
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .btn:before {
            opacity: 0;
          }
          .btn:active:before {
            opacity: 0;
          }

          .btn:hover {
            background: ${background};
            color: ${color};
          }
        }
      `}</style>
    </>
  );
};

ReadMoreType.defaultProps = {
  top: 0,
  bottom: 0,
};

export default ReadMoreType;
