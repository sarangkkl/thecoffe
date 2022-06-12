import Link from "next/link";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

const data = [
  {
    name: "Articles",
    url: "/explore#articles",
  },
  {
    name: "Gallery",
    url: "/photography/gallery",
  },
  {
    name: "Albums",
    url: "/photography#albums",
  },
  {
    name: "Shop",
    url: "/store",
  },
];

const Footer_top = () => {
  return (
    <>
      <div className="main">
        <img
          className="logo"
          src="/logo_black.png"
          alt="thelocalfeet"
          onDragStart={(e) => {
            e.preventDefault();
          }}
        />

        <p className="description">
          You might not always fit in to experience the offbeat travel, but you
          must try. Follow thelocalfeet, conceptualized by Mayuri & Shubha in
          2018 To get more insight into sustainable travel.
        </p>

        <div className="social_link">
          <p className="title">Follow us on Social</p>
          <div className="flex">
            <Link href="https://www.facebook.com/thelocalfeet">
              <a target="blank" className="icon">
                <RiFacebookFill />
              </a>
            </Link>

            <Link href="https://www.instagram.com/thelocalfeet/">
              <a target="blank" className="icon">
                <RiInstagramLine />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="links">
        <p className="title">Quick Links</p>

        <div className="flex">
          {data.map((d, i) => (
            <Link href={d.url} key={i}>
              <a>{d.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .main,
        .links {
          text-align: center;
          padding: 2rem;
        }
        .main {
          max-width: 539px;
          margin: auto;
        }

        .links {
          padding: 0;
          margin-bottom: 1.3rem;
        }

        .flex {
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .title {
          font-weight: 800;
          font-size: 1.2rem;
        }
        a {
          padding: 0.3rem 0;
          font-weight: 600;
        }
        a:hover {
          font-weight: 700;
        }

        .social_link {
          margin-top: 2rem;
        }

        .icon {
          font-size: 2rem;
          color: #2b2b2b;
        }

        @media (max-width: 600px) {
          .main,
          .links {
            padding: 2rem 0 1rem;
            text-align: left;
          }

          .links {
            padding: 0;
            margin: 0.6rem 0;
          }

          .flex {
            justify-content: left;
          }
        }
      `}</style>
    </>
  );
};

export default Footer_top;
