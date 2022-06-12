import Blogs from "./components/Blogs";
import Albums from "./components/Albums";
import PhotographyTemplate from "../design/template/PhotographyTemplate";
import TravelTips from "./components/TravelTips";

const Extra = ({ blog, album, travelTips }) => {
  return (
    <>
      {blog.length > 0 && <Blogs data={blog} />}

      <PhotographyTemplate
        img_url="/assets/about-gallery.jpg"
        caption_one="Padharo sa, each street has its own tales when u r in Rajasthan"
        caption_two="The pursuit of excellent culmination in crafting u would rather die for when u r specially at the Royal Jaisalmer Fort premises. The vibrancy n the use of colours in the handlooms would make u awestruck."
      />

      {album.length > 0 && <Albums data={album} />}
      {travelTips.length > 0 && <TravelTips data={travelTips} />}

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Extra;
