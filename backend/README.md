# E-Commerce Backend

A Spring Boot REST API for an e-commerce application.

## Features

- User authentication and authorization
- Product management with image upload
- Category-wise product filtering
- File upload and serving for product images
- RESTful API endpoints
- JPA/Hibernate for database operations
- Spring Security for authentication

## Technology Stack

- **Backend Framework**: Spring Boot 2.7.18
- **Database**: JPA/Hibernate
- **Security**: Spring Security with JWT
- **Build Tool**: Maven
- **Java Version**: 21

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/klu/ecommerce/
│   │   │       ├── EcommerceApplication.java
│   │   │       ├── controller/
│   │   │       ├── entity/
│   │   │       ├── repository/
│   │   │       ├── service/
│   │   │       └── security/
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── uploads/           # Product images directory
├── pom.xml
└── mvnw, mvnw.cmd    # Maven wrapper
```

## API Endpoints

### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{category}` - Get products by category
- `POST /api/products/upload` - Upload product with image
- `GET /api/products/images/{fileName}` - Serve product images

## Getting Started

### Prerequisites
- Java 21 or higher
- Maven 3.6 or higher

### Running the Application

1. Clone the repository
2. Navigate to the backend directory
3. Run the application:

```bash
./mvnw spring-boot:run
```

Or on Windows:
```cmd
mvnw.cmd spring-boot:run
```

The application will start on `http://localhost:8080`

### Building the Application

```bash
./mvnw clean package
```

## Configuration

Update `src/main/resources/application.properties` with your database configuration and other settings.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
