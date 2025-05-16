# ENTNT-Project
Ship Maintenance Dashboard 🚢⚓  A React-powered dashboard for managing ships, components &amp; maintenance jobs. Features role-based auth, localStorage persistence, KPI analytics, notifications &amp; dark mode. Built with React, Tailwind CSS &amp; Context API.

Ship Maintenance Dashboard - React Application

Project Structure:

src/
├── assets/
│   └── images/
├── components/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   └── PrivateRoute.jsx
│   ├── dashboard/
│   │   ├── KPICards.jsx
│   │   ├── Charts.jsx
│   │   └── StatsOverview.jsx
│   ├── ships/
│   │   ├── ShipList.jsx
│   │   ├── ShipForm.jsx
│   │   ├── ShipDetail.jsx
│   │   └── ShipCard.jsx
│   ├── components/
│   │   ├── ComponentList.jsx
│   │   ├── ComponentForm.jsx
│   │   └── ComponentCard.jsx
│   ├── jobs/
│   │   ├── JobList.jsx
│   │   ├── JobForm.jsx
│   │   ├── JobCard.jsx
│   │   └── JobCalendar.jsx
│   ├── notifications/
│   │   ├── NotificationCenter.jsx
│   │   └── NotificationItem.jsx
│   ├── ui/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Loader.jsx
│   │   ├── Alert.jsx
│   │   └── Button.jsx
│   └── common/
│       ├── SearchBar.jsx
│       ├── Filter.jsx
│       └── Pagination.jsx
├── contexts/
│   ├── AuthContext.jsx
│   ├── ShipContext.jsx
│   ├── ComponentContext.jsx
│   ├── JobContext.jsx
│   └── NotificationContext.jsx
├── hooks/
│   ├── useLocalStorage.js
│   └── useForm.js
├── pages/
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   ├── ShipsPage.jsx
│   ├── ShipDetailPage.jsx
│   ├── ComponentsPage.jsx
│   ├── JobsPage.jsx
│   ├── CalendarPage.jsx
│   └── ProfilePage.jsx
├── services/
│   ├── authService.js
│   ├── shipService.js
│   ├── componentService.js
│   ├── jobService.js
│   └── notificationService.js
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   ├── validators.js
│   └── mockData.js
├── App.jsx
├── App.css
├── index.js
└── styles/
    ├── tailwind.css
    ├── theme.css
    └── animations.css
