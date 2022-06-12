import ShopCard from "../../design/card/ShopCard";

function ProductList({ data, offer }) {
  return (
    <>
      <div className="list an_fade-3">
        {data.map((d) => (
          <ShopCard d={d} key={d.id} offer={offer} />
        ))}
      </div>

      <style jsx>{`
        .list {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </>
  );
}

export default ProductList;
