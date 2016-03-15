/*
* Sizle
* Scale CSS Size - Size Styler
* Licensed under MIT.
*/
$("#submit").on('click', function(event) {
  event.preventDefault();
  width = $("#width").val();
  height = $("#height").val();
  $("#shape").attr({
    width: width,
    height: height
  });
});
