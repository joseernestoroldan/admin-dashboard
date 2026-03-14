"use client";

import { useState, useEffect } from "react";
import { 
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";
import { 
  MdAnalytics, MdAssignment, MdCloudDownload, MdShowChart, MdPieChart, 
  MdSpeed, MdSecurity, MdBugReport 
} from "react-icons/md";
import styles from "./reports.module.css";

// Mock Data for ComposedChart
const analyticalData = [
  { name: "Week 1", traffic: 4000, conversion: 2400, bounce: 2400 },
  { name: "Week 2", traffic: 3000, conversion: 1398, bounce: 2210 },
  { name: "Week 3", traffic: 2000, conversion: 9800, bounce: 2290 },
  { name: "Week 4", traffic: 2780, conversion: 3908, bounce: 2000 },
  { name: "Week 5", traffic: 1890, conversion: 4800, bounce: 2181 },
  { name: "Week 6", traffic: 2390, conversion: 3800, bounce: 2500 },
  { name: "Week 7", traffic: 3490, conversion: 4300, bounce: 2100 },
];

// Mock Data for RadarChart
const radarData = [
  { subject: 'Performance', A: 120, B: 110, fullMark: 150 },
  { subject: 'Security', A: 98, B: 130, fullMark: 150 },
  { subject: 'Reliability', A: 86, B: 130, fullMark: 150 },
  { subject: 'UI/UX', A: 99, B: 100, fullMark: 150 },
  { subject: 'Scalability', A: 85, B: 90, fullMark: 150 },
  { subject: 'Accessibility', A: 65, B: 85, fullMark: 150 },
];

const reportList = [
  { id: 1, name: "Monthly Performance Review", date: "2026-03-01", status: "Completed", type: "PDF" },
  { id: 2, name: "Quarterly Growth Analysis", date: "2026-02-15", status: "Archived", type: "Excel" },
  { id: 3, name: "System Security Audit", date: "2026-02-28", status: "In Review", type: "PDF" },
  { id: 4, name: "User Retention Study", date: "2026-03-10", status: "Draft", type: "CSV" },
  { id: 5, name: "Infrastructure Cost Optimization", date: "2026-03-12", status: "Active", type: "PDF" },
];

export default function ReportsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>System Intelligence Reports</h1>
        <p className={styles.subtitle}>Detailed analysis and performance metrics across all modules.</p>
      </div>

      {/* Stats Overview */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className={styles.statLabel}>Avg. Session Depth</span>
            <MdSpeed size={20} color="var(--primary-400)" />
          </div>
          <span className={styles.statValue}>12.4m</span>
          <span className={`${styles.statSub} ${styles.positive}`}>+14% vs avg.</span>
        </div>

        <div className={styles.statCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className={styles.statLabel}>Conversion Rate</span>
            <MdShowChart size={20} color="var(--emerald-400)" />
          </div>
          <span className={styles.statValue}>3.82%</span>
          <span className={`${styles.statSub} ${styles.positive}`}>+0.5% growth</span>
        </div>

        <div className={styles.statCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className={styles.statLabel}>Security Score</span>
            <MdSecurity size={20} color="var(--amber-400)" />
          </div>
          <span className={styles.statValue}>98/100</span>
          <span className={`${styles.statSub} ${styles.positive}`}>Excellent</span>
        </div>

        <div className={styles.statCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className={styles.statLabel}>Bug Reports</span>
            <MdBugReport size={20} color="var(--rose-400)" />
          </div>
          <span className={styles.statValue}>24 Active</span>
          <span className={`${styles.statSub} ${styles.negative}`}>+2 critical</span>
        </div>
      </div>

      {/* Main Charts */}
      <div className={styles.mainCharts}>
        
        {/* Composed Chart */}
        <div className={styles.chartCard} style={{ gridColumn: 'span 1' }}>
          <h2 className={styles.chartTitle}>
            <MdAnalytics size={24} color="var(--primary-400)" />
            Metric Correlation Analysis
          </h2>
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={analyticalData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="#374151" vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1f2937", borderRadius: "12px", border: "1px solid #374151" }}
                />
                <Legend />
                <Area type="monotone" dataKey="traffic" name="Traffic" fill="rgba(99, 102, 241, 0.1)" stroke="var(--primary-400)" />
                <Bar dataKey="conversion" name="Conversions" barSize={20} fill="var(--emerald-500)" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="bounce" name="Bounce Rate" stroke="var(--rose-400)" strokeWidth={2} dot={{ r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            <MdPieChart size={24} color="var(--amber-400)" />
            Capability Score
          </h2>
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="subject" stroke="#9ca3af" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#4b5563" fontSize={10} />
                <Radar name="Current Period" dataKey="A" stroke="var(--primary-500)" fill="var(--primary-500)" fillOpacity={0.4} />
                <Radar name="Previous Period" dataKey="B" stroke="var(--emerald-500)" fill="var(--emerald-500)" fillOpacity={0.2} />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", border: "1px solid #374151" }} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Reports Table */}
      <div className={styles.reportSection}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className={styles.chartTitle}>
            <MdAssignment size={24} color="var(--primary-400)" />
            Repository Reports
          </h2>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Report Name</td>
                <td>Generated Date</td>
                <td>Status</td>
                <td>Format</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {reportList.map((report) => (
                <tr key={report.id}>
                  <td className={styles.reportName}>{report.name}</td>
                  <td style={{ color: 'var(--color-text-secondary)' }}>{report.date}</td>
                  <td>
                    <span style={{ 
                      fontSize: '10px', 
                      backgroundColor: report.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(55, 65, 81, 0.3)',
                      color: report.status === 'Completed' ? 'var(--emerald-400)' : 'var(--color-text-secondary)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      fontWeight: 700
                    }}>
                      {report.status}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{report.type}</td>
                  <td>
                    <button className={styles.downloadBtn}>
                      <MdCloudDownload size={16} />
                      Export
                    </button>
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
