import Link from "next/link";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

const links = [
  {
    name: "Shubha Kumar Haldar",
    fb_link: "https://www.facebook.com/thelocalfeet",
    ins_link: "https://www.instagram.com/thelocalfeet/",
    fb_Dp: "assets/profile/Subha_FB.jpg",
    ins_Dp: "assets/profile/Subha_INS.png",
  },
  {
    name: "Mayuri Sarker",
    fb_link: "https://www.facebook.com/mayuri.sarkar.9",
    ins_link: "https://www.instagram.com/mayuri_thelocalfeet/",
    fb_Dp: "assets/profile/Mayuri_FB.jpg",
    ins_Dp: "assets/profile/Mayuri_INS.png",
  },
];

export default function AboutFollow() {
  return (
    <>
      <div className="follow">
        <p>Who we are</p>

        <div className="flex social">
          {links.map((l, i) => (
            <div className="box" key={i}>
              <div className="profile">
                <img
                  src={l.ins_Dp}
                  alt="profile"
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
                <img
                  className="behind"
                  src={l.fb_Dp}
                  alt="profile"
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>

              <p>{l.name}</p>

              <div className="flex social_icon">
                <Link href={l.fb_link}>
                  <a target="blank" className="icon">
                    <RiFacebookFill />
                  </a>
                </Link>

                <Link href={l.ins_link}>
                  <a target="blank" className="icon">
                    <RiInstagramLine />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .follow {
          margin: 3rem 0 1rem;
        }
        .flex {
          justify-content: center;
          gap: 1rem;
        }
        .social {
          position: relative;
          flex-wrap: wrap;
        }

        .box {
          position: relative;
          flex: 1 1 200px;
          max-width: 273px;
          padding: 1rem;
          background: #fcfcfc;
          box-shadow: 2px 2px 20px #00000024;
          border-radius: 20px;
          transition: 0.2s ease;
        }

        .box:hover {
          transform: scale(1.05);
          background: #ffe2d9;
        }

        p {
          font-size: 1rem;
          margin: 0;
          font-weight: 700;
        }

        p:first-child() {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .profile {
          position: relative;
          width: 131px;
          height: 82px;
          z-index: 1;
          margin: auto;
        }
        img {
          position: absolute;
          width: 80px;
          height: 80px;
          top: 0;
          left: 0;
          object-fit: cover;
          border-radius: 100%;
        }
        .behind {
          z-index: -1;
          left: 50px;
          border: 0.8rem solid white;
        }
        .social_icon {
          padding: 1rem 0;
        }
        .icon {
          padding: 0;
          font-size: 1.5rem;
          opacity: 0.5;
          transition: 0.1s ease;
        }
        .icon:hover {
          padding: 0;
          font-size: 1.5rem;
          background: transparent;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .box:hover {
            transform: scale(1);
            background: #fcfcfc;
          }

          .icon {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
