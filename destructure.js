const person ={name:'jack william',age:17,job:'facebooker',gfName:'Ema watson',address:'kochu khet',phone:'01*****',friends:['tom hancks','tomas','tom cruixx']}

const {phone,gfName,salary} =person;

// const gfName =person.gfName;
// const phone =person.phone;


// console.log(gfName,phone,salary)
// console.log(gfName,phone,salary)
// console.log(gfName,phone,salary)
// console.log(gfName,phone,salary)
// console.log(gfName,phone,salary)

const Friends = ['sakib khan','Amir khan','shahrukh khan','salman khan']

const[chotoFriend,nextFriends,...restFriends] =Friends;
console.log(restFriends)
