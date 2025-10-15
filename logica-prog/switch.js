const data = new Date()
let diaDaSemana = ""

switch(data.getDay()) {
    case 0:
        diaDaSemana = "domingo"
        break
    case 1:
        diaDaSemana = "segunda"
        break
    case 2:
        diaDaSemana = "terça"
        break
    case 3:
        diaDaSemana = "quarta"
        break
    case 4:
        diaDaSemana = "quinta"
        break
    case 5:
        diaDaSemana = "sexta"
        break
    case 6:
        diaDaSemana = "sabado"
        break 
    default:
        diaDaSemana = ""      
}

console.log(diaDaSemana)