import AffiliateAdsCard from "../../design/card/AffiliateAdsCard";

function AffiliateList({ data }) {
  return (
    <>
      <div className="list an_fade-3">
        {data.map((d) => (
          <AffiliateAdsCard data={d} key={d.id} />
        ))}
      </div>

      <style jsx>{`
        .list {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
}

export default AffiliateList;
