import Link from "next/link";
import styles from "./ListOfUsers.module.css";

async function fetchUsers() {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();
  return users;
}

export default async function ListOfUsers() {
  const listOfUsers = await fetchUsers();
  return (
    <>
      {listOfUsers.map((user) => (
        <li className={styles.li} key={user.id}>
          <Link className={styles.a} href={`/users/${user.id}`}>
            <p>
              {user.username} / {user.email}
            </p>
          </Link>
        </li>
      ))}
    </>
  );
}
