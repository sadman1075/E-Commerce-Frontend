# 🛍️ Ecomart – Mini E-Commerce SPA

**Ecomart** is a sleek and responsive single-page application (SPA) built with React. It showcases a list of products, allows users to view product details, add items to a cart, adjust quantities, and complete a simulated checkout — all without authentication.

## 🚀 Live Demo

🔗 https://e-commerces-frontend.vercel.app


---

## ⚙️ Tech Stack

- **Frontend Framework:** React (Vite)
- **Routing:** React Router DOM
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 🧰 Features

### 🏠 Home Page
- Displays a grid of 
- Each product includes:
  - Image
  - Name
  - Price
  - “Add to Cart” button
- Clicking a product navigates to the Product Detail Page

### 📄 Product Detail Page
- Full product details:
  - Image
  - Name
  - Description
  - Price
  - “Add to Cart” button

### 🛒 Cart Sidebar
- Slide-in/out cart UI
- Shows:
  - All added products
  - Quantity controls (+ / -)
  - Individual and total price
  - “Checkout” button

### 💳 Checkout Modal
- Triggered via **Checkout** button
- Collects:
  - Name
  - Email
  - Address
- Simulates order placement (no backend required)

---

## ⚙️ How to Run Locally
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm run dev
Open in browser
Navigate to http://localhost:5173
