let stat = ["aprovado", "de recuperação", "reprovado"]
let nUm = prompt("Digite a primeira nota:" )
nUm = Number(nUm)
let nDois = prompt("Digite a segunda nota:" )
nDois = Number(nDois)
let nTres = prompt("Digite a terceira nota:" )
nTres = Number(nTres)
let nQuatro = prompt("Digite a quarta nota:" )
nQuatro = Number(nQuatro)

let media = ((nUm + nDois + nTres + nQuatro) / 4) 
media *= 100
media = Math.round(media)
media /= 100

if (media >= 7){
	alert("Sua média foi de " + media, " pontos") 
	alert("Você está " + (stat[0]))
	console.log("Sua média foi de " + media, " pontos")
	console.log("Você está " + (stat[0]))
}else if(media >= 5 && media < 7){
	alert("Sua média foi de " + media, " pontos")
	alert("você está " + (stat[1]))
	console.log("Sua média foi de " + media, " pontos")
	console.log("Você está " + (stat[1]))
}else{
	alert("Sua média foi de " + media, " pontos")
	alert("você está " + (stat[2]))
	console.log("Sua média foi de " + media, " pontos")
	console.log("Você está " + (stat[2]))}
