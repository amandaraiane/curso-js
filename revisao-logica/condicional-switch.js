let diaSemana = 4;
let hoje;

switch(diaSemana){
    case 0:
        hoje = "domingo"
        break
    case 1:
        hoje = "segunda"
        break
    case 2:
        hoje = "terça" 
        break
    case 3:
        hoje = "quarta"
        break
    case 4: 
        hoje = "quinta"
        break
    case 5:
        hoje = "sexta"
        break
    case 6:
        hoje = "sabado"
        break
    default:
    hoje = "dia inválido"   
}       

console.log(`Hoje é ${hoje}`)