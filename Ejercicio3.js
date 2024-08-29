// 3. Palíndromo: 
// Dada una palabra y verifica si es un palíndromo (es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante).
const text3 = "reconocer";
const palabraInvertida = text3.split("").reverse().join("");
if (text3 === palabraInvertida) {
  console.log("3. La palabra '"+text3+"' es un palíndromo");
} else {
  console.log("3. La palabra '"+text3+"' no es un palíndromo");
}