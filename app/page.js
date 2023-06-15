/*import { authOptions } from "/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";*/

//import { useSession } from "next-auth/react";

import Link from "next/link";
import styles from './page.module.css';
import React from "react";

export default async function Home() {

  // SERVER SIDE RENDERING
  /*const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }*/

  // CLIENT SIDE RENDERING
  // const { data: session, status } = useSession({
  //   required: true,
  // });
  // if (status === "loading") {
  //   return <></>;
  // }

  return (
    <main className="main">
      <div className="main_welcome">
        <h1>Welcome</h1>
      </div>
      <p>Here are all the operations you can do</p>
      <Link className={styles.option} href={"/users"}>Get all users</Link>
      <Link className={styles.option} href={"/posts"}>Get all posts</Link>
      <Link className={styles.option} href={"/comments"}>Get all comments</Link>
    </main>
  );
}
