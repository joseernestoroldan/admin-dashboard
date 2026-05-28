# Admin Dashboard — Modern Next.js Enterprise Solution

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-6.19-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

A high-performance, responsive admin dashboard built with the latest web technologies. Features interactive data visualizations, full CRUD operations, and a dark-mode glassmorphism UI.

---

## Key Features

- **React Compiler** — Leverages the new React Compiler (Forget) for automatic memoization and optimized re-renders.
- **Server Actions** — Direct database mutations via Next.js Server Actions with zero client-side boilerplate.
- **Interactive Dashboards** — Six analytics views using Recharts (Line, Bar, Pie, Area, Composed, Radar, Treemap).
- **Full CRUD** — Server Action–driven create, update, and delete operations for Users and Products.
- **URL-Driven State** — Search and pagination managed entirely through URL search params for shareable, bookmarkable views.
- **Debounced Search** — Client-side search with 300ms debounce via `use-debounce`.
- **Real-Time Streaming** — Live transaction simulation with dynamic AreaChart updates.
- **Responsive Dark UI** — Custom CSS Modules design system with glassmorphism effects and smooth transitions.
- **Type Safety** — Fully typed with TypeScript 5, strict mode, and Prisma-generated client types.

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16.1](https://nextjs.org/) | App Router, React Compiler, Server Components |
| [React 19.2](https://react.dev/) | Concurrent features, Server Components, Actions |
| [TypeScript 5](https://www.typescriptlang.org/) | Strict type checking throughout |
| [Recharts 3.8](https://recharts.org/) | Composable charting library |
| [React Icons 5.6](https://react-icons.github.io/react-icons/) | Material Design icon set |
| [use-debounce 10.1](https://www.npmjs.com/package/use-debounce) | Debounced search input |
| CSS Modules | Scoped, component-level styles with custom design tokens |

### Backend & Database
| Technology | Purpose |
|---|---|
| [Prisma 6.19](https://www.prisma.io/) | Type-safe ORM with MongoDB provider |
| [MongoDB](https://www.mongodb.com/) | Document database (Atlas / Local) |
| [BcryptJS](https://www.npmjs.com/package/bcryptjs) | Password hashing for user mutations |

### Tooling
| Tool | Purpose |
|---|---|
| [ESLint 9](https://eslint.org/) | Flat config with Next.js core-web-vitals rules |
| [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) | Environment variable management |
| [Babel React Compiler](https://react.dev/learn/react-compiler) | Build-time optimization plugin |

---

## Project Structure

```
admin-dashboard/
├── app/
│   ├── actions/actions.ts        # Server Actions (CRUD for Users & Products)
│   ├── dashboard/                # Protected dashboard area
│   │   ├── layout.tsx            # Dashboard layout (Sidebar, Navbar, Footer)
│   │   ├── page.tsx              # Home: metric cards, chart, transactions
│   │   ├── users/                # User list, add, detail/edit pages
│   │   ├── products/             # Product list, add, detail/edit pages
│   │   ├── reports/              # Reports analytics (ComposedChart + RadarChart)
│   │   ├── revenue/              # Revenue analytics (BarChart + PieChart)
│   │   ├── teams/                # Teams management (Treemap + PieChart)
│   │   └── transactions/         # Live real-time transaction stream
│   ├── login/                    # Login page (UI scaffold)
│   ├── globals.css               # Design system: CSS variables, reset, scrollbar
│   ├── layout.tsx                # Root layout (Inter + JetBrains Mono fonts)
│   └── page.tsx                  # Landing page
├── components/                   # Reusable UI components
│   ├── card/                     # Metric display card
│   ├── chart/                    # Weekly recap LineChart
│   ├── footer/                   # Dashboard footer
│   ├── loginForm/                # Login form (not yet wired)
│   ├── navbar/                   # Top navbar with search + notifications
│   ├── pagination/               # Prev/Next pagination
│   ├── rightbar/                 # Announcement cards
│   ├── search/                   # Debounced search input
│   ├── sidebar/                  # Navigation sidebar
│   └── transactions/             # Latest transactions table
├── data/                         # Seed data (users.json, products.json)
├── db/                           # Prisma client singleton + query functions
├── prisma/schema.prisma          # Database schema (User & Product models)
├── public/                       # Static assets (images)
├── styles/                       # Shared CSS Modules (table, form, detail, skeleton)
├── utils/                        # Sidebar menu config, dashboard card metrics
├── types.ts                      # Global TypeScript type definitions
├── next.config.ts                # Next.js configuration
├── eslint.config.mjs             # ESLint 9 flat config
└── tsconfig.json                 # TypeScript compiler options
```

---

## Data Models

### User
| Field | Type | Notes |
|---|---|---|
| `id` | `String` | MongoDB ObjectId |
| `username` | `String` | Unique |
| `email` | `String` | Unique |
| `password` | `String` | Bcrypt-hashed |
| `isAdmin` | `Boolean` | RBAC flag |
| `isActive` | `Boolean` | Account status |
| `img` | `String?` | Avatar URL |
| `address` | `String` | |
| `phone` | `String` | |
| `createdAt` | `DateTime` | |
| `updatedAt` | `DateTime` | |

### Product
| Field | Type | Notes |
|---|---|---|
| `id` | `String` | MongoDB ObjectId |
| `title` | `String` | Unique |
| `price` | `String` | |
| `stock` | `Int` | |
| `color` | `String` | |
| `size` | `String` | |
| `desc` | `String` | |
| `img` | `String?` | Image URL |
| `createdAt` | `DateTime` | |
| `updatedAt` | `DateTime` | |

---

## Getting Started

### Prerequisites
- **Node.js** 18+ (20+ recommended)
- **MongoDB** instance (Atlas or local)
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/joseernestoroldan/admin-dashboard.git
cd admin-dashboard
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
DATABASE_URL="mongodb+srv://<user>:<password>@cluster.mongodb.net/admin-dashboard?retryWrites=true&w=majority"
```

### Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the Prisma client is generated automatically on `postinstall`.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Generate Prisma client + production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Architecture Decisions

- **No API Routes** — All mutations go through Server Actions; data fetching happens directly in Server Components via Prisma.
- **No Client-State Library** — URL search params drive search and pagination state; no Redux or Zustand.
- **Pure CSS Modules** — No Tailwind, no CSS-in-JS; a single set of custom properties in `globals.css` keeps the design system consistent.
- **Auth Scaffold** — Login UI and bcryptjs are in place, but session management is **not yet implemented**. This is the next priority for the project.
- **Image Optimization** — Disabled (`unoptimized: true`) to simplify deployment on static hosts.

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing / hero page |
| `/login` | Authentication (UI only) |
| `/dashboard` | Home — metric cards, chart, transactions |
| `/dashboard/users` | User list with search + pagination |
| `/dashboard/users/add` | Create user |
| `/dashboard/users/[id]` | View / edit user |
| `/dashboard/products` | Product list with search + pagination |
| `/dashboard/products/add` | Create product |
| `/dashboard/products/[id]` | View / edit product |
| `/dashboard/reports` | ComposedChart + RadarChart analytics |
| `/dashboard/revenue` | BarChart + PieChart revenue analytics |
| `/dashboard/teams` | Treemap + PieChart team management |
| `/dashboard/transactions` | Live real-time transaction stream |

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with <a href="https://nextjs.org/">Next.js</a> by <a href="https://github.com/joseernestoroldan">Jose Ernesto Roldan</a>
</p>
