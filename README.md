Rental project (only backend) 

Used technologies:

    - Express
    -MySQL
    -JavaScript
    -Node
    -Sequelize

How to run the project:

npm install (in order to install everything you need in order to run the project)

npm run dev (in order to run the project)

The project is running on port 3000, so you can access it by typing localhost:3000 in your browser.

The project is using MySQL database, so you need to create a database called "rental" and then run the following command in order to create the tables:

npx sequelize-cli db:migrate

The project is using JWT for authentication, so you need to create a user in order to get a token. You can post the following body to localhost:3000/users/signup in order to create a user:

{
    "name": "your name",
    "email": "your email"
}

You will receive a token in the response, which you need to use in order to access the other routes. You can use the following body to localhost:3000/users/signin in order to login.

Once logged in, you can use the token in the Authorization header in order to access the other routes.

The .env file is not included in the project, it will be sent to you separately.


