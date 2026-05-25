
TAZABEET

TAZABEET is a home services platform built for customers, workers, and administrators. The system helps customers book trusted home services such as plumbing, electrical work, cleaning, painting, carpentry, AC repair, pest control, and more. It also gives workers a dashboard to manage jobs, update progress, receive messages, and track wallet earnings.

This project was developed as a graduation project. The first phase focused on system analysis, including identifying users, requirements, system features, and the service booking flow. The implementation phase converted that analysis into a working full-stack web platform.

Project Structure

```text
Tazabeet-full/
  tazabeet-clean/      # React frontend website
  tazabeet-backend/    # Node.js + Express backend API
```

## Main Users

The system supports three main user roles:

- Customer: browses services, books appointments, uploads problem photos/videos, receives notifications, approves final prices, and reviews completed jobs.
- Worker: receives service requests, manages work progress, sends final prices, completes jobs, and tracks wallet transactions.
- Admin: manages users, services, worker verification, messages, bookings, complaints, and platform activity.

## Frontend Features

The frontend is built using React. It includes a responsive website that works on desktop and mobile, with an installable PWA experience for mobile users.

Implemented frontend pages include:

- Home page
- Services page
- Contact page
- AI Assistant page
- Authentication pages
- Customer dashboard
- Customer profile
- Worker dashboard
- Worker profile
- Admin dashboard
- Admin messages page
- Reset password and forgot password pages

The website includes bilingual support for English and Arabic, SEO metadata, Google verification support, a mobile-friendly navigation bar, service cards, booking modals, profile pages, notifications, customer reviews, and footer/social links.

## Backend Features

The backend is built using Node.js, Express, MongoDB, and Mongoose. It provides APIs for authentication, users, bookings, schedules, messages, notifications, reviews, promo codes, wallet transactions, AI assistant requests, and admin management.

Main backend features include:

- User registration and login
- JWT authentication
- Role-based access control
- Customer booking system
- Worker schedule and availability
- Photo/video booking media support
- Worker progress updates
- Customer notifications
- Final price approval
- Customer review system
- Promo code validation and one-time usage
- Worker wallet transactions
- Platform commission handling
- Password reset email support
- Admin management routes
- AI assistant route

## Technology Stack

### Frontend

- React
- React Router
- Axios
- React Toastify
- Leaflet / React Leaflet
- React Big Calendar
- CSS
- PWA service worker

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Nodemailer / Brevo SMTP
- OpenAI API
- CORS
- dotenv

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd Tazabeet-full
```

### 2. Install frontend dependencies

```bash
cd tazabeet-clean
npm install
npm start
```

The frontend runs locally on:

```text
http://localhost:3000
```

### 3. Install backend dependencies

```bash
cd ../tazabeet-backend
npm install
npm run dev
```

The backend runs locally on:

```text
http://localhost:5050
```

## Environment Variables

Create a `.env` file inside `tazabeet-backend`.

Do not upload `.env` to GitHub.

```env
PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_brevo_smtp_login
SMTP_PASS=your_brevo_smtp_password
MAIL_FROM=your_email@example.com

CLIENT_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key
```

For the deployed version, `CLIENT_URL` should be changed to the live frontend URL.

## Deployment

The project is designed to be deployed with the frontend and backend separated but stored in one GitHub repository.

### Frontend Deployment

The frontend can be deployed on Vercel.

Recommended Vercel settings:

```text
Root Directory: tazabeet-clean
Framework: Create React App
Build Command: CI=false npm run build
Output Directory: build
```

Frontend environment variable:

```env
REACT_APP_API_URL=https://your-backend-url
```

### Backend Deployment

The backend can be deployed on VibeNest.

Recommended VibeNest settings:

```text
Repository: same GitHub repository
Branch: main
Base Directory: tazabeet-backend
Internal Port: 5050
Build Pack: Nixpacks
```

Backend environment variable:

```env
CLIENT_URL=https://your-vercel-frontend-url
```

## System Implementation Summary

TAZABEET was implemented as a complete service booking system. Customers can browse services, choose a service, upload a photo or video of the problem, select a location, and submit a booking request. Workers can view assigned jobs, update progress, send a final price, and complete the job. Customers receive notifications during the process and can approve the final price before completion.

The system also includes a wallet feature for workers. When a cash job is completed, the actual cash amount is added to the worker wallet, and the platform commission is calculated. Promo codes are validated through the backend and can be used one time per customer. Reviews are stored in the backend and displayed on the website as real customer feedback.

## Security Notes

- Passwords are hashed before storage.
- JWT tokens are used for protected routes.
- Role-based routes prevent customers, workers, and admins from accessing unauthorized dashboards.
- Environment variables are used for secrets.
- `.env` files should never be pushed to GitHub.

## Future Improvements

Future improvements may include full online payment integration, advanced admin analytics, stronger worker verification, real-time notifications using WebSockets, improved reporting tools, and mobile app store deployment.

## Project Status

TAZABEET is a working graduation project that demonstrates a real home services booking platform with frontend, backend, database, authentication, booking management, worker operations, admin control, notifications, reviews, promo codes, wallet tracking, and deployment support.
```

Before you push, make sure your `.gitignore` has this:

```text
node_modules
.env
.DS_Store
build
dist
```
