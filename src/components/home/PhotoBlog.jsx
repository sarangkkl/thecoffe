import HrTag from "../design/HrTag";
import Card_one from "../design/card/Card_one";
import ReadMoreType from "../design/buttons/ReadMoreType";

const PhotoBlog = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">New Section</p>
          <h2>Photo Albums</h2>

          <div className="list">
            {data.slice(0, 4).map((d) => (
              <Card_one data={d} key={d.id} link={`/photography/${d.slug}`} />
            ))}
          </div>

          {data.length > 4 && (
            <ReadMoreType
              text="View all blogs"
              url="/photography"
              color="#fff"
              colorOnHover="#fff"
              background=" #f3c481"
              backgroundOnHover="#dd9733"
              top="2rem"
            />
          )}
        </div>

        <HrTag background="#f3c481" bottom="-2rem" top="auto" />
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
          height: 50%;
          left: 0;
          top: 0;
          background: radial-gradient(#2196f330, #ffffff00, #ffffff00);
          z-index: -1;
        }

        .section:after {
          content: "";
          position: absolute;
          width: 75%;
          height: 90%;
          right: 0;
          bottom: -11rem;
          background: radial-gradient(#ff980045, #ffffff00, #ffffff00);
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
          background: #fff0dc;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default PhotoBlog;
