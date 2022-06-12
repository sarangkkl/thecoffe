import Link from "next/link";
import { VscClose } from "react-icons/vsc";

const Navbar_mobile = ({ open, closeNavbar, menu }) => {
  return (
    <>
      <div className={open ? "flex nav_mob open" : "flex nav_mob"}>
        <div className="icon" onClick={closeNavbar}>
          <VscClose />
        </div>

        <div className="menu">
          <p>Quick links</p>

          {menu.map((n, i) => (
            <Link href={n.url} key={i}>
              <a onClick={closeNavbar}>{n.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .nav_mob {
          position: fixed;
          justify-content: center;
          max-width: 478px;
          width: 100%;
          height: 100vh;
          background: #ffffff;
          color: black;
          border-left: 1px solid #d1d1d1;
          top: 0;
          right: 0;
          padding: 6rem;
          z-index: 2;

          opacity: 0;
          pointer-events: none;
          transform: translateX(95%);
          transition: 0.2s ease;
        }

        .open {
          opacity: 1;
          pointer-events: visible;
          transform: translateX(0);
        }
        .icon {
          position: absolute;
          top: 2.35rem;
          right: 3rem;
          padding: 0;
        }
        .menu {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .menu p {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .menu a {
          font-size: 1.3rem;
          padding: 0.5rem 0;
        }
      `}</style>
    </>
  );
};

export default Navbar_mobile;
