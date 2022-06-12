import Comments from "../design/form/Comments";
import OtherBlogs from "./components/OtherBlogs";
import BlogContent from "./components/BlogContent";
import BlogLanding from "./components/BlogLanding";
import BlogPreview from "./components/BlogPreview";
import ScrollToTop from "../design/buttons/ScrollToTop";
import SocialShareBox from "./components/SocialShareBox";

const BlogTemplate = ({ blog, others, link, links, currPage }) => {
  return (
    <>
      <BlogLanding blog={blog} />

      <div className="section">
        <div className="container">
          <BlogContent blog={blog} links={links} currPage={currPage} />
          <SocialShareBox blog={blog} />
          <BlogPreview blog={blog} />
          {others.length > 0 && <OtherBlogs data={others} Blogs_link={link} />}
          <Comments id={blog.id} post={blog.title} comment={blog.comment} />
          <ScrollToTop />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .container {
            padding: 1rem 0rem;
          }

          .bottom {
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogTemplate;
