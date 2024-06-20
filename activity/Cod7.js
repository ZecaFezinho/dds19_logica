let positivo=0
let negativo=0

for(c=0;c<10;c++){
let num = prompt("Digite um número: ")
num = Number(num)
if (num < 0){
    negativo +=1}
else{
    positivo +=1}
}
 
console.log("Negativos: ", negativo)
console.log("Positivos: ", positivo)
