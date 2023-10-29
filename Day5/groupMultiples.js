// Group multiples from 1 to 10
// const arr1 = [34, 12, 10, 15, 7, 21, 81]
// Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }]

const array = [34, 12, 10, 15, 7, 21, 81];
const result = [];

for (let i = 1; i <= 10; i++) {
  const multiples = array.filter(num => num % i === 0);
  if (multiples.length > 0) {
    result.push({ [i]: multiples });
  }
}

console.log(result);