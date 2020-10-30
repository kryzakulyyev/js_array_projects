const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countryArr = [];
countries.forEach(item => 
  countryArr.push([item, item.substring(0,3).toUpperCase(), item.length])
)

console.log(countryArr);

// Add "-" after every even number
const numbers = "315469781318158";
let newNum = "";
for(let i=0; i<numbers.length; i++) {
  if(parseInt(numbers[i]) % 2 === 0) {
    newNum = newNum + numbers[i] + "-";
  } else {
    newNum = newNum + numbers[i];
  }
}
console.log(newNum);

// Find odd numbers
var arr = [5, 24, 122, 625, 3125, 15625];
function odd(arrOdd) {
  let oddNum = arrOdd.filter(item => item % 2 === 1);
  return oddNum.map(item => item / 25);
}
console.log(odd(arr));