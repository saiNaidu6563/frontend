/* print numbers from 1 to 10 */
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")

// Loops: loops will repeat again and again. each repitition is called iteration

let a = 10;
while (a >= 1)
{
    console.log(a);
    a--;
}
/* take a string of anyname and print ited even Numbered string
Eg: "PRASAD"  --->RSD*/
let str = "PRASAD", i = 0,str1='';
while (i < str.length)
{
    if ((i + 1) % 2 == 0)
        str1 = str1 + str[i]
    i++;
}




// while loop to print even numbers from 1 to 20
let n = 2;
while (n <= 20)
{
    console.log(n)
    n+=2;
}

/* take a name and make acronym of the name */
/* input: "Durga Prasad" ==>DP, "World Health Organization"==>WHO */

// function makeAcronym (str)
// {
//     let i = 0, str1 =str[0];
//     while (i < str.length)
//     {
//         if (str.charAt(i) == '')
//         {
//             str1=str1+str.charAt(i+1)
//         }
//         i++;
//     }
//     return str1.toUpperCase()
// }
// let res = makeAcronym("World Health Organization")
// console.log(res)

 i = 10;
while (i < 10)
{
    console.log(i);
    i++;
}
i = 10;
do
{
    console.log(i);
    i++;
} while (i < 10);


/* print  20 to 1 even numbers in reverse order, like 20 18 16 14 ....*/
 i = 20
while (i > 1) {
	console.log(i)
	i -= 2
}
n = 20
do {
	console.log(n)
	n -= 2
} while (n > 0)

for (n = 20; n >= 1; n -= 2)
{
    console.log(n)
}

/* using standard for , print array elements */
let arr = [5, 6, 7, 8, 9]
for (i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}




































