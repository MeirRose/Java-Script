function doWithName(fn){
    return function newFunction(name){
        return fn(name);
 }
}
function consoleHi(name) {
    console.log(`Hi ${name}`);
}
function consoleBye(name){
    console.log(`Bye ${name}`);
    
}
const consoleHiName = doWithName(consoleHi);
const consoleByeName = doWithName(consoleBye);
consoleHiName('Meir');
consoleByeName('Meir');
// פונקציה שמחזירה פונקציה) הפונקציה הראשונה מקבלת לתוכה פונקציה שמקבלת פונקציה בעצמה)
// הפונקציה consoleHiName 
//  מפעילה את הפונקציה הראשוונה עם השם החדש בעזרת הפונקציה consoleHi  
// שמקבלת את השם

function consoleUpper(name){
    console.log(name.toUpperCase());
}
const consoleToUpper = doWithName(consoleUpper);
consoleToUpper('meir')