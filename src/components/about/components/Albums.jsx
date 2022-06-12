import HrTag from "../../design/HrTag";
import Card_others from "../../design/card/Card_others";

export default function Albums({ data }) {
  return (
    <>
      <div className="container">
        <div className="albums">
          <h3>Latest Albums</h3>

          <div className="flex lists">
            {data.slice(0, 4).map((d) => (
              <Card_others
                key={d.id}
                data={d}
                link={`/photography/${d.slug}`}
              />
            ))}
          </div>

          <HrTag background="#ffdca9" bottom="-2rem" top="auto" />
        </div>
      </div>

      <style jsx>{`
        .albums {
          position: relative;
          padding: 3rem 0;
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
