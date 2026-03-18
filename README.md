# Admin Dashboard - Modern Next.js Enterprise Solution

![Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

A high-performance, responsive, and feature-rich Admin Dashboard built with the latest technologies. This project demonstrates a robust implementation of modern web standards, focuses on scalability, and provides a seamless user experience for managing enterprise data.

---

## 🚀 Key Features

- **🔐 Secure Authentication**: Robust login system with session management and password hashing (BcryptJS).
- **📊 Interactive Data Visualization**: Dynamic charts and analytics using `Recharts` for real-time insights.
- **🛠 Full CRUD Operations**: Comprehensive management for Users and Products with advanced filtering and pagination.
- **⚡ Server Actions**: Modern data fetching and mutation patterns using Next.js Server Actions for optimal performance.
- **📱 Responsive Design**: Fully optimized for mobile and desktop, ensuring a consistent experience across all devices.
- **🎨 Glassmorphism UI**: Beautifully crafted interface with modern CSS techniques and smooth transitions.
- **🛡 Type Safety**: Fully typed codebase with TypeScript for enhanced developer experience and error prevention.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Vanilla CSS (Modern CSS Modules)

### Backend & Database
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Security**: [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```bash
admin-dashboard/
├── app/                  # Next.js App Router (Pages & API)
│   ├── actions/          # Server Actions for mutations
│   ├── dashboard/        # Dashboard layout and routes
│   │   ├── users/        # User management views
│   │   ├── products/     # Product management views
│   │   └── reports/      # Data visualization views
│   ├── login/            # Authentication views
│   └── globals.css       # Core design system & CSS variables
├── components/           # Reusable UI components
├── db/                   # Database connection logic
├── prisma/               # Database schema & migrations
├── public/               # Static assets
├── utils/                # Helper functions & constants
└── types.ts              # Global TypeScript definitions
```

---

## 💾 Data Models (Prisma)

### User Model
Detailed schema for user management and authentication.
- `id`: Unique identifier (MongoDB ObjectId)
- `username`: Unique username for identification
- `email`: Unique user email
- `password`: Hashed password strings
- `isAdmin`: RBAC boolean flag
- `isActive`: Account status flag
- `img`, `address`, `phone`: User profile metadata

### Product Model
Comprehensive tracking for inventory and product details.
- `id`: Unique identifier
- `title`: Unique product title
- `price`, `stock`: Inventory management fields
- `color`, `size`, `desc`: Product specifications
- `img`: Product image reference

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB instance (Atlas or Local)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/joseernestoroldan/admin-dashboard.git
   cd admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="your-mongodb-connection-string"
   ```

4. **Initialize Prisma**
   ```bash
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Built with ❤️ by [Jose Ernesto Roldan](https://github.com/joseernestoroldan)**
