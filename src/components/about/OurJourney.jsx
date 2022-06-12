const OurJourney = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <h2>Our Journey</h2>
          <p>
            We are full-time corporate professionals, <span>Shubha</span>{" "}
            (having a background in Civil engineering), and <span>Mayuri</span>{" "}
            (having experience in PR and corporate communication). Though we
            started our career in different fields, there is a similarity
            between us that we two happy souls, who dream of traveling the world
            together. We are slowly but steadily expanding our travel exposure
            through social media like blogging, posting, and sharing new travel
            stories on Instagram, Facebook.
          </p>

          <p>
            Being a part-time travel photographer and blogger, we spend half of
            our time every day writing blogs, articles, editing photographs,
            highly active on social platforms and also attend travel & street
            photography, social media seminars, watch youtube videos to gain
            more knowledge on it.
          </p>
        </div>
      </div>

      <style jsx>{`
        .container:before {
          position: absolute;
          content: "";
          width: 43%;
          height: 80%;
          top: 0;
          right: 0;
          background: radial-gradient(#2196f35c, transparent, transparent);
          z-index: -1;
        }

        .container:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 82%;
          bottom: 0;
          left: 0;
          background: radial-gradient(#62e2d68a, transparent, transparent);
          z-index: -1;
        }

        .main {
          max-width: 925px;
          padding: 2rem 2rem 4rem;
          margin: auto;
          text-align: left;
        }

        h2 {
          position: relative;
          font-size: 2rem;
          letter-spacing: 0;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        h2:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 8%;
          height: 1px;
          background: #6b6b6b;
        }

        p {
          line-height: 1.5rem;
        }

        p span {
          font-weight: 700;
        }

        p:last-of-type {
          font-size: 1.6rem;
          line-height: 2.3rem;
          font-weight: 700;
          margin: 2rem 0 0;
        }

        .featured_img {
          position: relative;
          max-width: 827px;
          height: 563px;
        }

        @media (max-width: 767px) {
          p:last-of-type {
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 500;
            margin: 0;
          }

          .main {
            padding: 2rem;
          }
        }

        @media (max-width: 600px) {
          .main {
            padding: 0 0 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default OurJourney;
