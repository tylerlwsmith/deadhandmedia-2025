import { defineCollection, z } from "astro:content";
import { toCamelCase } from "./helpers/to-camel-case";

type DevApiUser = {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  user_id: number;
  website_url: string | null;
  profile_image: string;
  profile_image_90: string;
};

type DevApiPost = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: DevApiUser;
};

const UserSchema = z.object({
  name: z.string(),
  username: z.string(),
  twitterUsername: z.string().nullable(),
  githubUsername: z.string().nullable(),
  userId: z.number(),
  websiteUrl: z.string().nullable(),
  profileImage: z.string().nullable().optional(),
  profileImage90: z.string().nullable().optional(),
});

const PostSchema = z.object({
  typeOf: z.string(),
  id: z.string(),
  title: z.string(),
  description: z.string(),
  readablePublishDate: z.string(),
  slug: z.string(),
  path: z.string(),
  url: z.string(),
  commentsCount: z.number(),
  publicReactionsCount: z.number(),
  collectionId: z.number().nullable(),
  publishedTimestamp: z.string(),
  positiveReactionsCount: z.number(),
  coverImage: z.string().nullable(),
  socialImage: z.string(),
  canonicalUrl: z.string(),
  createdAt: z.string(),
  editedAt: z.string().nullable(),
  crosspostedAt: z.string().nullable(),
  publishedAt: z.string(),
  lastCommentAt: z.string(),
  readingTimeMinutes: z.number(),
  tagList: z.array(z.string()),
  tags: z.string(),
  user: UserSchema,
});

export type Post = z.infer<typeof PostSchema>;

const blog = defineCollection({
  loader: async () => {
    const response = await fetch(
      `https://dev.to/api/articles?username=tylerlwsmith&per_page=1000`
    );

    const data: DevApiPost[] = await response.json();

    const result = toCamelCase(data).map((data: any) => ({
      ...data,
      id: String(data.id), // Astro IDs _must_ be strings for unknown reason.
    }));

    return result;
  },
  schema: PostSchema,
});

export const collections = { blog };
