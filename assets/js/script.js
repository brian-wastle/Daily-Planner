let hourContainer = document.getElementById("hour-container");



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


let localArray = {
  0:{time: 9, timeFormat:'9AM', name: 'test9'},
  1:{time: 10, timeFormat:'10AM', name: 'test10'},
  2:{time: 11, timeFormat:'11AM', name: 'test11'},
  3:{time: 12, timeFormat:'12PM', name: 'test12'},
  4:{time: 1, timeFormat:'1PM', name: 'test1'},
  5:{time: 2, timeFormat:'2PM', name: 'test2'},
  6:{time: 3, timeFormat:'3PM', name: 'test3'},
  7:{time: 4, timeFormat:'4PM', name: 'test4'},
  8:{time: 5, timeFormat:'5PM', name: 'test5'}
}

localStorage.setItem("calendarArray", JSON.stringify(localArray));


let tempArray = JSON.parse(localStorage.getItem("calendarArray")) || [];


//generate each row as an element
for (let i = 0; i < Object.keys(tempArray).length; i++) {    
  //create a div for each hour
  let hourBlock = document.createElement("div");

  hourBlock.id = "hour-" + tempArray[i].time;
  hourBlock.className = "row time-block past";
  //create the row
  let hourBlock0 = document.createElement("div");
  hourBlock0.className = "col-2 col-md-1 hour text-center py-3";
  //add the left margin label
  hourBlock0.textContent = tempArray[i].timeFormat;
  //textarea
  let hourBlock1 = document.createElement("textArea");
  hourBlock1.className = "col-8 col-md-10 description";
  hourBlock1.setAttribute("rows", 3);
  //button
  let hourBlock2 = document.createElement("button");
  hourBlock2.className = "btn saveBtn col-2 col-md-1";
  hourBlock2.setAttribute("aria-label", "save");
//i element
  let hourBlock3 = document.createElement("i");
  hourBlock3.className = "fas fa-save";
  hourBlock3.setAttribute("aria-hidden", "true");

  //hourBlock1.value = localStorage.getItem(tempArray[i]);
  hourContainer.appendChild(hourBlock);
  hourBlock.appendChild(hourBlock0);
  hourBlock.appendChild(hourBlock1);
  hourBlock.appendChild(hourBlock2);
  hourBlock2.appendChild(hourBlock3);

    };

//compare time to current time to color code boxes

//pull from local storage to populate hourly notes
//document.querySelectorAll("textArea")[0].value = localStorage.getItem("");

//when save button is saved
//event delegation on button for storing hourly notes in localStorage
//