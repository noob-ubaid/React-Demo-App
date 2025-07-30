# React Demo App

A simple React app built as part of a technical interview task.

## 🔧 Tech Stack

- React (with Hooks)
- React Router
- Context API
- Tailwind CSS
- JSONPlaceholder API
- Vitest + React Testing Library

## 📄 Features

### 1. Login Page
- Phone input with validation (`+254712345678` is valid)
- Shows error for invalid input
- Redirects to Main Page on success

### 2. Main Page
- Fetches and displays list from API
- Search bar filters items live
- Click item to view details

### 3. Detail Page
- Shows selected item details
- Includes back to Main Page

## ✅ Testing

- One unit test using **Vitest** + **React Testing Library**
- Test file: `Login.test.jsx`
