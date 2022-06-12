export default function OfferTemplate({ data }) {
  return (
    <>
      <div className="box">
        <h1>Sale</h1>
        <p>up to</p>
        <p className="offer">{data.discount} off</p>
        <p>on selected products.</p>
        <p className="tag">Hurry!</p>
      </div>

      <style jsx>{`
        p {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .offer {
          font-size: 5rem;
          text-transform: uppercase;
          font-weight: 700;
          color: #b3360f;
          line-height: 4rem;
        }

        .tag {
          font-size: 4rem;
          font-weight: 100;
          color: #ffffff;
          line-height: 5rem;
          position: absolute;
          bottom: 1rem;
          left: 1rem;
        }

        h1 {
          letter-spacing: 0;
          text-transform: uppercase;
          font-size: 13rem;
          font-weight: 700;
          color: white;
          line-height: 5rem;
        }
        .box {
          position: relative;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(310deg, #ff3e01, #ffc107, #f44336);
          margin-bottom: 3rem;
        }

        .box:before {
          position: absolute;
          content: "";
          width: 97%;
          height: 90%;
          border: 3px dashed white;
          inset: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
}
