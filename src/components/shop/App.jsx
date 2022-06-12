import ShopCard from "../design/card/ShopCard";
import AffiliateList from "./components/AffiliateList";
import OfferTemplate from "./components/OfferTemplate";
import ProductList from "./components/ProductList";

const App = ({ data, offer, ads }) => {
  return (
    <>
      <div className="section ">
        <div className="container">
          <div className="shop an_fade-2">
            {offer && <OfferTemplate data={offer} />}
            {data.length > 0 && <ProductList data={data} offer={offer} />}
            {ads.length > 0 && <AffiliateList data={ads} />}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 2rem;
          text-align: center;
        }

        .shop {
          position: relative;
          background: white;
        }

        @media (max-width: 600px) {
          .container {
            padding: 2rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default App;
