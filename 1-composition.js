"use strict";
const R = require("ramda");

let myData = [{
  title: "Programming with Ramda",
  isPublished: true,
  tags: ["javascript", "fp"]
}, {
  title: "Why Am I Learning Haskell?",
  isPublished: false,
  tags: ["haskell", "fp"]
}, {
  title: "Clojure or ClojureScript?",
  isPublished: true,
  tags: ["lisp", "jvm", "nodejs"]
}];

const articleByTags = (tagName) => R.filter((post) => R.contains(tagName, post.tags));
const publishedOnly = R.filter(R.prop("isPublished"));
const uppercaseTitle = R.map((post) => R.toUpper(post.title));

// I want to get the published article filtered by its tag, and make the title uppercase
const printPublishedTitle = (tagName) => R.compose(
    uppercaseTitle, 
    publishedOnly, 
    articleByTags(tagName));

console.log(printPublishedTitle("fp")(myData));

// Without function composition
console.log(uppercaseTitle(publishedOnly(articleByTags("lisp")(myData))));
