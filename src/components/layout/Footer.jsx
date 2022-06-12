import Newsletter from "../design/form/Newsletter";
import Footer_content from "./helper/Footer_content";
import { IoIosArrowUp } from "react-icons/io";
import Moment from "react-moment";

const Footer = () => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <Newsletter />
          <Footer_content />

          <div className="flex bottom">
            <p>
              Copyright{" "}
              <span>
                <Moment format="YYYY">{new Date()}</Moment>
              </span>
              , thelocalfeet - All right reserved.
            </p>
            <div className="scroll_btn" onClick={scroll}>
              <div className="icon">
                <IoIosArrowUp />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          background: #0096885e;
          padding-bottom: 2rem;
          padding-top: 1rem;
          margin-top: auto;
        }
        p {
          text-align: center;
          margin: 0;
        }

        .bottom {
          gap: 1rem;
          justify-content: center;
        }

        .scroll_btn {
          display: none;
        }

        .icon {
          background: #039b8d;
          color: white;
          padding: 0.4rem;
          border-radius: 10px;
        }
        @media (max-width: 767px) {
          .section {
            padding: 0;
          }

          .bottom {
            margin-top: 2rem;
          }

          .scroll_btn {
            display: flex;
          }

          p {
            text-align: left;
            font-weight: 600;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
