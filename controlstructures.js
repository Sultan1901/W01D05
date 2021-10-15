let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num2 > num1) {
  console.log(num2);
} else if (num1 > num2) {
  console.log(num1);
}

//if (num1 % 2 == 1){

//   console.log('its odd');
//} else{console.log('its not odd');}
//let i = unm1
//for ( let i = 0; i > 0 ; i--)
//{ i+= console.log(i);
//} ( **** i try for this code but cant run seccessfuly )

let ammount = 9;
if (ammount <= 0) {
  console.log("please inter a postitive number");
} else if (ammount > 0) {
  console.log(ammount);
} else {
  console.log(" please inter numbers");
}

let username = "name";
let password = "pass";
if (username.length >= 6 && password.length >= 8) {
  console.log("login successful");
} else {
  console.log("login failed");
}

let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}
let startRange = 6;
let endRange = 18;
for (startRange; startRange <= endRange; startRange++) {
  console.log(startRange);
}

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
