function somar(){
    var valor1 = parseFloat(document.getElementById('isoma1').value);
    var valor2 = parseFloat(document.getElementById('isoma2').value);
    
    var resultado1 = valor1 + valor2;

    document.getElementById('resultado1').value = resultado1;
} 
function subtrair(){
    var valor1 = parseFloat(document.getElementById('isub1').value);
    var valor2 = parseFloat(document.getElementById('isub2').value); 
    
    var resultado2 = valor1 - valor2; 

    document.getElementById('resultado2').value = resultado2;
} 
function multiplicar(){
    var valor1 = parseFloat(document.getElementById('imult1').value); 
    var valor2 = parseFloat(document.getElementById('imult2').value); 

    var resultado3 = valor1 * valor2; 

    document.getElementById('resultado3').value = resultado3;
} 
function dividir(){
    var valor1 = parseFloat(document.getElementById('idiv1').value); 
    var valor2 = parseFloat(document.getElementById('idiv2').value); 

    var resultado4 = valor1 / valor2; 

    document.getElementById('resultado4').value = resultado4;
}
function limpar(){
    document.getElementById('isoma1').value = '';
    document.getElementById('isoma2').value = '';
    document.getElementById('resultado1').value = '';
} 
function limpar2(){
    document.getElementById('isub1').value = '';
    document.getElementById('isub2').value = '';
    document.getElementById('resultado2').value = '';  
} 
function limpar3(){
    document.getElementById('imult1').value = '';
    document.getElementById('imult2').value = '';
    document.getElementById('resultado3').value = '';  
} 
function limpar4(){
    document.getElementById('idiv1').value = '';
    document.getElementById('idiv2').value = '';
    document.getElementById('resultado4').value = '';  
}