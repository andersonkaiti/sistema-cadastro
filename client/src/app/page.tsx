import { Suspense, lazy } from "react";
import styles from "./home.module.css";
import Loader from "@/components/loader/loader";

const Table = lazy(() => (
  import("@/components/table/table")
));

export default async function Home() {
  return (
    <main className={styles.mainContainer}>
      <Suspense fallback={<Loader/>}>
        <Table/>
      </Suspense>
    </main>
  );
}