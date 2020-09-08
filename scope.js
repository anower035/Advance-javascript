let bonus=20;

function add(first,second) {
    let result=first+second+bonus;
    // console.log(bonus);
    if (result>9) {
        var mood="happy";
        mood="crunky";
        mood="funky";
        mood="scopy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output=add(3,5);
// console.log(bonus);
// console.log(output);