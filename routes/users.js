import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";
let users = [
  //   {
  //     firstName: "Dara",
  //     lastName: "Heng",
  //     age: 25,
  //   },
  //   {
  //     firstName: "Sokha",
  //     lastName: "Sang",
  //     age: 22,
  //   },
];
// if going to localhost:8000/users will say cannot get /users
// because in server.js added /users to all routes for the users.js
// so it in order to get to this route it would like localhost:8000/users/users
// so going to take out /users from ther users.js file
router.get("/", (req, res) => {
  if (users) {
    //   console.log(users)
    res.status(201).send(users);
  } else {
    res.status(401).send("no users found");
  }
});

router.post("/", (req, res) => {
  // this will not be stored when adding the user because
  // using a mock array of users hardcoded in an object above
  // the post request will fire but when refreshing to see the data
  // it will go back to seeing the users above
  let newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    id: req.params.id
  };
  //   when creating the user add that id with uuid
  //   const userId = uuidv4();
  //   how to add to the current user gettin from req.body
  // create a new object spread all the users from current user
  // and add the property of id: userId equal to userId
  // new object that represents the newUser and spread ... all the
  // properties of the newUser and add one more value on top
  // instead of pushing newUser can now push userWithId
  //   const userWithId = { ...newUser, id: userId };
  const userWithId = { ...newUser, id: uuidv4() };

  // when firing post request before the pushing users
  // it will showing the newUser hasnt been added but will show that it was created in
  // in postman. intill adding users.push(newUser) refire the post in postman
  // then refresh endpoint localhost:8000/users will see the newUser added
  // console.log(req.body)
  //   users.push(newUser);
  users.push(userWithId);
  // to send back to client side
  // res.send(newUser)
  //   output {
  // "firstName": "Thida",
  // "lastName": "Kim",
  // "age": 27,
  // "id": "3e564b37-29ae-45df-845b-1974da5cd46d"
  // }
  // userful message to client once request made
  res.send(
    `Thank you ${newUser.firstName} ${newUser.lastName}, your account has been successfully created.`
  );
});

// installing uuid for uniq ids to be used later
// localhost:8000/users/whateverId12331 is stored in req.params
// it is the paramter to the function and the only paramter
// have is /:id, will get an object {id: whateverId12331}
// need that id to access the data of the users id speified
// in the url path localhost:8000/users/whateverId12331
router.get("/:id", (req, res) => {
  console.log(req.params);
  // const id = req.params.id
  // destructuring id
  const { id } = req.params;
  //   want to send user data for specific id
  // find a user in users database that has the same id
  // by using users.find((user)=> ) in the paramter we get each user and search if the user.id === id
  const findUser = users.find((user) => user.id === id);
  // users.find((user) => {
  //     if (user.id === id) {
  //       res.send(user);
  //     } else {
  //       res.send("user not found");
  //     }
  //   });
  res.send(findUser);
});

// DELETE user only specified from id param
router.delete("/:id", (req, res) => {
  // get id from reqquest.params
  // and remove element from array using filter function
  // filter works where whatever that after the arrow function returned is true
  // it will keep that user in the array, but if its false then it removes it from the aray
  // want to keep all users except the one whos id is equal to the id
  // that I have here const {id}= req.params
  let { id } = req.params;
  // if the user.id does not equal the id it will be false because they are equal
  // want false so it can delete
  // the reason that is done because for example
  // say if user.id is user1 id is 111 and that that doesnt equal its user id 111
  // it will be false so delete
  // but if its another user like user2 whos user id is 222 and does not equal the id 111 then its true saving it.
  users = users.filter((user) => user.id != id);
  // send some information to the user to confirm they have been deleted
  res.send(`User account ${id} account has been deleted.`);
});
// module.exports = router
export default router;
