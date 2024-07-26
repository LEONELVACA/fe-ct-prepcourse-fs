let numero1 = 4
let numero2 = 5

console.log( numero1 < 0 && numero2 < 0 && numero1 === numero2)

let booleano1 = true
let booleano2 = true
console.log (booleano1 === true && booleano2 === true)

let NumeroMasGrande = Math.max(numero1,numero2)
console.log(NumeroMasGrande)

let letras = 323
console.log (letras.toString().length=== 3)


let numero3 = 6

console.log (numero3 % 2=== 0 && numero3 % 3 === 0)

let numero4 = 10
console.log(numero4 > 0 && numero4 <= 10)

let demo = 2
switch (demo) {
    case 1:
        console.log("Es 1")
        break;
        case 2:
        console.log("Es 2")
        break;
        case 3:
        console.log("Es 3")
                break;
    default:
        break;
}

let numero5 = 5
console.log (numero5 % 2 === 0 || numero5 % 2 === 1 || numero5 === 0)

let num1 = 6
let num2 = 2
let num3 = 10

if (num1 === 0 && num2 === 0 && num3 ===0){
    console.log("Error")
}
else if (num1 < 0 || num2 < 0 || num3 < 0){
    console.log("Hay negativos")
}
else if (num3 > num1 && num3 > num2){
    console.log(num3 + 1)
}
else if (num1 > num2 && num1 > num3 && num1 > 0){
    console.log("Numero 1 es mayor y positivo")
} else console.log(false)


let Dias = 1

switch (Dias) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
    default:
        console.log ("No es un dia de la semana")
        break;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let producto = 1
let a = 1
let b = 5
for (let i = a; i <= b; i++){
    producto*=i;
}
console.log(producto)



let suma = 0
let n = 10
if ( n === 0) console.log(0)
for(let i = 1; i <= n; i++){
    console.log(suma += i)
}
    console.log(suma)



let suma1 = 0
let n1 = 15
for (let i = 1; i <= n1; i++){
    suma1 += i;
    if(suma1 >= 100) break
}
console.log(suma1)


let asd = 2
while (asd > 1) {
    if (asd % 2 !== 0){
        console.log(false);
    }
    asd = asd / 2
    console.log(true)
}

let NumPrimo = 4
if (NumPrimo / NumPrimo === 1 && NumPrimo / 1 === 1)console.log(true)
    else console.log(false)


