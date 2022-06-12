import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="buttons">
        <div onClick={scroll} className="flex scroll_top">
          <div className="icon">
            <IoIosArrowUp />
          </div>
          <p>Go to top</p>
        </div>
      </div>

      <style jsx>{`
        .buttons {
          position: sticky;
          bottom: 2rem;
          z-index: 1;
          pointer-events: none;
        }

        p {
          margin: 0;
        }

        .flex {
          gap: 0.5rem;
        }

        .scroll_top {
          color: white;
          width: max-content;
          border-radius: 50px;
          cursor: pointer;
          padding: 0.3rem;
          pointer-events: visible;
          margin-right: 0;
          margin-left: auto;
        }
        .scroll_top p {
          z-index: 1;
          margin-left: -4.5rem;
          opacity: 0;
        }
        .scroll_top:hover {
          background: #008175;
          padding: 0.3rem;
          padding-right: 1.5rem;
        }

        .scroll_top:hover p {
          margin-left: 0;
          opacity: 1;
        }

        .icon {
          background: #009688;
          color: white;
          font-size: 1.4rem;
          border-radius: 100%;
        }

        @media (max-width: 768px) {
          .scroll_top,
          .scroll_top:hover {
            background: #009688;
            padding: 0;
            gap: 0;
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
}
