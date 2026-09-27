const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

//GET /users => It checks all the app.xxx("matching route") function till it response back to the server
// it goes throgh all the handelers one by one and tries to send the response back to the server and if it finds the matching route then it will send the response back to the server and if it does not find any matching route then it will go to the next middleware function which is the default one which is the 404 not found handler
// the actual route handler is the one which is sending the response back to the server and if it does not send any response back to the server then it will go to the next middleware function which is the default one which is the 404 not found handler
//others are known as middleware functions which are used to perform some operations before sending the response back to the server

// app.use(rH1, rH2, rH3, rH4, rH5, rH6);
// app.use([rH1, rH2, rH3, rH4, rH5, rH6]);
// app.use([rH1, [rH2, rH3], rH4, rH5, rH6]);

// if next is there then route not found
// if next is not there and res is not there then it will go in infinite loop and keep on loading because we are not handling that response there

//Route handlers
// if we dont send any thing in the response then it will go in the infinite loop and will keep on loading because we are not handling  that response there 

// /ac and /abc will work here b is optional because it has a ? after it
// app.get("ab?c", (req, res) => {
//   res.send("Hello from abc");
// });

// /abc and we can make b as much as we want because of the + sign after it
// app.get("ab+c", (req, res) => {
//   res.send("Hello from abc");
// });

// /abcd and we can write anything between b and c because of the * sign after it
// app.get("ab*cd", (req, res) => {
//   res.send("Hello from abc");
// });

// /abcd and /dc will work here bc is an optional group because of the ? after it    
// app.get("a(bc)?d", (req, res) => {
//   res.send("Hello from abc");
// });

// anywhere in theurl if we write a then it will work because of the regex 
// app.get("/a/", (req, res) => {
//   res.send("Hello from abc");
// });

// start with anything but ends with fly then it will work because of the regex
// app.get("/.*fly$/", (req, res) => {
//   res.send("Hello from abc");
// });
// this will eork for all the http methods and all the routes
// app.use((req, res, next) => {
//   console.log("Middleware 1");
//   next();
// });
app.use(express.json());
app.post("/signup", async (req, res) => {

  // console.log(req.body);

  //Creating a new instance of user model

  const user = new User(req.body);
  // const user = new User({
  //   firstName: "Drashti",
  //   lastName: "Prajapati",
  //   email: "drashti.prajapati@example.com",
  //   password: "password123",
  //   age: 25,
  //   gender: "Female"
  // });
  try{
    await user.save();
    res.status(201).send("User created successfully");
  } catch(err){
    res.status(400).send("Error creating user" + err.message);
  }  
});

//find a user by emailId
app.get("/user", async(req, res) => {
  const email = req.body.email;
  try{
    const user = await User.find({email: email});
    if(user.length === 0){
      res.status(404).send("User not found!");
    }
    res.send(user);
  } catch(err) {
    res.status(400).send("Error getting user with this emailId", err.message);
  }
});

//find all users
app.get("/feed", async(req, res) => {
  // const email = req.body.email;
  try{
    const user = await User.find();
    if(user.length === 0){
      res.status(404).send("User not found!");
    }
    res.send(user);
  } catch(err) {
    res.status(400).send("Error getting user", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
  })
}).catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1); // Exit the application if the database connection fails
  }
)

