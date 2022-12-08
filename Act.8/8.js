let Num1=Number(prompt("Ingrese un numero"));
let Num2=Number(prompt("Ingrese un numero"));
let Num3=Number(prompt("Ingrese un numero"));

if(Num1 > Num2 && Num1 > Num3)
{
    document.write("<br>")
    document.write("El numero", Num1, " es el mayor de todos");
    document.write("<br>")
}

if(Num2 > Num1 && Num2 > Num3)
{
    document.write("<br>")
    document.write("El numero", Num2, " es el mayor de todos");
    document.write("<br>")
}

if(Num3 > Num1 && Num3 > Num2)
{
    document.write("<br>")
    document.write("El numero", Num3, " es el mayor de todos");
    document.write("<br>")
}