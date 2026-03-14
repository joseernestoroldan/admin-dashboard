"use client";

import { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from "recharts";
import { 
  MdAttachMoney, MdShowChart, MdPieChart, MdArrowUpward, MdArrowDownward,
  MdLayers, MdTrendingUp 
} from "react-icons/md";
import styles from "./revenues.module.css";

// Mock Data
const monthlyData = [
  { month: "Jan", revenue: 4500, target: 4000 },
  { month: "Feb", revenue: 5200, target: 4200 },
  { month: "Mar", revenue: 4800, target: 4500 },
  { month: "Apr", revenue: 6100, target: 4800 },
  { month: "May", revenue: 5900, target: 5000 },
  { month: "Jun", revenue: 7200, target: 5500 },
  { month: "Jul", revenue: 8100, target: 6000 },
];

const distributionData = [
  { name: "Subscriptions", value: 5500, color: "#6366f1" },
  { name: "Direct Sales", value: 2500, color: "#10b981" },
  { name: "Advertising", value: 1200, color: "#f59e0b" },
  { name: "Other", value: 600, color: "#9ca3af" },
];

const topProducts = [
  { id: 1, name: "Premium SaaS Plan", sales: 1240, growth: "+15%" },
  { id: 2, name: "Enterprise API", sales: 850, growth: "+8%" },
  { id: 3, name: "Data Analytics Suite", sales: 620, growth: "+12%" },
  { id: 4, name: "Developer Tools", sales: 410, growth: "-3%" },
  { id: 5, name: "UI Component Library", sales: 380, growth: "+22%" },
];

export default function RevenuesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Revenue Analytics</h1>

      {/* Summary Cards */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.cardLabel}>Total Revenue</span>
            <MdAttachMoney size={24} color="var(--primary-400)" />
          </div>
          <span className={styles.cardValue}>$41,800.00</span>
          <div className={`${styles.cardTrend} ${styles.trendUp}`}>
            <MdArrowUpward size={16} />
            <span>+18.2% vs last month</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.cardLabel}>Projected Earnings</span>
            <MdTrendingUp size={24} color="var(--emerald-400)" />
          </div>
          <span className={styles.cardValue}>$52,450.00</span>
          <div className={`${styles.cardTrend} ${styles.trendUp}`}>
            <MdArrowUpward size={16} />
            <span>+12.5% expected growth</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.cardLabel}>Subscription Rate</span>
            <MdShowChart size={24} color="var(--amber-400)" />
          </div>
          <span className={styles.cardValue}>84.5%</span>
          <div className={`${styles.cardTrend} ${styles.trendDown}`}>
            <MdArrowDownward size={16} />
            <span>-2.1% volatility</span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className={styles.chartsGrid}>
        {/* Bar Chart: Monthly Revenue */}
        <div className={styles.chartCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MdLayers size={20} color="var(--primary-400)" />
            <h2 className={styles.chartTitle}>Monthly Performance</h2>
          </div>
          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(55, 65, 81, 0.3)" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="#9ca3af" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#9ca3af" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(val) => `$${val}`}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
                  contentStyle={{ 
                    backgroundColor: "#1f2937", 
                    borderRadius: "12px", 
                    border: "1px solid #374151" 
                  }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar 
                  dataKey="revenue" 
                  name="Actual Revenue" 
                  fill="var(--primary-500)" 
                  radius={[4, 4, 0, 0]} 
                  barSize={32}
                />
                <Bar 
                  dataKey="target" 
                  name="Target Goal" 
                  fill="rgba(99, 102, 241, 0.2)" 
                  radius={[4, 4, 0, 0]} 
                  barSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Revenue Sources */}
        <div className={styles.chartCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MdPieChart size={20} color="var(--emerald-400)" />
            <h2 className={styles.chartTitle}>Revenue Sources</h2>
          </div>
          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#1f2937", 
                    borderRadius: "12px", 
                    border: "1px solid #374151" 
                  }}
                />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Performing Table */}
      <div className={styles.tableSection}>
        <h2 className={styles.chartTitle}>Top Performing Products</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Product Name</td>
                <td>Units Sold</td>
                <td>Growth</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p) => (
                <tr key={p.id}>
                  <td className={styles.productName}>{p.name}</td>
                  <td>{p.sales.toLocaleString()}</td>
                  <td className={p.growth.startsWith('+') ? styles.growth : styles.trendDown}>
                    {p.growth}
                  </td>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '6px', 
                      background: 'rgba(16, 185, 129, 0.1)', 
                      color: 'var(--emerald-400)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      fontWeight: 700
                    }}>
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
