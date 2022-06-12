import Card_two from "../design/card/Card_two";

const TipsList = ({ data }) => {
  return (
    <>
      <div className="blogs">
        <h2>Travel tips and planning</h2>

        <div className="list">
          {data.map((i) => (
            <Card_two i={i} key={i.id} link={`/travel-tips/${i.slug}`} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .blogs {
          position: relative;
        }
        h2 {
          margin-bottom: 2rem;
          padding: 0.3rem 2rem;
          background: #f5f5f5;
          display: inline-block;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 867px) {
          .list {
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default TipsList;
