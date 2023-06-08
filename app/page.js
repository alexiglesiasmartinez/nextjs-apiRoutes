import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className="main">
      <h1>Welcome!</h1>
      <p>Here are all the operations you can do</p>
      <Link className={styles.option} href={"/users"}>Get all users</Link>
      <Link className={styles.option} href={"/posts"}>Get all posts</Link>
      <Link className={styles.option} href={"/comments"}>Get all comments</Link>
    </main>
  );
}
