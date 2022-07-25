//Higher Order Function - returns or receives a function
//Takes one or more functions as an argument (parameter) OR
//Returns a function as its result

function multiplier(factor) {
  return (x) => x * factor;
}

// function(x){  //--------(x) => {} since it's 1 only --- x => {}
//     return x * factor;
// }
// if only 1 line of code no need of {} instead it can be written as...
(x) => x * factor;
//This means create a function with arguments (x); return with x * factor

let doubler = multiplier(2);
let tripler = multiplier(3);
console.log(doubler(4));
console.log(tripler(4));

//Array Functions : map() Method -- allows to pass a function that applied to every element of an array
//map() method returns a NEW ARRAY

let vals = [4, 8, 1, 2, 9];
console.log(vals);

function duple(x) {
  return x * 2;
}

vals = vals.map(duple);
console.log(vals);

//Refactor above
let values = [4, 8, 1, 2, 9];
values = values.map((x) => x * 2);
console.log(values);

// --------------
//fill() method returns a NEW ARRAY
// fill() acts in a current or given array
let value = new Array(100);
// value = value.fill(0).map(x => Math.floor(Math.random()));
value = value.fill(0).map(Math.random); // fill with 0 to all (0, 1, 3)->fill with 0 from position 1 to 3
console.log(value);

//Using fill() to populate an empty array
let tempGirls = Array(5).fill("girl", 0);
let tempGirls1 = Array(5).fill("girl", 2);
console.log(tempGirls); // ['girl', 'girl', 'girl', 'girl', 'girl']
console.log(tempGirls1); //  [empty × 2, 'girl', 'girl', 'girl']

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1983, end: 2005 },
  { name: "Company Four", category: "Retail", start: 1999, end: 2010 },
  { name: "Company Five", category: "Technology", start: 1985, end: 2000 },
  { name: "Company Six", category: "Finance", start: 1986, end: 2009 },
  { name: "Company Seven", category: "Auto", start: 1981, end: 2003 },
  { name: "Company Eight", category: "Retail", start: 2000, end: 2012 },
  { name: "Company Nine", category: "Retail", start: 2012, end: 2015 },
  { name: "Company Ten", category: "Auto", start: 1987, end: 2000 },
];

const ages = [33, 30, 25, 27, 28, 35, 53, 55, 45, 48];

//Using forEach()
companies.forEach((company) => {
  console.log(company.name);
});

//Using filter() - filter things inside the array / creates new Array
//Get ages 30 below
//-------------FOR LOOP
let createAgeBracket = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 30) {
    createAgeBracket.push(ages[i]);
  }
}
console.log(createAgeBracket);
//------------FILTER() long version
const createAgeBracket1 = ages.filter((age) => {
  if (age < 30) {
    return true;
  }
});
console.log(createAgeBracket1);
//------------FILTER() short version
const createAgeBracket2 = ages.filter((age) => age > 30);
console.log(createAgeBracket2);
// ------------FILTER() --companies startDate below 1985
const getSrStaff = companies.filter((company) => {
  if (company.start <= 1985) {
    // return true
    console.log(company.name);
  }
});

const getSrStaff1 = companies.filter((company) => company.start <= 1985);
// console.log(getSrStaff1);

//-----------FILTER()---companies Finance and Retail Only
const selectCompanies = companies.filter((company) => {
  if (company.category === "Finance" || company.category === "Retail") {
    return true;
    // console.log(company.start);
  }
});
console.log(selectCompanies);

const selectCompanies1 = companies.filter(
  (company) => company.category === "Finance"
);
console.log(selectCompanies1);

//----------MAP() ----creating New Array---going through the things in array
let createdCompanyName = [];
const createCompanyName = companies.map((company) => {
  if (company.name === "Company Three") {
    createdCompanyName.push(company.start);
  }
});
console.log(createdCompanyName);

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
console.log(testMap);

const squaredAges = ages.map((age) => Math.floor(Math.sqrt(age)));
console.log(ages, squaredAges);

const timesTwoAges = ages.map((age) => age * 2);
console.log(timesTwoAges);

const ageMap = ages
  .map((age) => Math.floor(Math.sqrt(age)))
  .map((age) => age * 3);
console.log(ageMap);

//-----------SORT() --sort company by start year

const sortedCompanies = companies.sort((company1, company2) => {
  if (company1.start > company2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

const sortedCompanies1 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies1);

// ------------SORT() sorting the ages
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);
//---SORT() in DESCENDING ORDER
const sortedAges1 = ages.sort((a, b) => b - a);
console.log(sortedAges);

//----------REDUCE()----getting the total & average the ages
let ageSum = 0;
let average = 0;
for (i = 0; i < ages.length; i++) {
  ageSum += ages[i];
  average = ageSum / ages.length;
}
console.log(ageSum);
console.log(average);

//-----REDUCE()---- TOTAL & AVERAGE // 0 is the initial value for SUM
const ageSum1 = ages.reduce((total, age) => total + age, 0);
const ageAve = ages.reduce((total, age) => total + age, 0) / ages.length;
console.log(ageSum1);
console.log(ageAve);

//---REDUCE( ---total years of the companies)
const yearsCompanies = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(yearsCompanies);

let companyName = [];
companies.forEach((company) => {
  const totalYears = company.end - company.start;
  companyName.push(`${company.name}, ${totalYears} total years`);
});
console.log(companyName);

const totalYears1 = companies.map(
  (company) =>
    `${company.name} has total years of ${company.end - company.start}`
);
console.log(totalYears1);

//-----COMBINED METHODS ----

const combinedAges = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combinedAges);
