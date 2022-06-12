import Card_others from "../../design/card/Card_others";
import HrTag from "../../design/HrTag";

function TravelTips({ data }) {
  return (
    <>
      <div className="container">
        <div className="blogs">
          <h3>Our travel tips</h3>

          <div className="flex lists">
            {data.slice(0, 4).map((d) => (
              <Card_others
                key={d.id}
                data={d}
                link={`/travel-tips/${d.slug} `}
              />
            ))}
          </div>

          <HrTag background="#a9ccff" bottom="-2rem" top="auto" />
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

export default TravelTips;
