
const users = { user1: 18273, user2: 92833, user3: 90315 }
// let res = Object.keys(users).map((key) => [key, users[key]])

//2

let res = Object.keys(users).map((key) => [key, (users[key]*2)])
