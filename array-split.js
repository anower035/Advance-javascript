const nums=[1,2,3,4,5,6,7,8,9]
const part=nums.slice(3,6);
const removed=nums.splice(3,6,77,66);
const together=nums.join("");
const together1=nums.join(" ");
const together2=nums.join(",");
const together3=nums.join("ami,");
console.log(removed);
console.log(part);
console.log(nums);
console.log(together);
console.log(together1);
console.log(together2);
console.log(together3);