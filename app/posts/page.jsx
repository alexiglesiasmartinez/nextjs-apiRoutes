import Link from "next/link";
import ListOfPosts from "./ListOfPosts";

export default async function Posts() {
  return (
    <section className="main">
      <Link className="goBack" href={"/"}>
        Go back
      </Link>
      <h1>Posts:</h1>
      <ListOfPosts />
    </section>
  );
}
