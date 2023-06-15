import Link from "next/link";
import styles from "./ListOfComments.module.css";

async function fetchComments() {
  const response = await fetch(
    "https://nextjs-api-routes-rosy.vercel.app/api/comments"
  );
  const comments = await response.json();
  return comments;
}

export default async function ListOfUsers() {
  const listOfUsers = await fetchComments();
  return (
    <>
      {listOfUsers.map((comment) => (
        <li className={styles.li} key={comment.id}>
          <h3 className={styles.colorBlack}>{comment.email}</h3>
          <p className={styles.colorBlack}>{comment.body}</p>
        </li>
      ))}
    </>
  );
}
