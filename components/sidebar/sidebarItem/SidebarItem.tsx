"use client"
import { MenuItem } from "@/utils/menuItems";
import Link from "next/link";
import styles from "./SidebarItem.module.css";
import { usePathname } from "next/navigation";

const SidebarItem = ({item}: {item: MenuItem}) => {
    const pathname = usePathname()
  return (
    <li className={styles.item} key={item.title}>
        <Link href={item.path} className={`${styles.link} ${pathname === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    </li>
  )
}

export default SidebarItem