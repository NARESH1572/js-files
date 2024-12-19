filter

 let a=[1,2,3,4,5,6,7]
let b=a.filter(x=>x>3)
console.log(b)//output:[ 4, 5, 6, 7 ]
let b=a.filter(x=>x=3 && x%3==0) //output;[ 3, 6 ]

let number=[1,2,3,4,5,6,7,8,9];
// let b=number.filter(x=>x%2==0) //output:[ 2, 4, 6, 8 ]
number.filter(x=>x<3==0) //output:[3, 4, 5, 6, 7, 8, 9]
console.log(b)


let fruits = ['apple', 'banana', 'cherry'];
let b = fruits.filter(fruit => fruit.length > 5);//output:[ 'banana', 'cherry' ]
console.log(b)
let fruits = ['apple', 'banana', 'cherry'];
a= fruits.filter(fruit => fruit.length > 5);
console.log(a);  // Output: ['banana', 'cherry']
let products = [
    { name: 'Laptop', price: 900 },
    { name: 'Phone', price: 80 },
    { name: 'Tablet', price: 300 }
  ];
let a=products.filter(x=>x.price<100)//output:[ { name: 'Phone', price: 80 } ]
console.log(a)

let products = [
    { name: 'Laptop', inStock: true }
    { name: 'Headphones', inStock: false }
    { name: 'Phone', inStock: true } ]
 let b = products.filter(product => product.inStock);//output:[ { name: 'Laptop', inStock: true }, { name: 'Phone', inStock: true } ]
 console.log(b); 
  
  map

  let price=[1,2,3,4,5]
  let a=price.map(x=>x>2)//output:[ false, false, true, true, true ]
console.log(a)

let price=[1,2.4,6]
let b=price.map(x=>x*2)//output:[ false, false, true, true, true ]
console.log(b)

let a=[1,2,3,4,5]
let b=a.map(x=>x*2)output:[ 2, 4, 6, 8, 10 ]
console.log(b)

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  

  const names = people.map(person => person.name);
  
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

for each

let a=[1,2,3,4,5]
a.forEach(x=>console.log(x))
console.log(a)
output
1
2
3
4
5
[ 1, 2, 3, 4, 5 ]
let cart = ['Laptop', 'Phone', 'Headphones'];

cart.forEach(item => { console.log(item);});//output:Laptop Phone Headphones

const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));
output:red ,green ,blue