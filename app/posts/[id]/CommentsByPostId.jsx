import styles from "./CommentsByPostId.module.css";

async function fetchComments(id) {
  const response = await fetch(
    `https://nextjs-api-routes-rosy.vercel.app/api/posts/${id}/comments`
  );
  const comments = await response.json();
  return comments;
}

export default async function CommentsByPostId({ id }) {
  const comments = await fetchComments(id);
  return (
    <article>
      {comments.map((comment) => (
        <li className={styles.li} key={comment.id}>
          <h3 className={styles.colorBlack}>{comment.email}</h3>
          <p className={styles.colorBlack}>{comment.body}</p>
        </li>
      ))}
    </article>
  );
}
