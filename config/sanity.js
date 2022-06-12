import {
  createImageUrlBuilder,
  createClient,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  apiVersion: "2021-06-24",
  useCdn: process.env.NODE_ENV === "production" ? true : false,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const Portabletext = createPortableTextComponent({
  ...config,
  serializers: {},
});
