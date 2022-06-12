import ReadMoreType from "../design/buttons/ReadMoreType";
import AffiliateAdsCard from "../design/card/AffiliateAdsCard";

function AffiliateAds({ data }) {
  return (
    <>
      <div className="container">
        <div className="list">
          {data.slice(0, 8).map((d) => (
            <AffiliateAdsCard data={d} key={d.id} />
          ))}
        </div>
        {data.length > 4 && (
          <ReadMoreType
            text="Visit all"
            url="/store"
            color="#fff"
            colorOnHover="#fff"
            background="#272727 "
            backgroundOnHover="#525252"
            top="2rem"
          />
        )}
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 2rem 0;
        }

        .list {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin: 0;
          background: #c6e6ff;
          display: inline-block;
        }
      `}</style>
    </>
  );
}

export default AffiliateAds;
