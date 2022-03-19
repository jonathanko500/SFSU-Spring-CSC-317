let unitArr = [
    {
        name: "HTTP",
        startDate: '5-11',
        active: true
    },
    {
        name: "CSS",
        startDate: '5-11',
        active: true
    },
    {
        name: "JS",
        startDate: '5-11',
        active: false
    },
    {
        name: "HTML",
        startDate: '5-11',
        active: false
    }
]
 
let activeUnit1 = unitArr.filter(unit => !unit.active);
console.log(activeUnit1);

let activeUnit2 = unitArr.filter(unit => unit.active);
console.log(activeUnit2);