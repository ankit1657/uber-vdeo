# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:
- `fullname` (object, required): The full name of the new user.
  - `firstname` (string, required): The first name of the new user.
  - `lastname` (string, optional): The last name of the new user.
- `email` (string, required): The email address of the new user.
- `password` (string, required): The password for the new user.

### Example Response


- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

