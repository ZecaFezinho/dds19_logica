let age = prompt("Digite sua idade: ")
age = Number(age)

if (age < 12){
	alert("Infantil")
	console.log("Infantil")
}else if (age>=12 && age<18){
	alert("Adolescente")
	console.log("Adolescente")
}else if (age>=18 && age<60){
	alert("Adulto")
	console.log("Adulto")
}else{
	alert("Idoso")
	console.log("Idoso")}