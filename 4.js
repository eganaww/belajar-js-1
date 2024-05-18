// looping
const x = [3,5,12];
let total = 0;

// for
for(let z = 0; z < x.length; z++){
    total += x[z]; 
}

console.log(`Total menggunakan perulangan For adalah ${total}`)

// while
let z = 0;
while(z < x.length, z++){
    total += x[z];
}

console.log('Total menggunakan perulangan While adalah ', total)


// do while
total = 0; // reset variable value
z = 0;
do{
    total += x[z];
    z++;
} while (z < x.length)

console.log('Total menggunakan perulangan Do While adalah ', total)