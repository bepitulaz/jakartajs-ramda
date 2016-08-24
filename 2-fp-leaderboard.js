"use strict";
const R = require("ramda");

let leaderboard = [{
  fbId: "123123",
  name: "Asep",
  score: 780
}, {
  fbId: "456456",
  name: "Bagja",
  score: 230
}, {
  fbId: "789789",
  name: "Priandana",
  score: 465
}];

const sortByScore = R.sortBy(R.prop("score"));
const getArrayIndex = (facebookId) => R.findIndex(R.propEq("fbId", facebookId));
const actualPosition = (facebookId) => R.compose(R.add(1), getArrayIndex(facebookId), sortByScore);

let ranking = actualPosition("789789")(leaderboard);
let length = R.length(leaderboard);

console.log("You placed " + ranking + " out of " + length);

// no side effect
console.log(leaderboard);
