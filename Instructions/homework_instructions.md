# Node Express Handlebars

### Overview

In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

### Read This

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

### Important

- **This assignment must be deployed.** Be sure to utilize the MYSQL Heroku Deployment Guide(../../03-Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.

[https://uconn.bootcampcontent.com/university-of-connecticut/conn-stmf-fsf-pt-05-2020-u-c/blob/master/13-MVC/04-Supplemental/MySQLHerokuDeploy.md]


### Before You Begin

- Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

- Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

- Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

- Your app will store every burger in a database, whether devoured or not.

- [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

- Committing often is a signal to employers that you are actively working on your code and learning.

  - We use the mantra “commit early and often.” This means that when you write code that works, add it and commit it!

  - Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

- Be clear and descriptive in your commit messaging.

  - When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

- We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

- **This assignment must be deployed.** \* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

## Instructions

#### App Setup

1. Create a GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Use files in Develop folder, server.js is your starting js file.

5. Install the Handlebars npm package: `npm install express-handlebars`.

6. Install MySQL npm package: `npm install mysql`.

7. Require the following npm packages inside of the server.js file:
   - express
8. `burger` directory refer to your root(main) folder. i.e develop foler.
#### DB Setup

1. Inside your `burger` directory, you'll see a folder named `db`.

2. A file named `schema.sql`. Has the following:

   - Create the `burgers_db`.
   - Switch to or use the `burgers_db`.
   - Create a `burgers` table with these fields:
     - **id**: an auto incrementing int that serves as the primary key.
     - **burger_name**: a string.
     - **devoured**: a boolean.

3. Run the `schema.sql` and `seeds.sql` files into your workbench to generate DB and add data to it( Seed for adding row/data)

#### Config Setup

1. Inside your `burger` directory, you see a folder named `config`.

2. You'll see `connection.js` file inside `config` directory.

   - Inside the `connection.js` file, setup the code to connect Node to MySQL.

   - Export the connection.

3. You'll see an `orm.js` file inside `config` directory.

   - Import (require) `connection.js` into `orm.js`

   - In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     - `selectAll()`
     - `insertOne()`
     - `updateOne()`

   - Export the ORM object in `module.exports`.

#### Model setup

- Inside your `burger` directory, you'll see a folder named `models`.

  - In `models`, use the `burger.js` file.

    - Inside `burger.js`, import `orm.js` into `burger.js`

    - Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    - Export at the end of the `burger.js` file.

#### Controller setup

1. Inside your `burger` directory, you'll see a folder named `controllers`.

2. In `controllers`, you'll see `burgers_controller.js` file.

3. Inside the `burgers_controller.js` file, the following are imported:

   - Express
   - `burger.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your `burger` directory, create a folder named `views`.

   - Create the `index.handlebars` file inside `views` directory.

   - Create the `layouts` directory inside `views` directory.

     - Create the `main.handlebars` file inside `layouts` directory.

     - Setup the `main.handlebars` file so it's able to be used by Handlebars.

     - Setup the `index.handlebars` to have the template that Handlebars can render onto.

     - Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│  
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Reminder: Submission on BCS

- Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

---

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

---

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

---

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

- [About READMEs](https://help.github.com/articles/about-readmes/)

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

---

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. You can add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment.
---

### One More Thing

This is a really tough homework assignment, but we want you to put in your best effort to finish it.

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can reach out to learning assistant or sign up/get help from your tutor.

### Reminder

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

**Good Luck!**
