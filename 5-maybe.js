"use strict";
const R = require("ramda");
const S = require("sanctuary");

function fetchUsers() {
  return [{
    name: "Budi",
    email: "Budi@email.com"
  },{
    name: "Asep",
  },{
    name: "Deni",
  },{
    name: "Didit",
    email: "Didit@email.com"
  }];
}

console.log("=== without maybe ===")

const lowerCaseEmailNoMaybe = (user) => R.toLower(user.email);
const transformNoMaybe = R.map(lowerCaseEmailNoMaybe);

//let naked = transformNoMaybe(fetchUsers());
//console.log(naked);

console.log("\n=== with maybe ===");

const lowerCaseEmail = (user) => S.toMaybe(user.email).map(R.toLower);
const transform = R.map(lowerCaseEmail);

const unwrapMaybe = R.map(S.maybeToNullable);

let wrapped = transform(fetchUsers());
console.log(wrapped);
console.log(unwrapMaybe(wrapped));
