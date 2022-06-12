import Card_one from "../design/card/Card_one";
import ReadMoreType from "../design/buttons/ReadMoreType";

const Blog = ({ data }) => {
  return (
    <>
    
      <div className="section">
        <div className="container">
          <p className="tag">Fatured</p>
          <h2>Blog Articless</h2>

          <div className="list">
            {data.slice(0, 4).map((d) => (
              
              <Card_one data={d} key={d.id} link={`/explore/${d.slug}`} />
            ))}
          </div>

          {data.length > 4 && (
            <ReadMoreType
              text="View all blogs"
              url="/explore#articles"
              color="#fff"
              colorOnHover="#fff"
              background="#009688"
              backgroundOnHover="#00685e"
              top="2rem"
            />
          )}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding-top: 4rem;
          padding-bottom: 2rem;
          background: linear-gradient(0deg, white, #00968814, white);
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
          margin: 2rem 0 0;
          gap: 1rem;
        }

        h2 {
          padding: 0.3rem 2rem;
          background: #7cd7cf36;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Blog;
