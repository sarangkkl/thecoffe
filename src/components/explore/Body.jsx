import BlogsList from "./BlogsList";
import Countries from "./Countries";

const Body = ({ country, blog }) => {
  return (
    <>
      <div className="section" id="articles">
        <div className="container">
          <Countries data={country} />
          <BlogsList data={blog} />
        </div>
      </div>

      <style jsx>{`
        .flex {
          justify-content: center;
          align-items: flex-start;
        }

        @media (max-width: 780px) {
          .section {
            padding: 6rem 2rem;
          }
          .container {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Body;
