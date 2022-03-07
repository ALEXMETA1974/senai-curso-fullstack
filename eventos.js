//Boas Vindas!
console.log("Bem vindo ao Flow Eventos")
//Informações da Data do Evento
console.log("Informe a data do Evento")

var hoje = new Date().toDateString() // busca data atual do sistema
var data = new Date("03/20/2022").toDateString() //data do evento
var agenda = false // verifica se ja existe 
var evento = 2 //tipo de evento
let idade = 19 //idade do participante do evento
let acompanha = false   //verifica se os pais acompnham os fihos em caso de evento infanto-juvenil

//console.log(hoje)
console.log(data)

//Comparando as Datas e verficando se há evento na data requerida
if (hoje > data) {
  console.log("Informe outra data")
} else if (hoje === data) {
  console.log("Não agendamos para o mesmo dia")
} else if (agenda === false) {
  //Escolhe o Tipo de Evento para Cadastro
  console.log('Escolha o Evento para o Agendamento')
  console.log(" 1 - INFANTO JUVENIL")
  console.log(" 2 - SHOW OU FESTAS")
  console.log(" 3 - PALESTRAS OU SEMINÁRIOS")
} 
  switch (evento) {
    case 1:
      console.log(evento)
      console.log('Voce Escolheu o Evento: Infanto-Juvenil')
      if (idade >=18) {
        console.log("Esse participante não pode participar do evento")
        console.log("Favor inserir partipantes menores de 18 anos")
      } else if (acompanha === false){
        console.log("Verificar se os pais acompanharão o menor")
        console.log("Não acompanha")
        console.log("Evento não pode ser Agendado, origatória presença dos pais")
    }else{
      console.log("Verificar se os pais acompanharão o menor")
      console.log("sim, acompanha")  
      console.log("Evento agendado com sucesso!!")
    }
      break
    case 2:
      console.log(evento)
      console.log('Voce Escolheu o Evento Shows/Festas')
      console.log("Informe a Idade do participante:")
      console.log("idade do participante", idade)

      if (idade < 18){
      console.log("Participante não possui idade para o Evento")
      console.log("Favor insira participantes com idade igual ou superior a 18 anos")
      }else{
      console.log("Evento Cadastrado com sucesso!!")
    }
      break
      case 3:
      console.log(evento)
      console.log('Voce Escolheu o Evento Seminários/Palestras')
      console.log("Informe a Idade do participante:")
      console.log("idade do participante", idade)

      if (idade < 18){
      console.log("Participantes não possui idade para partucipar do Evento")
      console.log("Favor insira participantes com idade igual ou superior a 18 anos")
      }else{
      console.log("Evento Cadastrado com sucesso!!")
    }
      break
    default:
   console.log("Desculpe, Voce escolheu uma opção inválida, não foi possível cadastrar o evento")
  }

  








