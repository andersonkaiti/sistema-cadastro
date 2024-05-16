import { Suspense } from "react";
import styles from "./home.module.css";
import Table from "@/components/table/table";
import Loader from "@/components/loader/loader";

export default async function Home() {
  return (
    <main className={styles.mainContainer}>
      <Suspense fallback={<Loader/>}>
        <Table/>
      </Suspense>
    </main>
  );
}