# Todo App Backend

This repository contains the backend implementation of a simple Todo application using Node.js, Express.js, MongoDB, and JWT for authentication.

## Features

- **User Authentication:** Users can sign up and log in securely using JWT authentication.
- **Todo Management:** Users can create, read, update, and delete todo items.
- **Secure Password Storage:** User passwords are securely hashed using bcrypt before storing them in the database.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app-backend.git
   ```

2. **Install dependencies:**

   ```bash
   cd todo-app-backend
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   SECRET_KEY=your_secret_key
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

## Endpoints

### User Authentication

- `POST /signup`: Register a new user.
- `POST /login`: Log in an existing user.

### Todo Management

- `GET /todos`: Retrieve all todo items for the authenticated user.
- `POST /todos/create`: Create a new todo item.
- `PUT /todos/:id`: Update an existing todo item.
- `DELETE /todos/:id`: Delete a todo item.

## Usage

### User Authentication

To sign up a new user, send a POST request to `/signup` with the following JSON body:

```json
{
  "name": "Your Name",
  "email": "your@example.com",
  "password": "your_password"
}
```

To log in an existing user, send a POST request to `/login` with the following JSON body:

```json
{
  "email": "your@example.com",
  "password": "your_password"
}
```

### Todo Management

To perform CRUD operations on todo items, use the corresponding endpoints listed above. Make sure to include the JWT token in the `Authorization` header for authenticated requests.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to [Express.js](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) for making this project possible.
