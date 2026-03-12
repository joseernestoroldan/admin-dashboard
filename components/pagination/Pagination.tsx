"use client";

import styles from "./Pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 5;

  const pageNumber = parseInt(page);
  const hasPrev = ITEM_PER_PAGE * (pageNumber - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (pageNumber - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: "prev" | "next") => {
    const newPage = type === "prev" ? pageNumber - 1 : pageNumber + 1;
    params.set("page", newPage.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}>
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
