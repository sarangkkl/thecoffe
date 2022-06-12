import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillCloseSquare, AiTwotonePhone } from "react-icons/ai";

export default function Model({ open, close, data }) {
  return (
    <>
      <div className={open ? "popup open" : "popup"}>
        <div className={open ? "popup_details open_box" : "popup_details"}>
          <div className="close" onClick={close}>
            <AiFillCloseSquare />
          </div>
          {data.status ? <p>Order now</p> : <p>Book now</p>}
          <p>Call us or whatsapp us</p>

          <div className="link flex">
            <a className="icon" href="tel:7834924941" target="blank">
              <AiTwotonePhone />
              {/* 7003929602 */}
            </a>

            <a
              className="icon"
              href="https://wa.me/+917834924941"
              target="blank"
            >
              <IoLogoWhatsapp />
              {/* 9883182397 */}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .popup {
          padding: 2rem;
          position: fixed;
          inset: 0;
          z-index: 2;
          text-align: center;

          background: #0000004f;

          display: flex;
          align-items: center;
          justify-content: center;

          transition: 0.15s ease;

          /*false -- close*/
          pointer-events: none;
          opacity: 0;
        }
        .open {
          /*true -- open*/
          pointer-events: initial;
          opacity: 1;
        }

        .close {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          cursor: pointer;
          top: 0.5rem;
          right: 0.5rem;
          transition: 0.1s ease;
        }

        .close:active {
          transform: scale(0.9);
        }

        .popup_details {
          padding: 2rem;
          background: white;
          position: relative;
          border-radius: 10px;
          box-shadow: 0px 0px 20px 20px #0000002e;

          max-width: 432px;
          flex: 1;

          /*false -- close*/
          transition: 0.15s ease;
          transform: scale(0.95);
        }
        .open_box {
          /*true -- open*/
          transform: scale(1);
        }

        p:nth-child(2) {
          font-size: 1.5rem;
          font-weight: 700;
        }
        p:last-child() {
          margin: 0;
        }

        .link {
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .icon {
          padding: 0.4rem 2.5rem;
          background: green;
          color: white;
          border-radius: 50px;
          font-size: 1.5rem;
          border: 2px solid green;
          transition: 0.1s ease;
        }

        .icon:last-of-type() {
          background: white;
          color: green;
        }

        @media (max-width: 600px) {
          .popup {
            place-items: end;
            padding: 0;
          }

          .popup_details {
            padding: 3rem 1rem 4rem;
            transform: scale(1) translateY(45px);
          }

          .open_box {
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
