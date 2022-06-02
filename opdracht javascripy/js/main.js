let naam = "wassim";
console.log(naam);

let achternaam = "aoulad";
console.log(achternaam);

console.log();

let volledigenaam =(naam + "   "     + achternaam);

console.log(volledigenaam);


//const w = document.querySelector(".tekst").innerHTML = (volledigenaam , wewe);


// let vraag = prompt('wat is het wachtwoord?');
// let wachtwoord ="h@ck3d";

// if (vraag === wachtwoord) {
//     alert('wachtwoord juist')
    
// }else(
//     alert('wachtwoord onjuist')
// ); if(vraag = ''){

//     alert('You’ve failed, game over')
// }

let wewe = ['Max Laadvermogen, 23 jaar, Zoetermeer. ', 'Timo Bijl, 18 jaar, Den Haag.', 'Bennie Lekker,34 jaar,Rotterdam.'];


console.log(wewe[0])

console.log(wewe[1])

console.log(wewe[2])

for (let i = 0; i < wewe.length; i++) {
    let item = wewe[i];
    const w = document.querySelector(".tekst").innerHTML += item + "</br>";
}

