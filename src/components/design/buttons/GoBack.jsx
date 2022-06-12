import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const GoBack = ({
  top,
  bottom,
  color,
  background,
  backgroundOnHover,
  colorOnHover,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="btn flex" onClick={() => router.back()}>
        <div className="icon">
          <IoChevronBackOutline />
        </div>
        <p>Back</p>
      </div>

      <style jsx>{`
        .btn {
          padding-left: 1.6rem;

          background: ${background};
          color: ${color};

          margin-top: ${top};
          margin-bottom: ${bottom};

          gap: 0.3rem;
          overflow: hidden;
        }

        .icon {
          padding: 0;
          font-size: 0.9rem;
        }
        .btn:hover {
          background: ${backgroundOnHover};
          color: ${colorOnHover};
        }
        .btn:hover .icon {
          transform: translateX(-5px);
          background: ${backgroundOnHover};
        }
        p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .btn {
            padding: 0 !important;
            border-radius: 100%;
          }

          .btn:hover .icon {
            transform: translateX(0);
          }

          p {
            display: none;
          }
          .icon {
            padding: 0.6rem;
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

GoBack.defaultProps = {
  top: 0,
  bottom: 0,
  background: "#ededed",
  backgroundOnHover: "#ededed",
  color: "#000",
  colorOnHover: "#000",
};

export default GoBack;
