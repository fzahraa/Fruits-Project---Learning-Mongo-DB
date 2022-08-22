//this code is by using the mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");
//simple schema
// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

//shema with validations
const fruitSchema = new mongoose.Schema({
  name: {
  type: String,
  required:[true, "Please check the data entered, name is not specified"]
},
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating : 7,
  review: "Pretty solid as a fruit."
});

//fruit.save(); //this statement is to save a single records
//let's insert multiple records

const orange = new Fruit({
  name : "Orange",
  score: 4,
  review : "Too sour for me"
});

const kiwi = new Fruit({
  name : "Kiwi",
  score: 6,
  review : "The best fruit"
});

const banana = new Fruit({
  name:"Banana",
  score : 3,
  review : "Unique Texture"
});
//this method saves more than one objects to mongo db
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the records");
//   }
// });

//now, how to read all objecs from mongo
// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else{
//     mongoose.connection.close();
//
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// });
//update a record
// Fruit.update({_id : "6301e5f1936f733bdd8fa25d"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated banana to peach");
//   }
// });

//delete one records
// Fruit.deleteOne({name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted Peach");
//   }
// });

const personSchema = new mongoose.Schema({
  name : String,
  age: Number,
  favouriteFruit : fruitSchema
});
const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name : "Pineapple",
//   score : 9,
//   review : "Great Fruit."
// });
// pineapple.save();

// const person = new Person({
//   name : "John",
//   age : 12,
//   favouriteFruit: pineapple
// });
// const person = new Person({
//   name : "Amy",
//   age : 12,
//
// });
//
// person.save();

const redApple = new Fruit({
  name : "Red Apple",
  score : 9,
  review : "Too Juicy."
});
redApple.save();
Person.updateOne({name : "Amy"}, {favouriteFruit : redApple}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully added a favourite fruit to Amy");
  }
});
