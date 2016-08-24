"use strict";
const R = require("ramda");

let users = [{
  fbId: "123123",
  room: "aaa"
}, {
  fbId: "456456",
  room: "aaa"
}/*, {
  fbId: "78979",
  room: "bbb"
}*/];

// logic: 1 room is only for 2 players

const lastRoomId = R.compose(R.prop("room"), R.last);

const playersInRoom = (roomId) => R.compose(R.length, R.filter(R.propEq("room", roomId)));

const createOrJoin = R.ifElse(
    R.gt(2),
    () => "join existing room",
    () => "create new room");

const startTheGame = (roomId) => R.compose(createOrJoin, playersInRoom(roomId));

let roomId = lastRoomId(users);
console.log(startTheGame(roomId)(users));
