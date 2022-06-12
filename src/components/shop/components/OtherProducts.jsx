import ShopCard from "../../design/card/ShopCard";

export default function OtherProducts({ data, offer }) {
  return (
    <>
      <div className="shop">
        <p>Other products</p>

        <div className="list">
          {data.slice(0, 6).map((d) => (
            <ShopCard d={d} offer={offer} key={d.id} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .shop {
          position: relative;
          text-align: center;
          padding: 3rem;
        }

        p {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.15rem;
          padding: 0.2rem 1rem;
          background: #f2f2f2;
          display: inline-block;
        }

        .list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        @media (max-width: 600px) {
          .shop {
            padding: 6rem 0 3rem;
          }
        }
      `}</style>
    </>
  );
}
