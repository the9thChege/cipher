$(document).ready(function() {
  $('#start').click(function() {
    var sentence1 = prompt("Please enter a sentence in the provided box.");
    alert("You wrote: " + sentence1);
    var char1 = (sentence1.charAt(0));
    var char2 = sentence1.charAt(sentence1.length - 1);
    $("h1").after("<p>Now click here...</p>");
  });

  $('#start').on("click", 'p', function() {
      alert("If we take your first and last characters and capitalise them, we get: ");
      alert(char1.toUpperCase() + char2.toUpperCase());
      alert("When we reverse this, we get: ");
      alert(char2.toUpperCase() + char1.toUpperCase());
    });
  });
