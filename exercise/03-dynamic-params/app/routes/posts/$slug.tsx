import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { marked } from "marked";
import { json } from "stream/consumers";
import { getPost } from "~/models/post.server";

export async function loader({ params }: LoaderArgs) {
  if (!params.slug) {
    throw new Error("Missing slug");
  }
  const post = await getPost(params.slug as string);

  if (!post) {
    throw new Error("Post not found");
  }
  const html = marked(post.markdown);

  return json({ post, html });
  // return post;
}

export default function PostRoute() {
  // const data = useLoaderData<typeof loader>();
  const { title }: any = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
    </main>
  );
}
