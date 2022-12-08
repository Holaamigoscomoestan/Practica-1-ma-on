let Num=Number(prompt("Ingrese un número"));

if(Num == 0)
{
    msj = "El numero es igual a 0";
}

if(Num > 0)
{
        msj = "El numero es positivo"; 
}

if(Num < 0)
{
    msj = "El numero es negativo"; 
}
document.write("<br>")
document.write(msj)
document.write("<br>")
