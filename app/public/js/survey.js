// When user clicks submit button
$("#submit").on("click", function (event) {
event.preventDefault();

// create a surveyInfo object
var surveyInfo = {
  name: $("#name").val().trim(),
  photo: $("#photo").val().trim(),
  scores: [
    $("#questionGroup1").val(),
    $("#questionGroup2").val(),
    $("#questionGroup3").val(),
    $("#questionGroup4").val(),
    $("#questionGroup5").val(),
    $("#questionGroup6").val(),
    $("#questionGroup7").val(),
    $("#questionGroup8").val(),
    $("#questionGroup9").val(),
    $("#questionGroup10").val()
  ]
};

console.log(surveyInfo);

// POST the data to the API and update modal info
$.post("/api/friends", surveyInfo, function (data) {
  $("#match-name").text(data.name);
  $("#match-image").attr("src", data.photo);
  $("#match-image").attr("alt", data.name);
  $("#match-modal").modal("toggle");
})
.then(function() {
  console.log("success");
});

// Reset the form
$("#name").val("");
$("#photo").val("");
$("#questionGroup1").val("");
$("#questionGroup2").val("");
$("#questionGroup3").val("");
$("#questionGroup4").val("");
$("#questionGroup5").val("");
$("#questionGroup6").val("");
$("#questionGroup7").val("");
$("#questionGroup8").val("");
$("#questionGroup9").val("");
$("#questionGroup10").val("");
});