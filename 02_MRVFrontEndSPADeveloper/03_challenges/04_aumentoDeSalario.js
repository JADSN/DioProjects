const lines = gets();
const salary = Number(lines);

let percent;

if (salary <= 400.0) {
    percent = 15.0;
} else if (salary <= 800.0) {
    percent = 12.0;
} else if (salary <= 1200.0) {
    percent = 10.0;
} else if (salary <= 2000.0) {
    percent = 7.0;
} else {
    percent = 4.0;
}

const reajust = (percent / 100.0) * salary;
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
