import Footer from "./Footer";
import CustomNavbar from "./CustomNavbar";

const CustomLayout = ({ links, currPage, children }) => {
  return (
    <>
      <CustomNavbar links={links} currPage={currPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CustomLayout;
