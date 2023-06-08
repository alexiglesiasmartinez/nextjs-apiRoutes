import Link from "next/link";
import PostByUser from "./PostByUser";

export default async function ContentByUserId({ params }) {
  const { id } = params;
  return (
    <section className="main">
      <Link className="goBack" href={"/users"}>
        Go back
      </Link>
      <h1>User's posts:</h1>
      <PostByUser id={id} />
    </section>
  );
}
