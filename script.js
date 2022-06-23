// DOM function 
$("document").ready(function() {

// todays Date   
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// Current Time
var time = moment();
$("#currentTime").text(time.format("hh:mm:ss"));

// current hour Console logged 
var currentHour = moment().hours();
console.log(currentHour)

// Element identifies what has been entered in each "textarea", and then applies a "function" to ".each" 
inputEl = $("textarea").each(function(){
    var textEL = $(this).attr("id");
    console.log(textEL);
//if textEl hour is less than "currentTime" add the "past" css stylings   
    if ( textEL < currentTime) {
        $(this).addClass("past");
//if textEl hour is equal to "currentTime" add the "present" css stylings
    } else if ( textEL == currentTime) {
        $(this).addClass("present");
//if textEl hour is more than "currentTime" add the "future" css stylings
    } else if ( textEL > currentTime) {
        $(this).addClass("future");
    }

        setInterval(function(){
            inputEl
            }, 1000);
    
});

// on the click of the .saveBtn this function will run
$(".saveBtn").on("click", function(){
    //function sets the text and value of each save button to a value
    var hour = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
//stores the variable value to the local storage
    localStorage.setItem(hour, description);
})


// Gets the time and description of each value from the local storage
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
