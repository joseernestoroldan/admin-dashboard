"use client";

import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MdTrendingUp, MdAccountBalanceWallet, MdLoop, MdList } from "react-icons/md";
import Image from "next/image";
import styles from "./transactions.module.css";

// Helpers to generate fake real-time data
const generateId = () => Math.random().toString(36).substr(2, 9);
const statuses = ["completed", "completed", "completed", "pending", "failed"] as const;
const names = [
  "Alice Johnson", "Bob Smith", "Charlie Davis", "Diana Evans", 
  "Ethan Garcia", "Fiona Hayes", "George King", "Hannah Lee",
  "Ian Miller", "Julia Nelson", "Kevin Owens", "Laura Perez"
];

type TransactionStatus = "completed" | "pending" | "failed";

interface Transaction {
  id: string;
  name: string;
  email: string;
  amount: number;
  status: TransactionStatus;
  date: string;
  isNew?: boolean;
}

interface ChartDataPoint {
  time: string;
  volume: number;
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [totalVolume, setTotalVolume] = useState(124500);
  const [activeUsers, setActiveUsers] = useState(142);
  const [mounted, setMounted] = useState(false);

  // Initial Data
  useEffect(() => {
    setMounted(true);
    const initialTxs: Transaction[] = Array.from({ length: 7 }).map((_, i) => ({
      id: generateId(),
      name: names[Math.floor(Math.random() * names.length)],
      email: `${names[Math.floor(Math.random() * names.length)].split(" ")[0].toLowerCase()}@example.com`,
      amount: parseFloat((Math.random() * 500 + 10).toFixed(2)),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: new Date(Date.now() - i * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }));
    
    const initialChart: ChartDataPoint[] = Array.from({ length: 20 }).map((_, i) => ({
      time: new Date(Date.now() - (20 - i) * 3000).toLocaleTimeString([], { second: '2-digit' }),
      volume: Math.floor(Math.random() * 1000) + 500
    }));

    setTransactions(initialTxs);
    setChartData(initialChart);
  }, []);

  // Real-time Update Simulation
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      // 1. Generate new transaction
      const isNewTx = Math.random() > 0.25; // 75% chance to generate a tx every interval
      
      if (isNewTx) {
        const newTx: Transaction = {
          id: generateId(),
          name: names[Math.floor(Math.random() * names.length)],
          email: `${names[Math.floor(Math.random() * names.length)].split(" ")[0].toLowerCase()}@example.com`,
          amount: parseFloat((Math.random() * 800 + 10).toFixed(2)),
          status: statuses[Math.floor(Math.random() * statuses.length)],
          date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          isNew: true
        };

        setTransactions((prev) => {
          const updated = [newTx, ...prev.map(t => ({ ...t, isNew: false }))].slice(0, 8);
          return updated;
        });

        if (newTx.status === "completed") {
          setTotalVolume((prev) => prev + newTx.amount);
        }
      }

      // 2. Update chart
      const nowMs = Date.now();
      setChartData((prev) => {
        const newPoint: ChartDataPoint = {
          time: new Date(nowMs).toLocaleTimeString([], { second: '2-digit' }),
          volume: isNewTx ? Math.floor(Math.random() * 1500) + 800 : Math.floor(Math.random() * 500) + 100
        };
        return [...prev.slice(1), newPoint];
      });

      // 3. Fluctuate active users slightly
      setActiveUsers((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        return Math.max(50, prev + change);
      });
    }, 2500); // update every 2.5 seconds

    return () => clearInterval(interval);
  }, [mounted]);

  // Don't render until mounted to avoid hydration mismatch on dates
  if (!mounted) return null;

  // Chart styling based on global CSS vars
  const chartColor = "#6366f1"; // primary-500
  const chartColorBg = "#1f2937"; // gray-800

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        
        {/* Main Chart Area */}
        <div className={styles.chartContainer}>
          <div className={styles.chartHeader}>
            <h2 className={styles.chartTitle}>Live Transaction Volume</h2>
            <div className={styles.chartLiveBadge}>
              <div className={styles.pulse}></div>
              LIVE
            </div>
          </div>
          
          <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColor} stopOpacity={0.6} />
                    <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="time" 
                  stroke="#9ca3af" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  minTickGap={20}
                />
                <YAxis 
                  stroke="#9ca3af" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}`}
                />
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(55, 65, 81, 0.4)" vertical={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: chartColorBg, 
                    borderRadius: "12px", 
                    border: "1px solid #374151", 
                    color: "#f3f4f6",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
                  }}
                  itemStyle={{ color: "#818cf8", fontWeight: "bold" }}
                  labelStyle={{ color: "#9ca3af", marginBottom: "8px" }}
                  cursor={{ stroke: 'rgba(99, 102, 241, 0.4)', strokeWidth: 2, strokeDasharray: '5 5' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="volume" 
                  stroke={chartColor} 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorVolume)" 
                  isAnimationActive={false} // Disable recharts animation for real-time smoothness
                  activeDot={{ r: 6, fill: "#818cf8", stroke: "#1f2937", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Column */}
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Total Processed</span>
              <MdAccountBalanceWallet size={24} color="var(--primary-400)" />
            </div>
            <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)', marginTop: '8px' }}>
              ${totalVolume.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: 'auto', paddingTop: '12px' }}>
              <MdTrendingUp size={18} /> <span style={{ fontWeight: 500 }}>+12.5% this hour</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Active Connections</span>
              <MdLoop size={24} color="var(--emerald-400)" />
            </div>
            <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)', marginTop: '8px' }}>
              {activeUsers}
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'auto', paddingTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div className={styles.pulse} style={{ width: '6px', height: '6px' }}></div>
              Nodes syncing...
            </div>
          </div>
        </div>
      </div>

      {/* Live Table */}
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h2 className={styles.tableTitle}>
            <MdList size={24} color="var(--primary-400)" />
            Live Event Stream
          </h2>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>User</td>
                <td>Email</td>
                <td>Amount</td>
                <td>Time</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className={tx.isNew ? styles.rowEnter : ""}>
                  <td>
                    <div className={styles.entity}>
                      <Image 
                        src={"/noavatar.png"} 
                        alt="User Avatar" 
                        width={32} 
                        height={32} 
                        className={styles.entityImage} 
                      />
                      {tx.name}
                    </div>
                  </td>
                  <td>{tx.email}</td>
                  <td className={styles.amount}>
                    ${tx.amount.toFixed(2)}
                  </td>
                  <td style={{ color: 'var(--color-text-primary)' }}>{tx.date}</td>
                  <td>
                    <span className={`${styles.status} ${styles[tx.status]}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "40px", color: "var(--color-text-secondary)" }}>
                    Waiting for incoming transactions...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
