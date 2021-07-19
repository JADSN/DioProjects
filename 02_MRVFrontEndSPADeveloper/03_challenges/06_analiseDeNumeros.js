numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

pares = numero.filter((n) => n % 2 === 0);
impares = numero.filter((n) => !(n % 2 === 0));
positivos = numero.filter((n) => n > 0);
negativos = numero.filter((n) => n < 0);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");
