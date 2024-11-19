# QuickShell Frontend

## 📋 Project Overview

QuickShell is a dynamic ticket management application that provides flexible visualization of tickets across different grouping and ordering options. The application allows users to organize and view tickets by status, priority, or user, with customizable sorting methods.

#### LIVE URL -> https://quick-shell-frontend-8a3l.vercel.app/

## ✨ Features

- **Dynamic Ticket Grouping**: Organize tickets by:
  - Status
  - Priority
  - User

- **Flexible Sorting**: 
  - Sort by Priority
  - Sort by Title

- **Persistent Settings**: 
  - User preferences are saved in local storage
  - Grouping and ordering settings persist across sessions

- **Responsive Design**: 
  - Fully responsive layout
  - Adapts to various screen sizes and devices
 
    ![image](https://github.com/user-attachments/assets/c20abba9-3480-4d97-bf15-1b7d2ca921ac)


## 🚀 Technologies Used

- React
- TypeScript
- React Hooks
- Local Storage API
- Fetch API for data retrieval

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Satyam2192/QuickShell-Frontend.git
```

2. Navigate to project directory:
```bash
cd quickshell-frontend
```

3. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## 🌐 API Endpoint

The application fetches ticket data from:
`https://api.quicksell.co/v1/internal/frontend-assignment`

## 💡 Key Components

1. **App Component**: 
   - Manages application state
   - Handles data fetching
   - Manages grouping and ordering

2. **Grid Component**: 
   - Renders tickets based on selected grouping
   - Supports dynamic layout

3. **Header Component**: 
   - Provides UI for changing grouping and ordering


## 🎉 Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- QuickSell API

---

**Created with ❤️ by Satyam Kumar**
