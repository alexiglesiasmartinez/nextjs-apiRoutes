import Link from "next/link";
import styles from "./ListOfPosts.module.css";

async function fetchPosts() {
  const response = await fetch(`http://localhost:3000/api/posts`);
  const posts = await response.json();
  return posts;
}

export default async function ListOfPosts() {
  const listOfPosts = await fetchPosts();
  return (
    <>
      {listOfPosts.map((post) => (
        <li className={styles.li} key={post.id}>
          <Link className={styles.a} href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </Link>
        </li>
      ))}
    </>
  );
}
