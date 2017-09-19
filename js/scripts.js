var output = ""


$(document).ready(function(){
  $("form#sentence").submit(function(event){
    event.preventDefault();
    var answer = $("input#userInput").val();
    var convert = answer.split("");
    for (i=0;i<answer.length;i++){
      var char = convert[i];
      if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        char = "_"
      }
      output = output + char;
    };
    $("#display").text(output);
    $("form#sentence").hide();
  });
});

//var replacedVowels = word.replace(/[aeiou]/gi, "_");
