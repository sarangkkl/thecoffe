import Head from "next/head";
import { sanityClient, urlFor } from "../../../config/sanity";

import BlogTemplate from "../../components/blogs/BlogTemplate";
import FallbackLoading from "../../components/design/template/FallbackLoading";
import CustomLayout from "../../components/layout/CustomLayout";

const BlogSlugsQuery = `*[_type == "photoBlog" && defined(slug.current)][].slug.current`;

const eachBlogQuery = `*[_type == "photoBlog" && slug.current == $slug][0]
                      {
                        "id":_id, 
                        title, 
                        metaTitle,
                        subtitle, 
                        keywords, 
                        "slug":slug.current,
                        mainImage, 
                        body, 
                        publishedAt, 
                        "comment":*[_type == "comments" && post._ref == ^._id && isApproved == false ]|order( publishedAt desc)
                                {
                                  "id":_id, 
                                  "date":_createdAt, 
                                  name, 
                                  comment
                                }
                      }`;

const otherBlogsQuery = `*[_type == "photoBlog" && slug.current != $slug]|order( publishedAt desc)
                      {
                        'id':_id, 
                        publishedAt, 
                        mainImage,
                        'slug':slug.current, 
                        title, 
                        subtitle 
                      }`;

export async function getStaticPaths() {
  const response = await sanityClient.fetch(BlogSlugsQuery);

  const paths = response.map((slug) => ({
    params: { slug },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = await sanityClient.fetch(eachBlogQuery, {
    slug: params.slug,
  });

  const otherBlogs = await sanityClient.fetch(otherBlogsQuery, {
    slug: params.slug,
  });

  if (!blog) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog,
      otherBlogs,
    },
    revalidate: 1,
  };
}

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Photography",
    url: "/photography",
  },
];

const photoBlogBySlug = ({ blog, otherBlogs }) => {
  if (!blog) return <FallbackLoading />;

  return (
    <>
      <Head>
        {blog.metaTitle ? (
          <title> {blog.metaTitle} | The Local Feet </title>
        ) : (
          <title> {blog?.title} | The Local Feet </title>
        )}
        <meta name="description" content={blog?.subtitle} />
        <meta name="keywords" content={blog?.keywords} />
        <meta
          property="og:title"
          content={`${blog?.title} | The Local Feet `}
        />
        <meta property="og:description" content={blog?.subtitle} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/photography/${blog?.slug}`}
        />
        <meta property="og:image" content={urlFor(blog?.mainImage).url()} />
        <meta property="og:image:alt" content={blog?.title} />
      </Head>

      <CustomLayout links={links} currPage={blog.title}>
        <BlogTemplate
          blog={blog}
          others={otherBlogs}
          link="/photography"
          links={links}
          currPage={blog.title}
        />
      </CustomLayout>
    </>
  );
};

export default photoBlogBySlug;
