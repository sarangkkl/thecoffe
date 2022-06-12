import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  apiVersion: "2021-06-24",
  useCdn: false,
  token: process.env.SANITY_COMMENT_API_TOKEN,
};

const sanityClient = createClient(config);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, post, Name, Email, Message } = req.body;

    try {
      await sanityClient.create({
        _type: "comments",
        post: {
          _type: "reference",
          _ref: id,
        },
        isApproved: false,
        name: Name,
        email: Email,
        comment: Message,
      });
    } catch (e) {
      return res.status(500).send("Something wrong. Try again later.");
    }

    const mailBody = {
      Name,
      Email,
      Post: post,
      Comment: Message,
      Approvable:
        "Approve comment from admin-dashboard-thelocalfeet.sanity.studio/desk/comments",
    };

    try {
      await fetch(
        `${process.env.FORMSPEE_URL}/f/${process.env.FORMSPEE_COMMENT_SUBMISSION_ID}`,
        {
          method: "POST",
          body: JSON.stringify(mailBody),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      return res.status(200).send("comment submitted.");
    } catch (e) {
      return res.status(500).send({ data: err.message });
    }
  }
}
