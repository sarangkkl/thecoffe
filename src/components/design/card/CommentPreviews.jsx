import { BsPersonFill } from "react-icons/bs";
import Moment from "react-moment";

const commentPreviews = ({ data }) => {
  return (
    <>
      <div className="preview">
        <p>Comments</p>

        {data.map((c) => (
          <div className="box" key={c.id}>
            <div className="flex">
              <div className="icon">
                <BsPersonFill />
              </div>
              <p className="name">{c.name}</p>
            </div>
            <p>{c.comment}</p>
            <p className="date">
              <Moment format="Do MMM[,] YY">{c.date}</Moment>
            </p>
          </div>
        ))}

        {data.length > 4 && (
          <>
            <div className="loadMore"></div>
            <div className="btn">Load more</div>
          </>
        )}
      </div>

      <style jsx>{`
        .preview {
          position: relative;
          text-align: center;
          margin-bottom: 1rem;
        }
        p::first-letter {
          text-transform: uppercase;
        }
        p:first-child() {
          padding: 0.3rem 2rem;
          margin-bottom: 0.5rem;
          background: #f5f5f5;
          display: inline-block;
        }
        .box {
          padding: 2.5rem;
          border-radius: 20px;
          background: whitesmoke;
          text-align: left;
          max-width: 900px;
          margin: 1rem auto;
        }

        .box:last-child() {
          margin-bottom: 0;
        }
        p {
          margin: 0;
          line-height: 1.5rem;
        }

        .icon {
          padding: 0.5rem;
          background: white;
          font-size: 1.7rem;
          border-radius: 100%;
          color: #b1b1b1;
          cursor: initial;
        }

        .name {
          font-weight: 600;
        }
        .flex {
          justify-content: left;
          gap: 1rem;
          margin-bottom: 0.6rem;
        }
        .date {
          color: #a7a7a7;
          margin-top: 0.6rem;
        }

        .btn {
          background: #ebebeb;
          color: black;
        }
        .btn:hover {
          background: #d7d7d7;
        }

        .btn:active {
          transform: scale(0.95);
        }

        .loadMore {
          position: absolute;
          width: 100%;
          height: 66%;
          background: linear-gradient(0deg, white, transparent);
          bottom: 0;
          left: 0;
        }

        @media (max-width: 600px) {
          .box {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default commentPreviews;
