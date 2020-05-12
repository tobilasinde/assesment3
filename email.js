let Even = [];
let Odd = [];

for (let i = 1; i <= 100; i++)
{
    if (i % 2 === 0) {
        Even.push(i);
    } else {
        Odd.push(i);
    }
}

console.log("Total Number of Fizz = "      + Even.length);
console.log("Total Number of Buzz = "      + Odd.length);