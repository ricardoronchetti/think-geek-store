# **Think Geek Store Project**

## 🚀 Overview

Think Geek Store is an e-commerce platform built using **Next.js**, designed for a seamless shopping experience. It leverages modern technologies to provide a secure and efficient user experience.

### **Tech Stack**

- **Frontend:** Next.js, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Prisma ORM, MongoDB Atlas
- **Authentication:** Clerk
- **Storage:** Supabase Buckets (for image hosting)
- **Payments:** Stripe
- **Validation:** Zod
- **API Calls:** Axios
- **Other tools:** Vite

## 📌 Features

✅ **Product Listing**: Browse a variety of products with pagination.  
✅ **Product Details**: View descriptions, pricing, and images.  
✅ **Shopping Cart**: Add, remove, and manage items easily.  
✅ **Checkout Process**: Secure Stripe-powered checkout.  
✅ **Authentication**: Sign up/login with Clerk.  
✅ **Image Uploads**: Store product images via Supabase Bucket.  
✅ **Admin Features**: Manage products and orders (requires admin access).  
✅ **Responsive Design**: Fully optimized for mobile and desktop.

## 🎬 Demo

Check out the live demo: **[Think Geek Store Demo](https://think-geek-store.vercel.app)**

## 🛠 Installation

Follow these steps to set up the project locally:

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/ricardoronchetti/think-geek-store.git
cd think-geek-store
```

### **2️⃣ Install dependencies**

```sh
npm install
```

### **3️⃣ Set up environment variables**

Create a `.env.local` file in the root directory:

```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Also in the root directory create a `.env` file with:

```sh
DATABASE_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
ADMIN_USER_ID=
SUPABASE_URL=
SUPABASE_KEY=
```

> ⚠️ **Note**: Ensure you have a MongoDB Atlas instance and Clerk/Supabase/Stripe credentials before proceeding.

### **4️⃣ Start the development server**

```sh
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 🚀 Usage

1. **Browse Products**: View available items on the homepage.
2. **Add to Cart**: Click the "Add to Cart" button to store items.
3. **Manage Cart**: Increase/decrease quantities or remove items.
4. **Checkout**: Securely pay with Stripe and complete the order.

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository.
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Commit changes**: `git commit -m 'Add some feature'`
4. **Push to GitHub**: `git push origin feature/your-feature-name`
5. **Open a pull request** on GitHub.

## 📜 License

This project is licensed under the **MIT License**.
