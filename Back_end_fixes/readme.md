# Vidly App

## Overview
Vidly is a web application designed to manage a database of movie genres, movies, customers, and rentals. It is built with Node.js, Express, and MongoDB, following best practices in coding, including Object-Oriented Programming (OOP) principles, to ensure reusability and maintainability.

## Features
- **Authentication & Authorization**: Implemented using JSON Web Tokens (JWT).
- **User Roles**: Regular users and Admin users with different levels of access.
- **Error Handling**: User-friendly error messages and robust error logging.
- **Password Security**: Passwords are hashed before storing in the database.
- **CRUD Operations**: Full CRUD functionality for genres, movies, customers, and rentals.

## How to run
- Clone this repo into your local
- open the terminal in VS code and type 
```bash
npm install
```
- go to config/default.json and add ```"jwtPrivateKey":"some string here"```
- Go to ```startup/logging.js```, you'll have to put your own mongo connection string there and also in ```startup/dataBase.js```
- finally run
```bash
node index.js
```
- You should verify whether each route is working as intended or not

### Your will see a bunch of errors, thats your task to fix them

- There are a lot of debugging print statement to help you locate the errors
- Comments are put in files where some bugs are there to guide you
- All the bugs are very basic, either some code is missing or some schema is mis matched 


## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose** (for MongoDB object modeling)
- **jsonwebtoken** (for JWT handling)
- **bcrypt** (for password hashing)
- **config** (for managing configuration settings)
- **winston** (for logging)
- **express-async-errors** (for handling async errors in Express)
- **Joi** (for input validation)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

## API Endpoints

### Genres
- **GET /api/genres**: Get all genres.
- **GET /api/genres/:id**: Get a genre by ID.
- **POST /api/genres**: Create a new genre (Admin only).
- **PUT /api/genres/:id**: Update a genre by ID (Admin only).
- **DELETE /api/genres/:id**: Delete a genre by ID (Admin only).

### Movies
- **GET /api/movies**: Get all movies.
- **GET /api/movies/:id**: Get a movie by ID.
- **POST /api/movies**: Create a new movie (Admin only).
- **PUT /api/movies/:id**: Update a movie by ID (Admin only).
- **DELETE /api/movies/:id**: Delete a movie by ID (Admin only).

### Customers
- **GET /api/customers**: Get all customers.
- **GET /api/customers/:id**: Get a customer by ID.
- **POST /api/customers**: Create a new customer.
- **PUT /api/customers/:id**: Update a customer by ID.
- **DELETE /api/customers/:id**: Delete a customer by ID.

### Rentals
- **GET /api/rentals**: Get all rentals.
- **GET /api/rentals/:id**: Get a rental by ID.
- **POST /api/rentals**: Create a new rental.
- **PUT /api/rentals/:id**: Update a rental by ID.
- **DELETE /api/rentals/:id**: Delete a rental by ID.

## Security
- **Authentication**: JWT tokens are used for authenticating users.
- **Authorization**: Admin privileges are required for certain operations such as deleting documents.
- **Password Hashing**: User passwords are hashed using bcrypt before storing them in the database.

## Logging
- **Winston**: Used for logging errors and important events.
- **express-async-errors**: Used for handling asynchronous errors in Express routes.


