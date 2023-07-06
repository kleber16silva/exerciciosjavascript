var prompt=require('prompt-sync');
var prompt=prompt();

do{
   console.log(' *** MENU PRINCIPAL ****');
   console.log(' DIGITE 1 PARA POTENCIAÇAO');
   console.log(' DIGITE 2 PARA PAR OU IMPAR');
   console.log(' DIGITE 3 PARA SAIR');
   
   var opcao=prompt('digite a opcao desejada: ');
   
   switch(opcao){
    case '1': { 
        console.log('** POTENCIA **');
        var num1 = prompt('digite primeiro numero');
        var num2 = prompt('digite segundo numero');
        console.log('RESULTADO: ' + num1 + ' elevado a ' + num2 + ' é igual a ' + num1**num2);
        break;  
        }

    case '2': {
        console.log('** PAR OU IMPAR **');
        var num = prompt('digite o numero');
        if(num % 2 == 0)
            console.log('NUMERO PAR');
            else
            console.log('NUMERO IMPAR');

        break; 
    }    
   }
}while(opcao != 3);

console.log('PROGRAMA FINALIZADO')