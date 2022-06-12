import Link from "next/link";

const links = [
  {
    name: "Facebook",
    className: "fb",
    url: "https://www.facebook.com/thelocalfeet",
    target: "blank",
  },
  {
    name: "Instagram",
    className: "ins",
    url: "https://www.instagram.com/thelocalfeet/",
    target: "blank",
  },
  {
    name: "Contact",
    className: "contact",
    url: "#contact-us",
    target: "_parent",
  },
];

export default function MainSocialLink() {
  return (
    <>
      <div className="flex">
        {links.map((l, i) => (
          <Link href={l.url} key={i}>
            <a target={l.target} className={`btn ${l.className}`}>
              {l.name}
            </a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .flex {
          justify-content: center;
          gap: 1rem;
          margin: 1rem auto 2rem;
          flex-wrap: wrap;
        }

        .btn {
          background: transparent;
          border: 3px solid;
          padding: 0.5rem 2rem;
          color: white;
          font-weight: 700;
        }

        .fb {
          background: #4267b2;
          border-color: #4267b2;
        }
        .fb:hover {
          background: #234281;
        }

        .ins {
          background: #fbad50;
          border-color: #fbad50;
        }

        .ins:hover {
          background: #bc2a8d;
        }

        .contact {
          border-color: black;
          color: black;
        }

        .contact:hover {
          background: #e6e6e6;
        }
        .btn:active {
          transform: scale(0.9);
        }

        @media (max-width: 768px) {
          .fb:hover {
            background: #4267b2;
          }

          .ins:hover {
            background: #fbad50;
          }
        }
      `}</style>
    </>
  );
}
