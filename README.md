# 🚀 GitHub Profile Page - Pixel Perfect Clone

A pixel-perfect replication of GitHub's profile page built with React, TypeScript, and Tailwind CSS. This project demonstrates advanced React patterns, clean architecture, and modern web development best practices.

![GitHub Profile Clone](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

### 🎨 UI/UX
- **Pixel-Perfect Design** - Exact replication of GitHub's profile page
- **Fully Responsive** - Works seamlessly on all device sizes
- **Dark Mode Ready** - Prepared for theme switching
- **Smooth Animations** - Micro-interactions and transitions
- **Accessible** - ARIA labels and semantic HTML

### 🔧 Technical Features
- **Dynamic Routing** - React Router for all tabs (Overview, Repositories, Projects, Packages, Stars)
- **Real GitHub API Integration** - Fetches live data from GitHub's API
- **Custom React Hooks** - Reusable hooks for data fetching
- **TypeScript** - Full type safety throughout the application
- **Clean Architecture** - All components under 100 lines
- **Optimized Performance** - Code splitting and lazy loading

### 📊 Components
- **Contribution Heatmap** - Interactive contribution graph with Plotly.js
- **Activity Timeline** - Real-time activity tracking
- **Repository Cards** - Dynamic repository display
- **Profile Sidebar** - User information and achievements
- **Navigation Tabs** - Smooth tab switching

## 🏗️ Architecture

### Component Structure
```
src/
├── components/github/
│   ├── ActivityOverview.tsx       (82 lines)
│   ├── ActivitySection.tsx        (72 lines)
│   ├── ContributionGraph.tsx      (82 lines)
│   ├── ContributionHeatmap.tsx    (27 lines)
│   ├── EmptyStateTab.tsx          (67 lines)
│   ├── Header.tsx                 (48 lines)
│   ├── HeaderNav.tsx              (63 lines)
│   ├── HeaderToolbar.tsx          (87 lines)
│   ├── OverviewTab.tsx            (39 lines)
│   ├── PRReposList.tsx            (43 lines)
│   ├── ProfileAchievements.tsx    (55 lines)
│   ├── ProfileContacts.tsx        (89 lines)
│   ├── ProfileInfo.tsx            (30 lines)
│   ├── ProfileSidebar.tsx         (49 lines)
│   ├── RepositoriesTab.tsx        (67 lines)
│   ├── RepositoryCard.tsx         (80 lines)
│   └── YearSelector.tsx           (26 lines)
├── hooks/
│   ├── useActivityStats.ts
│   ├── useGitHubActivity.ts
│   ├── useGitHubContributions.ts
│   ├── useGitHubProfile.ts
│   ├── useGitHubRepos.ts
│   └── useGitHubStars.ts
├── pages/
│   ├── GitHubProfile.tsx          (98 lines)
│   └── NotFound.tsx               (18 lines)
└── utils/
    └── contributionData.ts
```

### Custom Hooks

#### `useGitHubProfile`
Fetches user profile information including bio, followers, and public repos.

#### `useGitHubRepos`
Retrieves user repositories with pagination support.

#### `useGitHubContributions`
Fetches contribution data for the heatmap visualization.

#### `useGitHubStars`
Gets the count of starred repositories.

#### `useGitHubActivity`
Tracks user activity including commits and pull requests.

#### `useActivityStats`
Calculates activity statistics and percentages.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/chandra-pangea/uptimeAi.git
cd uptimeAi
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 6.0.3** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Routing
- **React Router DOM 7.1.1** - Client-side routing

### Data Visualization
- **Plotly.js** - Interactive contribution heatmap
- **React Plotly.js** - React wrapper for Plotly

### Icons
- **React Icons** - Icon library (HeroIcons, Bootstrap Icons, Font Awesome)

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Plugin React SWC** - Fast refresh with SWC

## 📁 Project Structure

```
uptimeAi/
├── public/              # Static assets
├── src/
│   ├── assets/          # Icons, images, constants
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
└── vite.config.ts       # Vite config
```

## 🎯 Key Design Decisions

### 1. Component Size Limit
All components are kept under 100 lines for better maintainability and readability.

### 2. Custom Hooks Pattern
Data fetching logic is separated into custom hooks for reusability and testing.

### 3. TypeScript First
Full type safety with interfaces and type definitions throughout.

### 4. CSS Preservation
All styling matches GitHub's exact design without modifications.

### 5. Performance Optimization
- Code splitting by route
- Lazy loading of heavy components
- Memoization of expensive calculations

## 🌐 API Integration

The project integrates with GitHub's public API:

- **User Profile**: `https://api.github.com/users/{username}`
- **Repositories**: `https://api.github.com/users/{username}/repos`
- **Events**: `https://api.github.com/users/{username}/events`
- **Contributions**: Custom proxy for contribution data

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Custom color palette** matching GitHub's design system
- **Responsive breakpoints** for mobile, tablet, and desktop
- **Hover states** and transitions for better UX

## 🧪 Code Quality

- **ESLint** configuration for code consistency
- **TypeScript** strict mode enabled
- **Component-based architecture** for modularity
- **Custom hooks** for logic reusability
- **Clean code principles** throughout

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chandra Pangea**
- GitHub: [@chandra-pangea](https://github.com/chandra-pangea)

## 🙏 Acknowledgments

- GitHub for the amazing design inspiration
- React team for the excellent framework
- Tailwind CSS for the utility-first approach
- Plotly.js for the contribution heatmap

## 📸 Screenshots

### Overview Tab
![Overview Tab](screenshots/overview.png)

### Repositories Tab
![Repositories Tab](screenshots/repositories.png)

### Contribution Graph
![Contribution Graph](screenshots/contributions.png)

---

⭐ **Star this repository if you find it helpful!**

Built with ❤️ by [Chandra Pangea](https://github.com/chandra-pangea)
