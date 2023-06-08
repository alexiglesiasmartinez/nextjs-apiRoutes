import Link from "next/link";
import ListOfComments from "./ListOfComments";

export default async function Comments() {
  return (
    <section className="main">
      <Link className="goBack" href={"/"}>
        Go back
      </Link>
      <h1>Comments:</h1>
      <ListOfComments />
    </section>
  );
}
