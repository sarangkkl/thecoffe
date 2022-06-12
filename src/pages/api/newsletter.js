import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  apiVersion: "2021-06-24",
  useCdn: false,
  token: process.env.SANITY_NEWSLETTER_API_TOKEN,
};

const sanityClient = createClient(config);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email } = req.body;

    try {
      await sanityClient.create({
        _type: "newsletter",
        name: Name,
        email: Email,
      });
    } catch (e) {
      return res.status(500).send("Something wrong. Try again later.");
    }

    const mailBody = {
      Name,
      Email,
      Newsletters:
        "Manage list from admin-dashboard-thelocalfeet.sanity.studio/desk/newsletter",
    };

    try {
      await fetch(
        `${process.env.FORMSPEE_URL}/f/${process.env.FORMSPEE_NEWSLETTER_ID}`,
        {
          method: "POST",
          body: JSON.stringify(mailBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(201).send("Message sent successfully.");
    } catch (e) {
      return res.status(500).send("Something wrong. Try again later.");
    }
  }
}
