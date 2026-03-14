"use client";

import styles from "@/styles/table-page.module.css";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>Something went wrong!</h2>
      <p style={{ marginBottom: "30px", color: "var(--color-text-secondary)" }}>We couldn't load the products.</p>
      <button
        className={styles.addButton}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
