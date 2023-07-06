var prompt=require('prompt-sync');
var prompt=prompt();

do{
    var nota1=prompt('digite nota 1: ');
    } while ( nota1 < 0 || nota1 > 10)

do{
    var nota2=prompt('digite nota 2: ');
    }while( ( nota2 < 0 || nota2 > 10))

do{    
    var nota3=prompt('digite nota 3: ');
    }while( nota3 < 0 || nota3 > 10)

var media = ( ( parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) ) / 3);
console.log( 'a media é: ' + media);

if(media >= 6)
    console.log(' ALUNO APROVADO');
    else
    console.log('ALUNO REPROVADO');