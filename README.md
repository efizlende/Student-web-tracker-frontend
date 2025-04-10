# 💼 Student Web Tracker – Frontend

A responsive React-based job tracking app that allows users to add, update, delete, and view their job applications efficiently.

## 🚀 Features

- ➕ Add Job Application
- 📋 View All Applications
- 🔄 Update Application Status
- ❌ Delete Application
- 🔍 Filter by status and date
- 💅 Responsive UI with clear UX

## 🛠️ Tech Stack

- React (with Hooks)
- Vite
- TypeScript
- CSS
- Axios
- Deployment: Vercel

## 📁 Folder Structure

```
├── src
│   ├── api/                # Axios API logic
│   ├── components/         # Reusable components
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Layout components
│   ├── pages/              # Page-level components
│   ├── routes/             # Route definitions
│   ├── styles/             # Global CSS
│   └── main.tsx            # Entry point
├── public/
├── index.html
```

## 🧪 Run Locally

```bash
git clone git@github.com:efizlende/Student-web-tracker-frontend.git
cd student-web-tracker-frontend
npm install
npm run dev
```

## ☁️ Deployment

Vercel Link:  
https://student-web-tracker-frontend.vercel.app/

## 📦 API Base URL

Set the base URL for backend in the Axios config:
```ts
const API = axios.create({
  baseURL: "https://student-web-tracker-backend.onrender.com/api/jobs",
});
```



## 🤖 AI Tool Usage

- **GitHub Copilot**: Used in component boilerplate
