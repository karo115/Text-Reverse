var startButton = document.getElementById("startButton");

startButton.onclick = function() {
    var inputField = document.getElementById("userInputString");
    var str = inputField.value;

    var oriStr = [];
    var newStr = [];

    for(var i = 0; i < str.length; i++) {
        oriStr[i] = str.charAt(i);
    }
    for(var i = 0; i < str.length; i++) {
        var j = str.length -1 -i;
        newStr[i] = oriStr[j];
    }
    inputField.value = newStr.join("");
}