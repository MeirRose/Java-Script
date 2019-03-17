//דוגמה לפונקציה לא טהורה

// let num1 = 0;

// function add(num2){
//     num1 = 9;
//     return num1+num2;
// }
// console.log(num1);

// sum = add(5)
// console.log(sum);

//classroom training
//פונקציה המחשבת גיל לפי שנתון

function birthYear(birthYear, currentYear){
    return currentYear - birthYear ;
}
myAge = birthYear(1977, 2019);
console.log(myAge);

//פונקציה המקבלת המון ארגומנטים ומדפיסה אותם עם כסטרינג עם רווח
function manyArgs(a,b,c,d,e,f){
    const args = [a,b,c,d,e,f];
    
    let joinArray =args.join(" ");//מחבר לסטרינג עם רווח בין כל איבר
    return joinArray;
    // שיטה טובה יותר
    // return `${a} ${b} ${c}........
}
myStr = manyArgs('hello', 'every', 'body', 'how', 'are', 'you');
console.log(myStr);

// פונקציה המקבל =ת שם פרטי ושם משפחה כשני ארגומנטים
// מחזירה סטרינג אחד כשהשמות עם אות גדולה

function fullName(first,last){
    return `${first[0].toUpperCase()}${first.slice(1)} ${last[0].toUpperCase()}${last.slice(1)}`;//סלייס חותך מאינדקס אחד עד הסוף
}
name = fullName('meir', 'rose');
console.log(name);



