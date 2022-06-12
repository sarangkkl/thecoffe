import Preview from "./Preview";
import MainDetails from "./MainDetails";
import OtherProducts from "./OtherProducts";

export default function Details({
  data,
  openPopup,
  offer,
  otherProducts: othP,
  links,
  currPage,
}) {
  return (
    <>
      <MainDetails
        details={data}
        openPopup={openPopup}
        offer={offer}
        links={links}
        currPage={currPage}
      />
      {data.status && data?.preview && <Preview prv={data} />}
      {othP.length > 0 && <OtherProducts data={othP} offer={offer} />}
    </>
  );
}
