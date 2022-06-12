import Card_two from "../card/Card_two";

export default function SearchResult({ newData, prefix }) {
  return (
    <>
      <div className="result">
        {newData.length > 0 ? (
          <p>What are you looking for?</p>
        ) : (
          <div className="not_found">
            <p>
              <span>Not found!</span>Nothing matched your search terms. Please
              try again with some different keywords.
            </p>
          </div>
        )}
        {newData.length > 0 && (
          <div className="list">
            {newData.map((i) => (
              <Card_two i={i} key={i.id} link={`${prefix}/${i.slug}`} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        p {
          font-size: 1.3rem;
          color: #7c7c7c;
        }

        .not_found {
          margin: 2rem 0 0;
          text-align: center;
          padding: 3rem 2rem;
          background: whitesmoke;
          border-radius: 20px;
          color: darkgrey;
        }

        .not_found p {
          margin: 0;
          max-width: 408px;
          margin: auto;
          line-height: 1.5rem;
          color: #bfbfbf;
        }

        span {
          font-weight: 700;
          display: block;
          margin-bottom: 1rem;
          font-size: 1.6rem;
          color: #7c7c7c;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }

        @media (max-width: 600px) {
          p {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
