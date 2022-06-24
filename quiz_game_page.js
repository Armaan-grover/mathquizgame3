function send(){
    number1=document.getElementById("player1input").value
    number2=document.getElementById("player2input").value
    actualAnswer=parsInt(number1) * parsInt(number2);
    questionNumber= "<h4>" + number1 + "X" + number2 + "</h4>";
    inputBox="<br> Answer : <input type='text' id='checkInputBox'>";
    checkButton="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= questionNumber+ inputBox+ checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}