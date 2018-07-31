
//Character One

// make a variable called characterOneName and have it equal a string of Mr. Farley;
var characterOneName = "Mr. Farley";

// assign a new value, Ms. Farley, to the variable characterOneName.
characterOneName = "Ms. Farley";


// now give character one a age
// make a variable called characterOneAge and have it equal to a integer of 5 ;
var characterOneAge = 5;


// assign a new value, 6, to the varibale characterOneAge.
characterOneAge = 6;


// make a variable called characterOneSalary and have it equal to 100000.00 ;
var characterOneSalary = 100000.00;


// make a variable called characterOneSalary and have it equal to "Web Developer"
var characterOneProfession = "Web Developer";

// make a variable called characterOneSpecies and have it equal to "cat"
var characterOneSpecies = "cat";

// make a variable called characterOneLocation and have it equal to "San Francisco CA"
var characterOneLocation = "San Francisco CA";

// make a variable called characterOneRent and have it equal to "2000.00"
var characterOneRent = 2000.00;


// make a variable called characterOneExpenses and have it equal to "1500.00"
var characterOneExpenses = 1500.00;


// make a variable called characterOneYearlyRent and have it equal to characterOneYearlyRent + 12
var characterOneYearlyRent = characterOneRent * 12;

// make a variable called characterOneYealyExpenses and have it equal to 1500.00 * 12
var characterOneYearlyExpenses = characterOneExpenses * 12;

// make a variable called characterOneSavings and have it equal to characterOneYearlyRent + characterOneYealyExpenses
var characterOneSavings = characterOneYearlyRent + characterOneYearlyExpenses;

//character Two
// make a variable of charcterTwoName equal to a string of mr. snuggles
var characterTwoName = "Mr Snuggles";

// make a variable of characterTwoAge equal to a age of 3
var characterTwoAge = 3;

// now redefine characterTwoAge to four
characterTwoAge = 4;

// make a variable called characterTwoProfession and have it equal to "Accountant"
var characterTwoProfession = "Accountant";


// make a variable called characterTwoSpecies and have it equal to "mouse"
var characterTwoSpecies = "mouse";

// make a variable called characterTwoProfession and have it equal to "Accountant"
var characterTwoProfession = "Accountant";

// make a variable called characterTwoLocation and have it equal to "Oakland, CA"
var characterTwoLocation = "Oakland, CA";

// make a variable called characterTwoRent and have it equal to "4000.00"
var characterTwoRent = 4000.00;

// make a variable called characterTwoExpenses and have it equal to "500.00"
var characterTwoExpenses = 500.00;

// make a variable called characterTwoYearlyRent and have it equal to characterTwoYearlyRent + 12
var characterTwoYearlyRent = characterTwoRent * 12;

// make a variable called characterTwoYealyExpenses and have it equal to 1500.00 * 12
var characterTwoYearlyExpenses = characterTwoExpenses * 12;

// make a variable called characterTwoSavings and have it equal to characterTwoYearlyRent + characterTwoYealyExpenses
var characterTwoSavings = characterTwoYearlyRent + characterTwoYearlyExpenses;

//conditionals

// write if statement to check if characterOneName is equal to "Mr. farley"
if (characterOneName === "Mr. Farley") {
    console.log("Hello " + characterOneName);
}
    // if it does === Mr. farley than console.log a string of hello Mr. farley

    // write a else if and check if characterOneName === "Ms. Farley"
else if (characterOneName === "Ms. Farley") {
    console.log("Hello " + characterOneName);
}
    // if it does === Ms. farley than console.log a string of hello Ms. farley

    // finally if they both dont apply else
else {
    console.log("Hello Stranger");
}
    // console.log a string of hello stranger
 


// write if statement check if characterOneAge greter than characterTwoAge
if (characterOneAge > characterTwoAge) {
    console.log("Mr. Farley");
}
    // if characterOneAge is greater than characterTwoAge than console.log a string of  Mr. farley

    // else console.log a string of Ms. farley
else {
    console.log("Ms. Farley");
}


// write if statement check if characterOneLocation is equal to oakland
if (characterOneLocation === "Oakland, CA") {
    console.log("Raiders");
}
    // if characterOneLocation is equal to oakland console.log a string of raiders

    // else if check if characterTwoLocation is equal to a string of san francisco 
else if (characterTwoLocation === "San Francisco, CA") {
    console.log("Niners");
}
    //  console.log a string of Niners

    // if both condition doesn't apply write a else with a console.log of a string of warriors
else {
    console.log("Warrriors");
}


// write if statement check if characterOneRent greter than characterTwoRent
if (characterOneRent > characterTwoRent) {
    console.log(characterOneRent);
}
    // console.log of a string of Rent One

    // if rent one isn't high else

    // console.log of a string of Rent Two
else {
    console.log(characterTwoRent);
}


// write if statement check if characterOneExpenses greter than characterTwoExpenses
if (characterOneExpenses > characterTwoExpenses) {  
    console.log(characterOneExpenses);
}
    // console.log of a string of farley's shopping expense

    // if characterOneExpenses isn't greater than characterTwoExpenses else

    // console.log of a string of farley's needs kibbles
else {
    console.log("Farley needs kibble!");
}


// write if statement to check fi characterOneProfession equal to a string of web developer and characterTwoProfession is a string of Accountant
if (characterOneProfession === "Web Developer" && characterTwoProfession === "Accountant") {
    console.log("Look, a Web Developer and an Accountant.");
}
    // console.log of a string of Look at Web Developer and a Accountant

    // if characterOneProfession and  characterTwoProfession doesnt equal those string else

   // console.log of a string of what ?
else {
    console.log("What?");s
}

