// Uppgift 1a1:
function buttonAction1() {
  //Kod här!
  var my_time = new Date();
    alert("Hello you :)");
    alert(my_time);
  var date = new Date();
} // Slut!

// Uppgift 1a2 här:
function buttonAction2() {
  //Kode här
  name = prompt("Enter input");
  alert(name.toUpperCase());
} 
// Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  //Kode här!
  document.getElementById("result3").innerHTML = name;
  console.log(name)
  // //Kode här
} // Slut!

// Uppgift 1a4 här:
function buttonAction4() {
  //Kode här!
  let initial = new Date();
  function time() {
    let newTime = new Date();
    let result = newTime - initial;
    alert(result / 1000);

    document.getElementsByName("button4")[0].onclick = buttonAction4;
  }
  document.getElementsByName("button4")[0].onclick = time;
} // Slut!

// Uppgift 1a5 här:
function buttonAction5() {
  //Kode här!
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  number1 < 0 || number1 >1000 || number2 <0 || number2 >1000 ? alert("Välj ett tal mellan 0 och 1000")
  : document.getElementById("result5").innerHTML = number1 * number2;
} // Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  //Kode här!
  var input = document.getElementById("textInput").value;
  var counter = 1;
  for (var i = 0; i < input.length; i++) {
    var amountOfLetters = input[i];
    amountOfLetters === " " ? counter++ : false;
  }
  document.getElementById("wordCount").innerHTML = counter;
} // Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  //Kode här!
  var input = prompt("Enter input");
  var input2 = "";
  for (var i = 0; i < 10; i++) {
    input2 += input
  }
  alert(input2)
} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
    var x = document.getElementById("hiddenButton");
    x.style.visibility === "hidden" ? x.style.visibility = "visible" 
    : x.style.visibility = "hidden";
  //Kode här!
} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  var text = document.getElementById("textArea").value;
  var comma = text.split(",");
  var table = document.createElement("table");
  var row = document.createElement("tr");
  var tableData;
  
  for (var i = 0; comma.length > i; i++) {
   if (i !=0 && i % 7 === 0) {
    table.appendChild(row);
    //Create a TableRow
    row = document.createElement("tr");    
    }
    //Create TableData
    tableData = document.createElement("td");
    tableData.appendChild(document.createTextNode(comma[i]));
    row.appendChild(tableData);
    }
    table.appendChild(row);
    document.getElementById("tableContainer").appendChild(table);

} //Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
