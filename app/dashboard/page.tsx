import styles from "./page.dashboard.module.css";
import Card from "@/components/card/Card";
import { cards } from "@/utils/dataCards";
import Chart from "@/components/chart/Chart";
import Transactions from "@/components/transactions/Transactions";
import Rightbar from "@/components/rightbar/Rightbar";

const DashboardPage = () => {
  return (
     <div className={styles.wrapper}>
      <div className={styles.main}>
         <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
     </div>
  )
}

export default DashboardPage