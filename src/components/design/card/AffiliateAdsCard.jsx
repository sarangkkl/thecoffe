import Script from "next/script";

function AffiliateAdsCard({ data }) {
  return (
    <>
      <div className="display">
        <div
          data-wrid={data.dataWRID}
          data-widgettype={data.dataWidgetType}
          data-class={data.dataClass}
          height="240px"
          width="120px"
        ></div>
        <Script async src={data.scriptSrc}></Script>
      </div>

      <style jsx>{`
        .display {
          padding: 0.5rem;
          background: #f6f6f6;
          box-shadow: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .display:hover {
          box-shadow: 0px 5px 20px 0px #00000026;
          background: white;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}

export default AffiliateAdsCard;
