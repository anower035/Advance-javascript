const numbers=[2,3,4,5,6,7,8,9];
// const output=[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result=element*element;
//     output.push(result);
// }
// function multiple(element) {
//     return element*element;
// }
// const multiple=element=>element*element;
// const multiple=x=>x*x;
// const result=numbers.map(x => x * x );
// console.log(result);
const bigger=numbers.filter(x => x<2);
const isBigger=numbers.find(x => x<5);
console.log(isBigger);
