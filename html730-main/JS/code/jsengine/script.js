console.log(a);//undefined //Hoisting -- accessing values before its declaration
console.log(a + 1);
var a = 25;
function sum ()
{
    console.log(b,c)
    var b = 20, c = 30;
    console.log(b+c)
}
sum()