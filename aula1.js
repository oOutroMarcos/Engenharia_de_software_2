function imc(){

    let nome = prompt("Qual seu nome ?");
    let altura = prompt("Qual é sua altura");
    let peso = prompt("Qual é o seu peso?");
    let resp;
    let massa = peso / (altura**2);

    if (massa < 16){
        resp = "Baixo peso muito grave"
    }
    else if(16 < massa < 16.990){
        resp = "Baixo peso grave"
    }

    else if(17 < massa < 18.49){
        resp = "Baixo peso"
    }

    else if(18.50 < massa < 24.99){
        resp = "Peso normal"
    }
    
    else if(25 < massa < 29.99){
        resp = "Sobrepeso"
    }

    else if(30 < massa < 34.99){
        resp = "Obesidade grau I"
    }

    else if(35 < massa < 39.99){
        resp = "Obesidade grau II"
    }

    else if(40 < massa){
        resp = "Obesidade grau III"
    }

    return(alert(`${nome} possui índice de massa corporal igual a ${massa}, sendo classificado como: ${resp}`))
}


function idade(){

    let idade = prompt("Qual a sua idade ?");
    let resp;

    if(0 <= idade < 15){
        resp = "Criança"
    }

    else if(15 <= idade < 30){
        resp = "Jovem"
    }

    else if(30 <= idade < 60){
        resp = "Adulto"
    }

    else if(idade >= 60){
        resp = "Idoso"
    }

    return(alert(resp))
}


function nota(){

    let notaf;

    let peso1 = 2;
    let peso2 = 5;
    let peso3 = 3;

    let nota1 = prompt("Qual é sua primeira nota ?");
    let nota2 = prompt("Qual é sua segunda nota ?");
    let nota3 = prompt("Qual é sua terceira nota ?");

    notaf = (((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / 10);

    if(notaf > 10){
        alert(`A média do aluno ${notaf} e sua classificação é "A+"`)
    }

    else if(10 > notaf > 9){
        alert(`A média do aluno ${notaf} e sua classificação é "A"`)
    }

    else if(9 > notaf > 8){
        alert(`A média do aluno ${notaf} e sua classificação é "B"`)
    }

    else if(8 > notaf > 7){
        alert(`A média do aluno ${notaf} e sua classificação é "C"`)
    }

    else if(7 > notaf > 6){
        alert(`A média do aluno ${notaf} e sua classificação é "D"`)
    }

    else if(6 > notaf > 5){
        alert(`A média do aluno ${notaf} e sua classificação é "E"`)
    }

    else if(notaf < 5){
        alert(`A média do aluno ${notaf} e sua classificação é "F"`)
    }

}


function calcEntrega(){

    let pecas = prompt("Quantas peças serão transportadas?");
    let regiao = prompt("Para que região sera feita o transporte?\n1-Sul, 2-Sudeste, 3-Centro-Oeste");
    let distancia = prompt("Quantos quilometros são a viagem?");
    let precop;
    let preco;

    let rast = prompt("Você gostaria de restrear sua carga?\nDigite 'S'-sim ou 'N'-não");
    let taxar = 0;
    
    if((rast.toUpperCase()) = "S"){
        let taxar = 200
        alert("Sua entrega sairá R$ 200 mais cara")
    }

    if(regiao = 1){
         if(pecas <= 1000){
            preco = (pecas + (distancia * 10) + taxar)
         }
         else if(pecas > 1000){
            precop = pecas + ((pecas - 1000) * 0.90)
            preco = (precop + (distancia * 10) + taxar)
         }

    else if(regiao = 2){
        if(pecas <= 1000){
            precop = (pecas * 1.20)
            preco = (precop + (distancia * 10) + taxar)
         }
         else if(pecas > 1000){
            precop = (pecas * 1.20) + ((pecas - 1000) * 1.054)
            preco = (precop + (distancia * 10) + taxar)
         }
    }
    else if(regiao = 3){
        if(pecas <= 1000){
            precop = (pecas * 1.30)
            preco = (precop + (distancia * 10) + taxar)
         }
         else if(pecas > 1000){
            precop = (pecas * 1.30) + ((pecas - 1000) * 1.131)
            preco = (precop + (distancia * 10) + taxar)
         }
    }

    alert(`Taxa do rastreamento: R$${taxar}\n
            Taxa do frete pelas pecas: R$${precop}\n
            Taxa do frete por quilômetro: R$${(distancia * 10)}\n
            Taxa total do frete: R$${preco}`)
    }

}


function hotel(){
    let codigo = prompt("Digite código:");
    let nhoras = prompt("Horas trabalhadas:");
    let turno = prompt("Seu turno (M – matutino, V – vespertino ou N – noturno):").toUpperCase;
    let categoria = prompt("Sua categoria (F – funcionário, G – gerente):").toUpperCase;
    let salariom = prompt("Salário mínimo: ")



    alert(`${codigo}, ${nhoras}, valor da hora trabalhada, salário inicial, auxílio alimentação e salário final (salário inicial + auxílio-alimentação`)
}