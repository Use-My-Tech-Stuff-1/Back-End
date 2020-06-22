# Back-End
## Schema
#### Users
| Field    | Type    | Notes                              |
| -------- | ------- | ---------------------------------- |
| id       | integer | _primary key_ and _autoincrements_ |
| email    | string  | _required_ and _unique_            |
| password | string  | _required_                         |
| username | string  | _required_                         |
| role     | integer  | _required_                         |
#### Role
| Field    | Type    | Notes                              |
| -------- | ------- | ---------------------------------- |
| id       | integer | _foreign key_ and _autoincrements_ |
| name     | string  | _required_ and _unique_            |
#### Product
| Field     | Type    | Notes                                                                      |
| --------- | ------- | -----------------------------------------------------------------------    |
| id        | integer | _primary key_ and _autoincrements_                                         |
| name      | string  | _required_; name of the item                                               |
| image_URL | string  | product image                                                              |
| price     | text    | price quote                                                                |
| content   | text    | _required_; review of the tech stuff                                       |
| owner     | integer | _foreign key_ ID of the author of the listing                                                       |
| available     | boolean | whether or not the tech stuff is rented; defaults to _false_ on POST  |
| borrower     | integer | _foreign key_ user borrowing the item; defaults to _null_ on POST                                                       |
## API
BASE URL: https://usemy-techstuff.herokuapp.com/
test account:
```json
{
  "username": "poweruser",
  "password": "qwerty",
  "email": "poweruser@email.com"
}
```
#### Table of Contents
| Type   | Path                        | Notes                                                                                                 | Example                            |
| ------ | ------------------------    | ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| POST   | `/api/auth/register`        | register a new user                                                                                   | [link](#post-apiauthregister)      |
| POST   | `/api/auth/login`           | login an user                                                                                         | [link](#post-apiauthlogin)         |
| &nbsp; |                             |                                                                                                       |                                    |
| GET    | `/api/user/:user_id`        | get user info; requires authorization                                                                 | [link](#get-apiusersuser_id)       |
| PUT    | `/api/user/:user_id`        | update user info; requires authorization                                                              | [link](#put-apiusersuser_id)       |
| DELETE | `/api/user/:user_id`        | delete a user account; requires authorization                                                         | [link](#delete-apiusersuser_id)    |
| &nbsp; |                             |                                                                                                       |                                    |
| GET    | `/api/product`             | get products                                                                                          | [link](#get-apiproducts)            |
| POST   | `/api/product`             | create a new product post; requires `name` and `content`                                              | [link](#post-apiproducts)           |
| GET    | `/api/product/:id` | get a product                                                                                         | [link](#get-apireviewsreview_id)    |
| PUT    | `/api/products/:id/update` | update a product;  requires authorization;   | [link](#put-apiproductsproduct_id)    |
| DELETE | `/api/products/:id`  | delete a product; requires authorization;                                                            | [link](#delete-apiproductsproduct_id) |
## Examples
#### POST /api/auth/register
request data:
```json
{
  "email": "username@email.com",
  "password": "password",
  "username": "Name"
}
```
response data:
```json
{
  "user": {
    "id": 1,
    "email": "username@email.com",
    "username": "Name"
  },
  "authorization": "really.long.token"
}
```
#### POST /api/auth/login
request data:
```json
{
  "username": "test123",
  "password": "test"
}
```
response data:
```json
{
  "user": {
    "id": 1,
    "email": "username@email.com",
    "username": "Name"
  },
  "authorization": "really.long.token"
}
```
#### GET /api/users/:user_id
response data
```json
{
  "id": 1,
  "email": "username@email.com",
  "username": "Name"
}
```
#### PUT /api/users/:user_id
request data
```json
{
  "email": "username@email.com",
  "username": "Name"
}
```
response data
```json
{
  "id": 1,
  "email": "username@email.com",
  "username": "Name"
}
```
#### DELETE /api/users/:user_id
response data
```
no content
```
#### GET /api/products/:product_id
response data
```json
{
  "id": 1,
  "name": "Name",
  "quote": "Price quote here",
  "image_URL": "image.com",
  "content": "About the product text",
  "approved": false
}
```
#### PUT /api/products/:product_id
request data
```json
{
  "name": "Name",
  "quote": "Price quote here",
  "image_URL": "image.com",
  "content": "About the product text",
  "approved": false
}
```
response data
```json
{
  "id": 1,
  "name": "Name",
  "quote": "Price quote here",
  "image_URL": "image.com",
  "content": "About the product text",
  "approved": true
}
```
#### DELETE /api/products/:product_id
response data
```
no content
```
#### GET /api/products
response data
```json
[
  {
    "id": 1,
    "name": "Name",
    "quote": "Price quote here",
    "image_URL": "image.com",
    "content": "About the product text",
    "approved": true
  },
  {
    "id": 2,
    "name": "Name",
    "quote": "Price quote here",
    "image_URL": "image.com",
    "content": "About the product text",
    "approved": true
  }
]
```
#### POST /api/products
request data
```json
{
  "name": "Name",
  "quote": "Price quote here",
  "image_URL": "image.com",
  "content": "About the product text"
}
```
response data
```json
{
  "id": 1,
  "name": "Name",
  "quote": "Price quote here",
  "image_URL": "image.com",
  "content": "About the product text",
  "approved": false
}
```
#### GET /api/stories/:product_id
response data
```json
{
  "id": 1,
  "name": "Name",
  "quote": "Price quote here",
  "image_URL": "image.com",
  "content": "About the product text",
  "approved": true
}
```