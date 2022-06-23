
$("document").ready(function() {

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

var time = moment();
$("#currentTime").text(time.format("hh:mm:ss"));



var currentHour = moment().hours();
$("#currentHour").text(time.format("h"));

inputEl = $("textarea").each(function(){
    var textEL = $(this).attr("id");
    console.log(textEL);

    if ( textEL < currentTime) {
        $(this).addClass("past");

    } else if ( textEL == currentTime) {
        $(this).addClass("present");

    } else if ( textEL > currentTime) {
        $(this).addClass("future");
    }

        setInterval(function(){
            inputEl
            }, 1000);
    
});


$(".saveBtn").on("click", function(){
    var hour = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    localStorage.setItem(hour, description);
})

$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12noon .description").val(localStorage.getItem("12noon"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));




});
