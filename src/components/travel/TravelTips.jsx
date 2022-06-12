import TipsList from "./TipsList";

function TravelTipsList({ tips }) {
  return (
    <>
      <div className="section" id="articles">
        <div className="container">
          <TipsList data={tips} />
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
}

export default TravelTipsList;
