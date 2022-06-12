import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

import GoBack from "../design/buttons/GoBack";
import FallbackLinks from "./helper/FallbackLinks";
import Navbar_mobile from "./helper/Navbar_mobile";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Explore",
    url: "/explore",
  },
  {
    name: "Photography",
    url: "/photography",
  },
  {
    name: "Travel guide",
    url: "/travel",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Store",
    url: "/store",
  },
];

const CustomNavbar = ({ links, currPage }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const openNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 450 ? setScroll(true) : setScroll(false);
  };

  return (
    <>
      <div
        className={scroll ? "navbar update" : "navbar"}
        onScroll={handleScroll}
      >
        <div className="container flex">
          <div className="flex">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                src={scroll ? "/logo_black.png" : "/logo_white.png"}
                alt="thelocalfeet logo"
              />
            </div>
          </div>

          {scroll && currPage && (
            <div className="links_pc">
              <FallbackLinks links={links} currPage={currPage} />
            </div>
          )}

          <div className="flex menu_icon">
            <GoBack />

            <div className="icon" onClick={openNavbar}>
              <HiMenuAlt3 />
            </div>
          </div>
        </div>
      </div>

      <Navbar_mobile open={open} closeNavbar={closeNavbar} menu={menu} />

      <style jsx>{`
        .navbar {
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          z-index: 2;
          color: #000;
        }

        .update {
          position: fixed;
          background: white;
          box-shadow: 0px 3px 20px #00000026;
        }

        .container {
          padding: 1rem 2rem 0;
          gap: 1.5rem;
        }

        .update .container {
          padding: 0.5rem 2rem;
        }

        .logo {
          height: auto;
        }

        .links_pc {
          display: block;
        }

        .update .logo {
          transform: translateY(7px);
        }

        .icon {
          color: black;
          padding: 0.45rem;
          border-radius: 8px;
          font-size: 1.6rem;
          background: white;
        }

        .menu_icon {
          gap: 1rem;
        }
        .update .icon {
          background: #ededed;
        }

        @media (max-width: 768px) {
          .links_pc {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .logo {
            width: auto;
            height: 50px;
            transform: translateY(5px);
          }
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
