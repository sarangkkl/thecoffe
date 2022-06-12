import HrTag from "../design/HrTag";
import Card_one from "../design/card/Card_one";
import ReadMoreType from "../design/buttons/ReadMoreType";

function Traveltips({ data }) {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">Tips & tricks</p>
          <h2>How to Travel better</h2>
          <div className="list">
            {data.slice(0, 4).map((d) => (
              <Card_one data={d} key={d.id} link={`/travel-tips/${d.slug} `} />
            ))}
          </div>

          {data.length > 4 && (
            <ReadMoreType
              text="Our travel tips"
              url="/travel-tips"
              color="#fff"
              colorOnHover="#fff"
              background=" #fe6f8c"
              backgroundOnHover="#d64260"
              top="2rem"
            />
          )}
        </div>

        <HrTag background="#f9adba" bottom="0" top="auto" />
      </div>

      <style jsx>{`
        .section {
          padding-top: 2rem;
          padding-bottom: 4rem;
          z-index: 2;
        }

        .section:before {
          content: "";
          position: absolute;
          width: 50%;
          height: 100%;
          left: 0;
          top: 0;
          background: radial-gradient(#f321494d, #ffffff00, #ffffff00);
          z-index: -1;
        }

        .section:after {
          content: "";
          position: absolute;
          width: 65%;
          height: 100%;
          right: 0;
          bottom: -10rem;
          background: radial-gradient(#00acff45, #ffffff00, #ffffff00);
          z-index: -1;
        }

        .container {
          text-align: center;
          padding: 2rem 0;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
          margin: 2rem 0 0;
        }

        h2 {
          padding: 0.3rem 2rem;
          background: #ccefff;
          display: inline-block;
        }
      `}</style>
    </>
  );
}

export default Traveltips;
