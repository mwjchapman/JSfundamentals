
"" + 1 + 0 = 010
"" - 1 + 0 = -1
true + false 1
!true = false
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45
"4" - 2 = 42
"4px" - 2 = 4px2
" -9 " + 5 = -95
" -9 " - 5 = -95
null + 1 = 1
undefined + 1 = 1
undefined == null = true
undefined === null = false
" \t \n" - 2 = \t \n2


console.log("" + 1 + 0 );
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);

console.log('==================================');

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //The string will be concatanated not added like a math problem
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four // This one is a string therefore thirty is less than four

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

console.log('========================');

if (0) console.log('#1 zero is true')// 0 is false
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true') //null is treated a false
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

console.log('-----------------------------');


let a = 1, b = 5;
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10' : 'greater than 10'

if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

console.log(result);*/
console.log('-----------------------');


function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
    console.log(getGreeting('Mike'));
    console.log('-----------------------');
//function expression
const getGreeting1 = function (name){
    return 'Hello' + name + '!';
} 
console.log(getGreeting1(' Mike1'));  
console.log('-----------------------');
//aarow expression - can't be used in thw arrow experssion
const greeting = (name) => 'Hello' + (name) + '!';
console.log(greeting(' Mike2'));
console.log('-----------------------');


const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName, this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },

    getCatchPhrase:(person) => person.numFingers === 6 ? 'You killed my father, prepare to die':'Nice to meet you.' 
} 


    inigo.greeting(westley)
    inigo.greeting(rugen)
    

    console.log('------------------------');

    const basketballGame = {
        score: 0, 
        fouls: 0,
        freeThrow() {
        this.score++;
        return this;
        },
        basket() {
        this.score += 2;
        return this;
        },
        threePointer() {
        this.score += 3;
        return this;
        },
        halfTime() {
        console.log('Halftime score is '+this.score + ' Foul total ' +this.fouls);
        return this;
        },
        fullTime(){
            console.log('Fulltime score is ' +this.score + ' Foul total ' +this.fouls);
            
            return this;
        
        },
        foul(){
            this.fouls++;
            return this;
        }
        }
        //modify each of the above object methods to enable function chaining as below:
        basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime().foul().basket().threePointer().fullTime();

        console.log(basketballGame);
        
console.log('--------Question 8----------');
        
        const sydney = {
            name: 'Sydney',
            population: 5_121_000,
            state: 'NSW',
            founded: '26 January 1788',
            timezone: 'Australia/Sydney'
            }

            for (let key in sydney){
                console.log('value ' + sydney[key]);
            }

            const NZ = {
                name: 'Auckland',
                population: 1_121_000,
                founded: 'beginging of time',
                timezone: 'Wellington/NZ normal time'
                }

                for (let key in NZ){
                    console.log(NZ);
                }

console.log('---------Question 9--------------');

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let moreSports = [teamSports];
moreSports.push('Rugby', 'League');
moreSports.unshift('Running', 'Cycling');
console.log('moreSports = ' + moreSports);
let dog2 = dog1;
dog2 = 'Chase ' + 'Bingo';
console.log('dog2s name is ' + dog2);
cat2 = cat1;
cat2.name = ['Frosty'];
cat2.breed = ['Siberian'];
console.log(cat2);
console.log(teamSports, cat1, dog1);
//Only cat1 name changed. I changed the value of the object, not a string value.

console.log('---------Question 10-------');
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
   
    }
class PersonClass {
    constructor( name, age){
        this.name = name;
        this.age = age;
        this.human = true;
    }

        canDrive() {
           return this.age >=16 ? 'I can drive' : 'I cannot drive'
            }
        }
            let driver = new PersonClass('Mike', 39);
            console.log(driver);
            console.log(driver.canDrive());

const person1 = new Person('John', 12);
const person2 = new Person('Sally', 34);
const person3 = new PersonClass('Jeff', 19);
console.log(person1, person2);
console.log(person3);

//if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and is old enough to drive')
