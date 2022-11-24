Rental project (only backend) 

Used technologies:

    - Express
    - MySQL
    - JavaScript
    - Node
    - Sequelize

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

Endpoints:

	- Register
POST - localhost:3000/auth/signup - { "name": "root", "email": "root@email.com",  "password": "password" }

	- Login
POST - localhost:3000/auth/signin - { "email": "root@email.com",  "password": "password"}

	- Home
GET - localhost:3000


    MOVIES ENDPOINTS:

    - Get all movies

GET - localhost:3000/movies

    - Get movie by id

GET - localhost:3000/byId/:id

    - Get all movies by genre

GET - localhost:3000/movies/genre/:genre

    - Get all movies by title

GET - localhost:3000/movies/title/:title

    - Get all movies by title

GET - localhost:3000/movies/title/:title
	

    TVSHOWS ENDPOINTS:

    - Get all tvshows

GET - localhost:3000/tvshows

    - Get tvshow by id

GET - localhost:3000/tvshows/:id

    - Get all tvshows by title

GET - localhost:3000/tvshows/name/:title

    - Get all tvshows by top rated

GET - localhost:3000/tvshows/topRated

    - Get all tvshows upcoming in the next 7 days

GET - localhost:3000/tvshows/next7Days

    ORDERS ENDPOINTS:

    - Post order

POST - localhost:3000/order

    - Update order by id

PUT - localhost:3000/order/:id

    - Order by user

GET - localhost:3000/order/user

