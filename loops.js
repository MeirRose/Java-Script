// not reccomneded loop way!!!!1
// const friend = ['elly', 'yoni', ' moshe','xack', ' john'];

// for (let i=0; friend.length; i++){
//     console.log(friend[i])
// }



// for (let i=0; i<10; i++){ //i=0, as long i< 10, add to i
//     console.log(i)
// }
// //a better loop, for every name in friend, print friend
// const friend = ['elly', 'yoni', 'moshe','xack', 'john'];
// for(let name of friend){
//     console.log(name);
// }
// //3th way - better
// // friend.foreach(x => console.log(x))

//WHILE
// let running = true;
// let counter = 0;
// while (running){
//     console.log(counter);
//     counter++;
//     running = counter === 10? false : true;
// }

let quit = false;
let counter = 0;

while (!quit){
    console.log(counter);
    counter++;
    quit = counter === 10 ? true : false;
}