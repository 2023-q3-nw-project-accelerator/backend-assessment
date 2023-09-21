# Backend deployment and database challenge

## My deployed API URL is:
[(Paste your render URL here)](https://backend-assessment-zjbk.onrender.com)

## Getting started

1. **Fork** this repo.
1. Clone your fork to your computer.
1. Install dependencies: `npm install`
1. Start the server: `npm start`

## Overview
In this challenge, you will use the Express API in this repo, which serves hard-coded data from a JSON file, and:

1. deploy this API to render
1. create a database for the API on ElephantSQL
1. create a `users` table in your database
1. seed the table with the data from `usersData.json`
1. refactor the controllers and queries to serve data from your db
1. deploy your changes so that your API on render calls the db

See [the Detailed instructions section](#tasks) below for detailed instructions, tips, and hints.

You can use [the resources listed below](#helpful-resources) to help you.

If you use code from any other resource (Stack Overflow, your own project, etc.) **you must put the link to that source in a comment**.

## <a id="tasks"></a>Detailed instructions

### 1. Deploy to render
1. Deploy your API to render.
1. Make sure that all routes work.
1. **Paste your deployed URL** in the top of this README.
1. Commit and merge your changes to the main branch of **your fork**.

### 2. Create a database
1. Create a database on Elephant SQL
1. **Do not commit the connection string / URL to GitHub**

### 3. Create the `users` table
1. Create a `schema.sql` file in this repo that defines the table. The columns should match the keys and data types you see in the `usersData.json` file.
1. Run the schema file to create the table in your db.
1. Commit and merge your changes to the main branch of **your fork**.

#### Tips and hints
> You can use `float` as the data type for `latitude` and `longitude`.

### 4. Seed the table with the data from `usersData.json`
1. Create a `seeds.sql` file in this repo that adds at least 3 students from `usersData.json` to the `users` table.
1. Commit and merge your changes to the main branch of **your fork**.

#### Tips and hints
> Don't waste time copy-pasting every single user from the JSON file. Just do 3 to start. Do the rest if you have time at the end.

> The `about` texts have apostrophes. (For example: `'Hi there! I'm Park...'` ). These will cause problems because SQL statments require single quotes around strings.
>
>You can escape a single quote in a SQL statement by repeating it: `'Hi there! I''m Park...'`

### 5. Serve data from the db
1. Refactor the queries and controllers to fetch from the database.
1. You will need to use `pg-promise`. It is already installed.
1. Use environment variables to store the connection string (database URL).
1. Delete the `usersData.json` file.
1. Commit and merge your changes to the main branch of **your fork**.

### 6. Final deployment
1. If it works locally, update your environment variables on Render, then push, merge, and deploy your code changes.
1. By the end of this step, your deployed database should serve data from the db.


## Committing, merging, and submitting
- As you write code, commit it and merge it to the main branch of **your fork** (not the upstream repo)
- When the instructions say to commit and merge code, commit and merge to **your fork** (not the upstream repo)
- There should be at least one commit for each of steps 1-6 above, with clearly written commit messages.
- **At the end of class**, make a PR of **your main branch** to the **upstream** repo main branch (so I can review your code)

## Routes / quality control
After each step of the challenge, **before you commit your code**, make sure that all of these routes function as expected.

- `/`: returns a `200` response: `{ data: 'Service is running' }
- `/users`: returns a `200` response in this format: `{ data: [ {//user 1...}, { // user 2, ...}, ...]}`
- `/users/:id`: returns a `200` response in this format: `{ data: { name: ..., age: ..., }}`
- `/users/:id`: returns a `404` response if the id does not exist: `{ error: 'User with id ... not found'}`

## Helpful resources
**Deploying the API to render**

- [Render deploy instructions](https://docs.google.com/document/d/1wmwJ47ocX7-lE4Kv5KnmX1TK3cvgXx1EMUNEaDGLFlo/edit?usp=sharing)

**Creating the DB and connecting API to DB**

- [Database setup instructions](https://docs.google.com/document/d/1qLWS4upwjoSGptMfpAkhw6zWGn_rBnEQ9CVr3sf1GE8/edit?usp=sharing)
- [Video: Create db and connect API to db](https://us06web.zoom.us/rec/share/gEz-eUuwZCbLv_VFOXvozcWSgytMj3KK3XxVnOQZwA1L7U_NSfWKASNk4vEKK-qu.VnCe5S2CSnd5exii?startTime=1677263406000&pwd=qHjCHrx55Lfu5wMCltAEozflkPcvAG1d)

**Create and seed data; serve data from DB**
- [Video: Create and seed data; serve from db](https://us06web.zoom.us/rec/share/kQNjT8bane_j_vDJx8IKoZnk7Z5WalZDfMLQvzCyR0ZF7a2OUoCChN6vQAcE0Ai8.CL2R90qQjzrXpDFo?startTime=1677609325000&pwd=KRxHYGQ0iakfZkd8TaZnCtCf1LJvwtTk)
- [Code changes from the video](https://github.com/mikeboyle/student-app-backend/pull/8/files)

**Reference code**
- [student-app-backend repo](https://github.com/mikeboyle/student-app-backend)

**Deployed example of completed assessment**
https://backend-assessment-2023-q3-private.onrender.com/
