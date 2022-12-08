let Num1=Number(prompt("Ingrese un numero"));
let Num2=Number(prompt("Ingrese un numero"));
if(Num1 > 0 && Num2 > 0)
{
    msj = "Los numeros son positivos";
}

if(Num1 < 0 && Num2 < 0)
{
    msj = "Ninguno de los numeros son positivos";
}

if(Num1 > 0 && Num2 < 0)
{
    msj = "Uno de los numeros es positivo";
}

if(Num1 < 0 && Num2 > 0)
{
    msj = "Uno de los numeros es positivo";
}
document.write("<br>")
document.write(msj)
document.write("<br>")
