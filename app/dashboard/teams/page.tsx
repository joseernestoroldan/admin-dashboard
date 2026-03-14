"use client";

import { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, Treemap, PieChart, Pie
} from "recharts";
import { 
  MdGroups, MdWork, MdCheckCircle, MdWarning, MdError, MdMoreHoriz,
  MdSettings, MdPersonAdd, MdTimeline
} from "react-icons/md";
import Image from "next/image";
import styles from "./teams.module.css";

// Mock Data
const treemapData = [
  { name: 'Engineering', size: 45, color: '#6366f1' },
  { name: 'Marketing', size: 22, color: '#10b981' },
  { name: 'Product', size: 18, color: '#38bdf8' },
  { name: 'Design', size: 15, color: '#fb7185' },
  { name: 'Finance', size: 12, color: '#f59e0b' },
  { name: 'HR', size: 8, color: '#9ca3af' },
];

const healthData = [
  { name: 'Healthy', value: 72, color: '#10b981' },
  { name: 'Warning', value: 18, color: '#f59e0b' },
  { name: 'Critical', value: 10, color: '#f43f5e' },
];

const teams = [
  { 
    id: 1, 
    name: "Platform Core", 
    lead: "Alex Rivera", 
    members: 12, 
    project: "Infrastructure v2", 
    status: "onTrack", 
    progress: 85 
  },
  { 
    id: 2, 
    name: "Frontend UI", 
    lead: "Sarah Chen", 
    members: 8, 
    project: "Design System", 
    status: "onTrack", 
    progress: 92 
  },
  { 
    id: 3, 
    name: "Growth & Ads", 
    lead: "Marcus Thorne", 
    members: 15, 
    project: "Campaign Dashboard", 
    status: "atRisk", 
    progress: 64 
  },
  { 
    id: 4, 
    name: "Cloud Ops", 
    lead: "Elena Volkov", 
    members: 6, 
    project: "Multi-region Deploy", 
    status: "behind", 
    progress: 42 
  },
  { 
    id: 5, 
    name: "Data Science", 
    lead: "Samir Gupta", 
    members: 10, 
    project: "ML Insights", 
    status: "onTrack", 
    progress: 78 
  },
];

const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, payload, colors, rank, name } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'rgba(255,255,255,0)',
          stroke: '#1a2332',
          strokeWidth: 2 / (depth + 1),
          strokeOpacity: 1,
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#fff"
          fontSize={12}
          fontWeight={600}
        >
          {name}
        </text>
      ) : null}
    </g>
  );
};

export default function TeamsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <div>
          <h1 className={styles.title}>Unified Teams</h1>
          <p className={styles.subtitle}>Manage departments, monitor pod health, and track organizational velocity.</p>
        </div>
        <button style={{ 
          display: 'flex', alignItems: 'center', gap: '8px', 
          padding: '10px 16px', borderRadius: '8px', 
          backgroundColor: 'var(--primary-600)', color: 'white', 
          border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px'
        }}>
          <MdPersonAdd size={20} />
          Add Member
        </button>
      </div>

      {/* Stats Cards */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Active Teams</span>
          <span className={styles.statValue}>24</span>
          <div className={styles.statFooter}>
            <MdCheckCircle color="var(--emerald-400)" />
            <span style={{ color: 'var(--emerald-400)', fontWeight: 600 }}>+2 this month</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Members</span>
          <span className={styles.statValue}>1,248</span>
          <div className={styles.statFooter}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Across all departments</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Org. Velocity</span>
          <span className={styles.statValue}>94%</span>
          <div className={styles.statFooter}>
            <MdTimeline color="var(--primary-400)" />
            <span style={{ color: 'var(--color-text-primary)' }}>Optimal performance</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className={styles.charts}>
        {/* Treemap for Distribution */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <MdGroups size={24} color="var(--primary-400)" />
            <span className={styles.chartTitle}>Department Distribution</span>
          </div>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={treemapData}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#1a2332"
                fill="#8884d8"
                content={<CustomizedContent colors={['#6366f1', '#10b981', '#38bdf8', '#fb7185', '#f59e0b', '#9ca3af']} />}
              />
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut for Health */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <MdWork size={24} color="var(--emerald-400)" />
            <span className={styles.chartTitle}>Project Health</span>
          </div>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={healthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {healthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #374151', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Teams Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MdAssignmentTurnedIn size={24} color="var(--primary-400)" />
            <h2 className={styles.chartTitle}>Operational Pods</h2>
          </div>
          <MdMoreHoriz size={24} color="var(--color-text-secondary)" style={{ cursor: 'pointer' }} />
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Team / Lead</td>
                <td>Members</td>
                <td>Current Project</td>
                <td>Status</td>
                <td>Progress</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id}>
                  <td>
                    <div className={styles.teamName}>
                      <span className={styles.teamLabel}>{team.name}</span>
                      <span className={styles.teamLead}>{team.lead}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.memberAvatars}>
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className={styles.avatar}>
                          <Image src="/noavatar.png" alt="Member" width={32} height={32} />
                        </div>
                      ))}
                      <div className={styles.avatar}>
                        <span className={styles.avatarCount}>+{team.members - 3}</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                    {team.project}
                  </td>
                  <td>
                    <span className={`${styles.status} ${styles[team.status]}`}>
                      {team.status === 'onTrack' && <MdCheckCircle size={14} style={{ marginRight: '4px' }} />}
                      {team.status === 'atRisk' && <MdWarning size={14} style={{ marginRight: '4px' }} />}
                      {team.status === 'behind' && <MdError size={14} style={{ marginRight: '4px' }} />}
                      {team.status.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </td>
                  <td>
                    <div style={{ minWidth: '100px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '2px' }}>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Workflow</span>
                        <span style={{ color: 'var(--color-text-primary)', fontWeight: 700 }}>{team.progress}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${team.progress}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <MdSettings size={18} color="var(--color-text-secondary)" style={{ cursor: 'pointer' }} />
                      <MdMoreHoriz size={18} color="var(--color-text-secondary)" style={{ cursor: 'pointer' }} />
                    </div>
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

// Dummy icon for internal use in the component since MdAssignmentTurnedIn wasn't in imports
function MdAssignmentTurnedIn({ size, color, style }: any) {
  return <MdCheckCircle size={size} color={color} style={style} />;
}
