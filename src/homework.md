- create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json, .gitignore
- Install express
- create a server
- listen to port 7777
- Install nodemon and update scripts in package.json
- Differecnce between devDependencies and dependencies
- Difference between carat and tilde in package.json
- what is the use of -g while installing nodemon

* Ep - 4

- initialize git
- .gitingnore
- create a remote repo in github
- push all the code to remote origin
- play with routes adn route extensions ex. /hello, /hello/abc, /hello/abc/xyz
- order of the routes matter a lot
- dynamic query params and how to access them
- Install postman app and make a workspace/collection > test API call
- write logic to handle GET, POST, PATCH, DELETE API calls and test them on post man
- Explore routing and use of ?, +, (), \* in the routes
- use of regex in routs /a/, /.\*fly$/
- reading the query params in the routes
- reading the dynamic routes

\*Ep - 5

- Multiple route handlers - play with the code
- next()
- next functions and errors along with res.send()
- what is middleware? why do we need it?
- How express js basically handles request behind the scene
- Difference app.use vs app.all
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user routes, except /user/login
- Error handling using app.use("/", (err, req, res, next = {}));

\*Ep - 6

- Create a free cluster on MongoDB official website(Mongo Atlas)
- Install Mongoose Library
- Connect your application to the Database <Connection-url>/devtinder
- Call teh connectDB function and connect to database before starting application on 7777
- Create a user schema and model using mongoose

\*Ep - 7

- what is the diffrence between the jsObject and JSON object
- Add the Express.json() middleware to your app
- Make your signup API dynamic to receive data from the end User
