var nome= prompt("Come ti chiami?");
console.log(nome);

var cognome= prompt("qual'e' il tuo cognome?");
console.log(cognome);

var colore=prompt("qual'e' il tuo colore preferito?");
console.log(colore);
var number= 19;
console.log(number);

var psw= nome+cognome+colore+number;
console.log(psw);

document.getElementById("password").innerHTML= psw;
