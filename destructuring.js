/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// normal array usage
 let ages = [20, 26, 27];
 let john = ages[0];
 let mary = ages[1];
 let joe = ages[2];
 console.log(john, mary, joe);

// Destructuring arrays - will simplify and reduce lines of code
let ages2 = [20, 26, 27];
let [john1, mary1, joe1] = ages2;
console.log(john1, mary1, joe1);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages; 
console.log(johnNative, johnSecondary);

// -to skip parameters - use commas 
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

// if values in an object are represented  by their property names, can destructure  
// only the things needed, such as firstLanguage and  thirdLanguage, just by using their property names. 
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);