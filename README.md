# 🛒 MERN Ecommerce App

A full-stack ecommerce web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It features product browsing, category filtering, JWT-based authentication, role-based access control, and a fully functional admin dashboard.

---

## 🔗 Links

- 🌐 **Live Demo:** [your-deployed-link.com](https://aaradhyasmart.onrender.com/) 
- 📹 **Demo Video:** [Watch here](https://drive.google.com/file/d/1_MQcAxwv19SbKFDc93NNLw34dsGoElkx/view?usp=drivesdk) 

---

## ✨ Features

### 👤 User
- Register & Login with **JWT authentication**
- Forgot password with security answer
- Update profile (name, email, phone, address, password)
- Browse products with **pagination**
- Filter products by **category and price range**
- Search products by keyword
- View product details and related products
- Browse products by category
- Add/remove items from **cart**
- View order history

### 🛠️ Admin
- Dedicated admin dashboard with full control
- Create, update, and delete **categories**
- Create, update, and delete **products** (with image upload)
- View and manage all **users**

---

## 🧱 Tech Stack

| Layer      | Technology                                   |
|------------|----------------------------------------------|
| Frontend   | React 18, React Router v7, Ant Design, Axios |
| Backend    | Node.js, Express.js                          |
| Database   | MongoDB, Mongoose                            |
| Auth       | JWT, Bcrypt                                  |
| Dev Tools  | Nodemon, Concurrently, Morgan                |

---

## 🗂️ Project Structure

```
ecommerce/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable components (Layout, Protected Routes)
│       ├── context/         # Auth & Cart context (global state)
│       ├── hooks/           # Custom hooks
│       ├── pages/           # All page components
│       │   ├── Admin/       # Admin dashboard pages
│       │   ├── Auth/        # Login, Register, ForgotPassword
│       │   └── user/        # User dashboard, Orders, Profile
│       └── utils/
├── config/
│   └── db.js                # MongoDB connection
├── controllers/             # Route handler logic
│   ├── authController.js
│   ├── categoryController.js
│   └── productController.js
├── helpers/
│   └── authHelper.js        # Password hashing utilities
├── middlewares/
│   └── authMiddleware.js    # JWT verification, role-based access
├── models/                  # Mongoose schemas
│   ├── userModel.js
│   ├── productModel.js
│   ├── categoryModel.js
│   └── orderModel.js
├── routes/                  # Express route definitions
│   ├── authRoute.js
│   ├── categoryRoutes.js
│   └── productRoutes.js
├── server.js                # Express app entry point
└── package.json
```

---

## ⚙️ Architecture Highlights

- **RESTful API** design with clearly separated routes, controllers, and models
- **Role-based access control** — middleware guards admin-only routes from regular users
- **JWT authentication** — stateless auth with protected private and admin routes on both frontend and backend
- **Context API** for global state management (auth + cart) without any third-party state library
- **Express-formidable** handles multipart form data for product image uploads, stored directly in MongoDB as a Buffer
- **Slugify** generates SEO-friendly URL slugs for products and categories
- React frontend proxies API requests to the Express backend in development, and the Express server serves the built React app in production

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce.git
cd ecommerce
```

### 2. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=8080
DEV_MODE=development
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 3. Install dependencies

```bash
# Install server dependencies
npm install

# Install client dependencies
npm install --prefix ./client
```

### 4. Run the application

```bash
npm run dev
```

| Command          | Description                          |
|------------------|--------------------------------------|
| `npm run dev`    | Start both server and client         |
| `npm run server` | Start only the backend (nodemon)     |
| `npm run client` | Start only the React frontend        |
| `npm start`      | Start the backend (node)             |
| `npm run build`  | Build the React client for production|

Frontend runs at `http://localhost:3000` — Backend API at `http://localhost:8080`.

---

## 🔌 API Endpoints

### Auth — `/api/v1/auth`
| Method | Endpoint           | Description                | Auth Required |
|--------|--------------------|----------------------------|---------------|
| POST   | `/register`        | Register new user          | No            |
| POST   | `/login`           | Login user                 | No            |
| POST   | `/forgot-password` | Reset password             | No            |
| PUT    | `/profile`         | Update user profile        | User          |
| GET    | `/user-auth`       | Check user authentication  | User          |
| GET    | `/admin-auth`      | Check admin authentication | Admin         |

### Categories — `/api/v1/category`
| Method | Endpoint                 | Description        | Auth Required |
|--------|--------------------------|--------------------|---------------|
| POST   | `/create-category`       | Create category    | Admin         |
| PUT    | `/update-category/:id`   | Update category    | Admin         |
| DELETE | `/delete-category/:id`   | Delete category    | Admin         |
| GET    | `/get-category`          | Get all categories | No            |
| GET    | `/single-category/:slug` | Get single category| No            |

### Products — `/api/v1/product`
| Method | Endpoint                     | Description              | Auth Required |
|--------|------------------------------|--------------------------|---------------|
| POST   | `/create-product`            | Create product           | Admin         |
| PUT    | `/update-product/:pid`       | Update product           | Admin         |
| DELETE | `/delete-product/:pid`       | Delete product           | Admin         |
| GET    | `/get-product`               | Get all products         | No            |
| GET    | `/get-product/:slug`         | Get single product       | No            |
| GET    | `/product-photo/:pid`        | Get product photo        | No            |
| POST   | `/product-filters`           | Filter products          | No            |
| GET    | `/product-count`             | Get total product count  | No            |
| GET    | `/product-list/:page`        | Get products by page     | No            |
| GET    | `/search/:keyword`           | Search products          | No            |
| GET    | `/related-product/:pid/:cid` | Get related products     | No            |
| GET    | `/product-category/:slug`    | Get products by category | No            |

---

## 📦 Key Dependencies

### Backend
| Package              | Purpose                          |
|----------------------|----------------------------------|
| `express`            | Web framework                    |
| `mongoose`           | MongoDB ODM                      |
| `jsonwebtoken`       | JWT authentication               |
| `bcrypt`             | Password hashing                 |
| `express-formidable` | File/multipart upload handling   |
| `slugify`            | URL-friendly slug generation     |
| `cors`               | Cross-origin resource sharing    |
| `morgan`             | HTTP request logger              |
| `dotenv`             | Environment variable management  |

### Frontend
| Package                  | Purpose                        |
|--------------------------|--------------------------------|
| `react` + `react-dom`    | UI library                     |
| `react-router-dom`       | Client-side routing            |
| `antd`                   | UI component library           |
| `axios`                  | HTTP client                    |
| `react-hot-toast`        | Toast notifications            |
| `react-helmet`           | Document head management       |
| `react-icons`            | Icon library                   |

---



> 
