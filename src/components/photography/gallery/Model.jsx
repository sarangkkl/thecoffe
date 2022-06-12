import { VscClose } from "react-icons/vsc";

function Model({ selected, setSelected, caption }) {
  return (
    <>
      <div className="backdrop ">
        <div className="preview">
          <div
            className="close"
            onClick={() => {
              setSelected(null);
              close;
            }}
          >
            <VscClose />
          </div>
          <img src={selected} alt="Enlarged picture" />
          <div className="captions">
            <p>{caption}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .backdrop {
          position: fixed;
          inset: 0;
          z-index: 5;
          padding: 0.5rem;
          width: 100%;
          height: 100%;
          background: url(${selected});
          background-position: 50% 50%;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s ease;
        }

        .backdrop:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          background: #ffffffa6;
        }

        .preview {
          position: relative;
          display: block;
          max-width: 520px;
          background: white;
          border: 1rem solid #ffffff;
          box-shadow: 0px 0px 20px 20px #0000002e;
          object-fit: cover;
          margin: auto;
          border-bottom: 0;
        }

        .close {
          position: absolute;
          width: 35px;
          height: 35px;
          font-size: 1.3rem;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          right: 5px;
          top: 5px;
          border-radius: 100%;
          z-index: 5;
          transition: 0.1s ease;
        }

        .close:active {
          transform: scale(0.9);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .captions {
          padding: 1rem 2rem;
          text-align: center;
        }
        p {
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default Model;
