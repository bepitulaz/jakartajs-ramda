"use strict";

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

let length = leaderboard.length;

leaderboard.sort((a, b) => {
  if(a.score > b.score) {
    return 1;
  }

  if(a.score < b.score) {
    return -1;
  }

  return 0;
});

for(let i = 0; i < length; i++) {
  let ranking = i + 1;
  
  if(leaderboard[i].fbId === "789789") {
    console.log("You placed " + ranking + " out of " + length);
  }
}

// the side effect
console.log(leaderboard);
