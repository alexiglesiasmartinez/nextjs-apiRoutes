import Link from "next/link";
import styles from "./PostByUser.module.css";

async function fetchPosts() {
  const response = await fetch(
    "https://nextjs-api-routes-rosy.vercel.app/api/posts"
  );
  const data = await response.json();
  return data;
}

export default async function PostByUser({ id }) {
  const posts = await fetchPosts();
  const userPosts = posts.filter((obj) => obj.userId == id);

  return (
    <article>
      {userPosts.map((userPost) => (
        <li className={styles.li} key={userPost.id}>
          <Link className={styles.a} href={`/posts/${userPost.id}`}>
            <h3 className={styles.colorBlack}>{userPost.title}</h3>
            <p className={styles.colorBlack}>{userPost.body}</p>
          </Link>
        </li>
      ))}
    </article>
  );
}
