import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

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
    url: "/travel-tips",
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

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 768 ? setScroll(true) : setScroll(false);
  };

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const openNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={scroll ? "navbar update" : "navbar"}
        onScroll={handleScroll}
      >
        <div className="container an_fade-2">
          <div className="flex nav_top">
            <div className="logo" onClick={() => router.push("/")}>
              <img
                src={scroll ? "/logo_black.png" : "/logo_white.png"}
                alt="thelocalfeet logo"
              />
            </div>

            <div className="flex main_menu">
              {menu.map((n, i) => (
                <Link href={n.url} key={i}>
                  <a
                    className={
                      router.pathname == `${n.url}`
                        ? "btn_nav active"
                        : "btn_nav"
                    }
                  >
                    {n.name}
                  </a>
                </Link>
              ))}

              <div className="icon" onClick={openNavbar}>
                <HiMenuAlt3 />
              </div>
            </div>
          </div>

          <Navbar_mobile open={open} closeNavbar={closeNavbar} menu={menu} />
        </div>
      </div>

      <style jsx>{`
        * {
          transition: 0s ease;
        }
        .navbar {
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          z-index: 5;
          color: white;
          transition: 0.5s ease;
        }

        .update {
          position: fixed;
          background: white;
          box-shadow: 0px 3px 20px #00000026;
          color: black;
        }

        .update .container {
          padding: 0.5rem 2rem;
        }

        .container {
          padding: 1rem 2rem 0;
        }

        .date {
          margin-right: 1rem;
          margin-bottom: 0;
        }

        .logo {
          height: auto;
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
          display: none;
        }

        .update .icon {
          background: #ededed;
        }

        .main_menu {
          justify-content: center;
          gap: 0.6rem;
        }

        .btn_nav {
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          transition: 0.3s ease-out;
        }

        .btn_nav:hover {
          background: #ffffff26;
          border-radius: 10px;
        }

        .btn_nav:active {
          background: #ffffff26;
          border-radius: 20px;
        }

        .update .btn_nav:hover {
          background: #ededed;
        }

        .update .btn_nav:active {
          background: #ededed;
        }

        .active {
          background: #ffffff26;
          border-radius: 10px;
        }

        .update .active {
          background: #ffdba6;
        }

        @media (max-width: 867px) {
          .main_menu .btn_nav {
            display: none;
          }
          .icon {
            display: flex;
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

// Navbar.defaultProps = {
//   mainColor: "white",
// };

export default Navbar;
