//Task #1
// let name = "Meir";
// let num = 3;
// let isCool = false;
// const friends = ['Meir', 'Dana', 'Maya','Shahar'];

// console.log(`Hi ,${name}`)
// console.log(num)
// console.log(isCool)
// console.log(friends)

//Task #2&3
const person = {
     name :"Meir",
     num : 3,
     isCool :false,
     friends : ['iMeir', 'Dana', 'iMaya','Shahar']
}
const personFriends = person.friends;
for (let i=0; i < personFriends.length; i++){
    if(personFriends[i][0]==='i')
    {
        console.log(personFriends[i]);
    }
    else{
        continue
    }
}
