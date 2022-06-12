import { useState } from "react";

import Model from "./Model";
import FallbackLinks from "../../layout/helper/FallbackLinks";
import GalleryGrid from "../components/GalleryGrid";
import GalleryBlogPreview from "../components/GalleryBlogPreview";

const Gallery = ({ data, links, currPage, reel_type }) => {
  const [selected, setSelected] = useState(null);
  const [caption, setCaption] = useState(null);

  return (
    <>
      <div className="section an_fade-2">
        <div className="container">
          {currPage && (
            <div className="links_mob">
              <FallbackLinks
                links={links}
                currPage={currPage}
                position="center"
              />
            </div>
          )}
          <GalleryBlogPreview data={reel_type} />
          <GalleryGrid
            data={data}
            setCaption={setCaption}
            setSelected={setSelected}
          />

          <p className="tag">End of the page</p>
        </div>
      </div>

      {selected && (
        <Model
          selected={selected}
          caption={caption}
          setSelected={setSelected}
        />
      )}

      <style jsx>{`
        .section {
          background: white;
          padding-top: 2rem;
        }

        .links_mob {
          display: none;
        }

        .tag {
          margin: 2rem 0 0;
          text-align: center;
        }

        @media (max-width: 768px) {
          .links_mob {
            display: block;
            background: white;
            position: sticky;
            padding: 1rem 0rem;
            top: 5.5rem;
            z-index: 2;
          }
        }
        @media (max-width: 600px) {
          .container {
            padding: 0;
          }

          .links_mob {
            top: 4.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;
