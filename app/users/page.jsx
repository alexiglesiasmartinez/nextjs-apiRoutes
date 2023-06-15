"use client";

import Link from "next/link";
import ListOfUsers from "./ListOfUsers";

export default async function Users() {
  return (
    <section className="main">
      <Link className="goBack" href={"/"}>
        Go back
      </Link>
      <h1>Users:</h1>
      <ListOfUsers />
    </section>
  );
}
