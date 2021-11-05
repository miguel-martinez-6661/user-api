## User API

This is a NodeJS - Express - Typescript based API which gives to you the posibility to manage Users/Employes personal data. :P

## Setup

### 0. First your should run:

> npm install

### 1. If you're going to start working in the project, run:

> npm start

Note: This command will transpile the Typescript code into a Javascript code. Now you should be able to see /dist folder in the root of the project.

### 2. Create the .env file

Create .env file and put it on the root folder. With the next data:

> DB_USER=<YourUser>
> DB_PASS=<YourPass>
> DB_NAME=users
> DB_HOST=<YourHost>
> PORT=<YourPort>

### 3. Now, make sure you have installed:

> Nodemon (global install recommended: npm i -g nodemon)
> Typescript (global install recommended: npm i -g typescript)

### 4. Migrate Database

To migrate the database use:

> npx sequelize-cli db:migrate

If you want to revert the migration

> npx sequelize-cli db:migrate:undo

### 5. Add some example data. (Optional)

Run the seeder by exec:

> npx sequelize-cli db:seed:all

To revert seeder:

> npx sequelize-cli db:seed:undo

### 6. To boot the server in development mode run:

> npm run dev
