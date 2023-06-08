import Link from "next/link";
import PostById from "./PostById";
import CommentsByPostId from "./CommentsByPostId";

export default async function PostPage({ params }) {
  const { id } = params;
  return (
    <section className="main">
      <Link className="goBack" href={"/posts"}>
        Go back
      </Link>
      <h1>Post:</h1>
      <PostById id={id} />
      <h1>Comments:</h1>
      <CommentsByPostId id={id} />
    </section>
  );
}
