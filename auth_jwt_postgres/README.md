# Authentication with NestJS

## Description

In this repo we will implement an authentication feature using:

- NestJS
- PassportJS
- JWT
- PostgresSQL

## Before starting

Please note that during this project I was using a docker image of PostgreSQL which you can use by typing this command:

```bash
$ docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

- **Please remember your password, and feel free to change it if you want to**

- **The DB name in this project is** _"auth_jwt_postgres"_

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start:dev
```

The app will be running on port 5000.

## About the API

To test the API, I was using Postman. We have 2 endpoints:

1. **/auth/signup**: This is the endpoint responsible for creating a new account, it accepts:

- "email": "email@email.com" (_Yes there's an email validation here_).

- "password": "Password123456789" (_Yes there's a password validation here_).

- "fullName": "Name Lastname"

- "Role": 0 | 1 | 3 | 4, if you leave it empty, by default, it will be asseigned a value of 0.

- A 201 created response will be sent back, with nothing in the response body.

2. **/auth/login**: This is the endpoint responsible for logging into an existing account, it accepts:

- "email": "email@email.com"

- "password": "Password123456789"

- A 201 created response will be sent back, with a JWT in the response body.

## JWT payload

To see the JWT payload, please [click here](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhNGIzYzgxLWY0NDQtNGM4MS04ZTEwLWIxYTc4YzllMmQ2ZCIsImVtYWlsIjoiYW1pbmVAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJNb2hhbWVkIEFtaW5lIEJvdWZhcmVzIiwicm9sZSI6MCwiaWF0IjoxNjQ4ODk1NTEyLCJleHAiOjE2NDg4OTkxMTJ9.t_0sc2QScXceY7e7ZK9Y9ruyp7ePOKnr8FA-af9ku7o).

## Author

- Mohamed Amine Boufares
