// ============ Exercice 1
var num1 = 1;
var num2 = 3;
if (num1 > num2) {
  console.log("num1 est le plus grand");
} else {
  console.log("num2 est le plus grand");
}

// ============ Exercice 2
// 1
var newDog = "Chihuahua";
if (newDog.length != 0) {
  console.log(`La taille de newDog est ${newDog.length}`);
}
// 2
newDog = newDog.toUpperCase();
console.log(newDog);
newDog = newDog.toLowerCase();
console.log(newDog);
// 3
if (newDog == "Chihuahua") {
  console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
  console.log("I dont care, I prefer cats");
}

// ============ Exercice 3
// 1
var num = Number(prompt("Saisissez un chiffre"));
// 2
if (num % 2 == 0) {
  console.log(`${num} est un nombre paire`);
} else {
  console.log(`${num} est un nombre impaire`);
}

// ============ Exercice 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch (users.length) {
  case 0:
    console.log("Pas d'utilisateur en ligne");
    break;
  case 1:
    console.log(`${users[0]} est en ligne`);
    break;
  case 2:
    console.log(`${users[0]} et ${users[1]}  sont ligne`);
    break;
  default:
    console.log(`${users[0]}, ${users[1]} et ${users.length} sont ligne`);
    break;
}
