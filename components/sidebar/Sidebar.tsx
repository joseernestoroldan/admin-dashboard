import styles from "./Sidebar.module.css";
import { sidebarItems, MenuItem, MenuSection } from "@/utils/menuItems";
import SidebarItem from "./sidebarItem/SidebarItem";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src="/user.png" alt="user" width={50} height={50}  className={styles.userImage}/>
        <div className={styles.details}>
          <p className={styles.name}>John Doe</p>
          <p className={styles.role}>Admin</p>
        </div>
      </div>
      <ul className={styles.list}>
        {sidebarItems.map((section: MenuSection) => (
          <li key={section.title}>
              <h3 className={styles.title}>{section.title}</h3>
            <ul>
              {section.list.map((item: MenuItem) => (
                <SidebarItem key={item.title} item={item} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar