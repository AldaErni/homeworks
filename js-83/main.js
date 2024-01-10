// Первое задание

// const user = {
//   name: "Aldazhar",
//   age: "26",
//   height: "185",
//   sayHello(name) {
//     console.log(`Hello ${name}!`);
//   },
// };

// console.log(user.name);

// Третье задание

const users = [
  {
    name: "Aldazhar",
    age: "26",
    height: "185",
    isAdmin: true
  },
  {
    name: "Alex",
    age: "36",
    height: "175",
    isAdmin: false
  },
  {
    name: "Greg",
    age: "32",
    height: "191",
    isAdmin: false
  },
  {
    name: "Peter",
    age: "27",
    height: "182",
    isAdmin: false
  },
  {
    name: "Cyle",
    age: "29",
    height: "172",
    isAdmin: false
  },
  {
    name: "Mika",
    age: "22",
    height: "171",
    isAdmin: true
  }
]
col = 0

for(let i=0; i<users.length; i++) {
  if(users[i].isAdmin===true) {
    col++
  }
}

console.log(col)

