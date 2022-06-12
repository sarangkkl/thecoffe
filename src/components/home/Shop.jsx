import ShopCard from "../design/card/ShopCard";
import ReadMoreType from "../design/buttons/ReadMoreType";

const Shop = ({ data, offer }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">Store</p>
          <h2>Shop with us</h2>

          <div className="list">
            {data.slice(0, 4).map((d) => (
              <ShopCard
                d={d}
                key={d.id}
                offer={offer}
                background="#fff"
                borderDefault="#bee3ff"
                borderOnHover="#2882c9"
                offerBackground="#2882c9"
              />
            ))}
          </div>

          {data.length > 4 && (
            <ReadMoreType
              text="Shop with us"
              url="/store"
              color="#fff"
              colorOnHover="#fff"
              background="#2882c9 "
              backgroundOnHover="#52abf0"
              top="2rem"
            />
          )}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 4rem 2rem 2rem;
          background: linear-gradient(0deg, white, #2196f330, white);
        }
        .container {
          text-align: center;
          padding: 2rem 0 0;
        }

        .list {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0 0;
        }

        h2 {
          padding: 0.3rem 2rem;
          background: #c6e6ff;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Shop;
