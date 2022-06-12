import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from 'next/router'


import { EmailIcon, FacebookIcon, WhatsappIcon } from "react-share";

export default function SocialShareBox({ blog }) {
  const router = useRouter()
  // const currentUrl = router.pathname;

  // currentUrl = currentUrl.split("/");
  
  const shareUrl = `${process.env.NEXT_PUBLIC_WEBSITE_LINK}/explore/${blog.slug}`;

  return (
    
    <div className="social">
      <div
        className="background"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1320' height='390' preserveAspectRatio='none' viewBox='0 0 1320 390'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1340%26quot%3b)' fill='none'%3e%3crect width='1320' height='390' x='0' y='0' fill='url(%23SvgjsLinearGradient1341)'%3e%3c/rect%3e%3cpath d='M0 0L512.97 0L0 81.48z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 81.48L512.97 0L950.4000000000001 0L0 214.61z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 214.61L950.4000000000001 0L1174.13 0L0 302.38z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 302.38L1174.13 0L1239.6200000000001 0L0 357.34z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1320 390L969.1 390L1320 306.39z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1320 306.39L969.1 390L498.82000000000005 390L1320 304.19z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1320 304.19L498.82000000000005 390L325.1600000000001 390L1320 157.77z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1320 157.77L325.1600000000001 390L296.9200000000001 390L1320 68.17000000000002z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1340'%3e%3crect width='1320' height='390' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='50%25' x2='100%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1341'%3e%3cstop stop-color='rgba(235%2c 235%2c 235%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
        }}
      ></div>

      <h3 className="title">Share this Article</h3>
      <p>
        If you enjoyed reading this story, then we'd love it if you would{" "}
        <span>Share it!</span>
      </p>

      <div className="social_icon">
        <FacebookShareButton style={{ margin: "0.5rem" }} url={shareUrl}>
          <FacebookIcon
            iconFillColor="black"
            size={35}
            round={false}
            bgStyle={{ fill: "#dedede" }}
          ></FacebookIcon>
        </FacebookShareButton>

        <WhatsappShareButton style={{ margin: "0.5rem" }} url={shareUrl}>
          <WhatsappIcon
            iconFillColor="black"
            size={35}
            round={false}
            bgStyle={{ fill: "#dedede" }}
          ></WhatsappIcon>
        </WhatsappShareButton>

        <EmailShareButton style={{ margin: "0.5rem" }} url={shareUrl}>
          <EmailIcon
            iconFillColor="black"
            size={35}
            round={false}
            bgStyle={{ fill: "#dedede" }}
          ></EmailIcon>
        </EmailShareButton>
      </div>

      <style jsx>{`
        .social {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          padding: 3rem;
          margin: 0 0 0.2rem;
          text-align: center;
        }
        .caption {
          font-size: 3rem;
          color: #dcdcdc;
          position: absolute;
          top: -55px;
          z-index: -1;
          transform: translateX(-50%);
          left: 51%;
        }
        .title {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        .social p span {
          font-weight: 800;
        }
        .social_icon {
          padding: 0.3rem 2rem;
        }

        @media only screen and (max-width: 600px) {
          .social {
            padding: 2rem;
          }
          .social_icon {
            padding: 0;
          }
        }
        @media only screen and (max-width: 450px) {
          .social p span {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
