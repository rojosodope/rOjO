
var myString = "hello my name is";
var myNumber = 7;
var myBoolean = true;
var myVar=null;
console.log(myVar);
var myArray = ["sneakers" , "t-shirt" , "jacket"];
var myShoe; //undefined
// if the variable myBoolean is equal to true
// then pop out the variable myString
// else console myString

if(myBoolean!==true)
	alert(myString);
}
else {
	console.log(myString);
}

// for each element of my array
// console.log the element
// index = index + 1 is the same as index++
for (var index =0; index < myArray.length ; index++){
console.log(myArray[0]);
}
//jquery is very helpful for manipulating DOMs
// $ is the object selector in javascript

var myElement = document.getElementById("someElement").innerhtml;
alert(myElement);

var another Element = $('#someElement').text()