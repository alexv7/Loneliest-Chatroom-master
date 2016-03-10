
$(document).ready(function() {

var timeNow = new Date($.now());
var i = 1;
var author;

$('#new-message-button').click(function(event) {
  var messageBody = $("#new-message-body").val();
  var authorArray = ["Me", "Myself", "I"];

      if (i % 3 == 0) {
        author = authorArray[0];
      i++;
    } else if (i % 3 == 1) {
        author = authorArray[1];
      i++;
    } else if (i % 3 == 2) {
        author = authorArray[2];
      i++;
    }

  var messageFormat =("<li class='message'><a class='delete' href='#'>Delete</a><h3 class='author'>" + author + "</h3><p class='message-body'>" +
      messageBody +
      "</p><span class='timestamp'>" + timeNow + "</span></li>")

  $('#conversation').append(messageFormat);
  });


$('#new-message-body').on("keypress", function (e) {
  var key = (e.keyCode ? e.keyCode : e.which);
   if(key == 13) {
// $('#new-message-button').click(function(event)

      if (i % 3 == 0) {
        author = authorArray[0];
      i++;

    } else if (i % 3 == 1) {
        author = authorArray[1];
      i++;

    } else if (i % 3 == 2) {
        author = authorArray[2];
      i++;
    }
  var messageFormat =("<li class='message'><a class='delete' href='#'>Delete</a><h3 class='author'>" + author + "</h3><p class='message-body'>" +
      messageBody +
      "</p><span class='timestamp'>" + timeNow + "</span></li>")

  $('#conversation').append(messageFormat);

}

});


$('#lonely').click(function(event){

  $.getJSON('http://api.icndb.com/jokes/random', function(data) {
    var norrisJoke = data.value.joke;

    var norrisFormat = ("<li class='message'><a class='delete' href='#'>Delete</a><h3 class='author'>" + "Chuck Norris" + "</h3><p class='message-body'>" +
        norrisJoke +
        "</p><span class='timestamp'>" + timeNow + "</span></li>")

    $('#conversation').append(norrisFormat);
  });
});


$('#conversation').on("click", '.delete', function(event) {
  $(this).parent('li').remove();
  // $('.message').remove();
});
});
