import styles from "./PostById.module.css";

async function fetchPost(id) {
  const response = await fetch(
    `https://nextjs-api-routes-rosy.vercel.app/api/posts/${id}`
  );
  const courses = await response.json();
  return courses;
}

export default async function PostById({ id }) {
  const post = await fetchPost(id);
  return (
    <article>
      {
        <li className={styles.li} key={post.id}>
          <h3 className={styles.colorBlack}>{post.title}</h3>
          <p className={styles.colorBlack}>{post.body}</p>
        </li>
      }
    </article>
  );
}
