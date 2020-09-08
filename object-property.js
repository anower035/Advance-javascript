const students=[
    {id:11,name:"shihab"},
    {id:12,name:"partho"},
    {id:13,name:"rubel"},
    {id:14,name:"sumon"},
    {id:15,name:"batpar bappy"}
]
// const output=[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const name=element.name;
//     output.push(name);
// }
const names=students.map(s => s.name)
const ids=students.map(s => s.id)
const Filter=students.filter(s => s.id>12)
const Filter1=students.find(s => s.id>12)
console.log(Filter1);