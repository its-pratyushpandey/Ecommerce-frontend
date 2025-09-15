# E-Commerce Full Stack Application

A complete e-commerce application with React frontend and Spring Boot backend.

## Project Structure

```
├── backend/              # Spring Boot REST API
│   ├── src/
│   ├── uploads/          # Product images
│   ├── pom.xml
│   └── README.md
├── src/                  # React Frontend
├── public/
├── package.json
└── README.md
```

## Technology Stack

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: CSS
- **State Management**: Context API
- **HTTP Client**: Axios
- **Build Tool**: Vite

### Backend
- **Framework**: Spring Boot 2.7.18
- **Database**: JPA/Hibernate
- **Security**: Spring Security with JWT
- **Build Tool**: Maven
- **Java Version**: 21

## Features

### Frontend Features
- User authentication (login/signup)
- Product browsing by categories
- Shopping cart functionality
- Order management
- Responsive design

### Backend Features
- RESTful API endpoints
- User authentication and authorization
- Product management with image upload
- Category-wise product filtering
- File upload and serving

## Getting Started

### Frontend Setup
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

### Backend Setup
1. Navigate to backend directory: `cd backend`
2. Run the application: `./mvnw spring-boot:run`

The frontend will be available at `http://localhost:5173` and backend at `http://localhost:8080`

## API Endpoints

### Authentication
- `POST /auth/signup` - Register user
- `POST /auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{category}` - Get products by category
- `POST /api/products/upload` - Upload product with image
- `GET /api/products/images/{fileName}` - Serve product images
