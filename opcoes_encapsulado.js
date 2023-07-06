var prompt=require('prompt-sync');
var prompt=prompt();

do{
menu();

var opcao=prompt('digite a opcao desejada: ');
   
   switch(opcao){
    case '1': { 
            potencia();
            break;
        }

    case '2': {
        par()
        break; 
    }    
   }
}while(opcao != 3);

console.log('PROGRAMA FINALIZADO')

function potencia(){
    console.log('** POTENCIA ** \n');
        var num1 = prompt('Digite primeiro numero:\n');
        var num2 = prompt('Digite segundo numero: \n');
        console.log('RESULTADO: ' + num1 + ' elevado a ' + num2 + ' é igual a ' + num1**num2);        
}

function par()
{
    console.log('** PAR OU IMPAR ** \n');
        var num = prompt('Digite o numero\n');
        if(num % 2 == 0)
            console.log('NUMERO PAR');
            else
            console.log('NUMERO IMPAR');
}

function menu(){
    console.log(' *** MENU PRINCIPAL ****\n');
    console.log(' DIGITE 1 PARA POTENCIAÇAO: \n');
    console.log(' DIGITE 2 PARA PAR OU IMPAR: ');
    console.log(' DIGITE 3 PARA SAIR: \n');
}

