import Link from "next/link";
import styles from "./Navigation.module.css";

const link = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Users",
    route: "/users",
  },
  {
    label: "Posts",
    route: "/posts",
  },
  {
    label: "Comments",
    route: "/comments",
  },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {link.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
