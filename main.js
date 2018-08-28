const age = 99;
if (age < 21) {
    console.log('Sorry, Can not come in');
} else if(age > 75) {
    console.log('It is nap time');

} else {
    console.log('Come on in!!!');
}

if (age >= 21) {
    console.log('Party!!!');
} else {
    console.log('stay away!');
}

const a = 1;
const b ='1';

// a === b  //false
// a == b   //true

// a !== b //true
// a !=b  //false

const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if(favoriteAnimal === 'bear' && favoriteColor === 'blue'){
    console.log('welcome to the club');
} else if (favoriteAnimal === 'cat' || favoriteColor === 'pink') {
    console.log('$500 to join the club');
} else {
    console.log('go away');
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';

console.log('pie length:', pie.length);
console.log('#3', pie.charAt(2)); //a
console.log('indexof cat', pie.indexOf('cat')); //-1

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g,"ain't");
console.log('newQuote', newQuote);
