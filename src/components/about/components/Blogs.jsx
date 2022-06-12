import Card_others from "../../design/card/Card_others";

export default function Blogs({ data }) {
  return (
    <>
      <div className="container">
        <div className="blogs">
          <p className="tag">Keep Reading</p>
          <h3>Latest Articles</h3>

          <div className="flex lists">
            {data.slice(0, 4).map((d) => (
              <Card_others key={d.id} data={d} link={`/explore/${d.slug}`} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .blogs {
          position: relative;
          padding: 4rem 0 3rem;
          text-align: center;
        }

        .lists {
          margin-top: 1rem;
          justify-content: center;
          align-items: initial;
          gap: 0;
          flex-wrap: wrap;
        }

        h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
