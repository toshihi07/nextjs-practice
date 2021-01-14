import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      Read{" "}
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
    </div>
  );
}
