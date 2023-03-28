// Variable set
var button = $(".saveBtn")
var input = $(".description")
var today = dayjs()
var time = today.format('H')

// Array of time slots identified by the ID
var hours = [$("#hour-9"), $("#hour-10"), $("#hour-11"), $("#hour-12"), $("#hour-13"), $("#hour-14"), $("#hour-15"), $("#hour-16"), $("#hour-17")]

// The date is displayed using today variable formatted
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'))

// Changes the background color of the time slots
for (let i = 0; i < hours.length; i++) {
  // Sets the time equal to the i + 9 for comparing to the time slot IDs
  const hour = i + 9;
  // Sets a var for the time slot IDs
  const hourID = hours[i].attr("id")
  // Retrieves the to-do for the hour from local storage using the hour ID as the key under which it was stored
  hours[i].children(".description").val(localStorage.getItem(hourID))
  // If the time is later, equal or earlier than the time slot shown, the background will change by adding a class
  if (hour < time) {
    hours[i].children(".description").addClass("past")
  }
  else if (hour == time) {
    hours[i].children(".description").addClass("present")
  }
  else if (hour > time) {
    hours[i].children(".description").addClass("future")
  }
}

// Saves to-do in local storage under key equal to time slot ID
button.on("click", function (event) {
  var btnClicked = $(event.target)
  // Finds the input, which is a sibling of the button clicked, and stores its text as a variable
  var todo = btnClicked.siblings(".description").val()
  // Finds the value of the id of the parent of the button, which is the time slot container
  var key = btnClicked.parents().attr("id")
  // Stores user input in local storage under the key equal to the ID of the time slot where the input was placed
  localStorage.setItem(key, todo)
})

