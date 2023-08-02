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
  9:'test9',
  10:'test10',
  11:'test11',
  12:'test12',
  1:'test1',
  2:'test2',
  3:'test3',
  4:'test4',
  5:'test5'
}

localStorage.setItem("calendarArray", JSON.stringify(localArray));


let tempArray = JSON.parse(localStorage.getItem("calendarArray")) || [];


//generate each row as an element
for (let i = 0; i < Object.keys(tempArray).length; i++) {
        
  let hourBlock = document.createElement("div");
  
  
  
  
  //get key name and append it to the string below
  hourBlock.id = "hour-" + ;
  hourBlock.className = "row time-block past";
  
  let hourBlock0 = document.createElement("div");
  hourBlock0.className = "col-2 col-md-1 hour text-center py-3";

  //get key name and append it to string below and use dayjs to convert time
  hourBlock0.textContent = "9AM";
  
  let hourBlock1 = document.createElement("textArea");
  hourBlock1.className = "col-8 col-md-10 description";
  hourBlock1.setAttribute("rows", 3);
  
  
  let hourBlock2 = document.createElement("button");
  hourBlock2.className = "btn saveBtn col-2 col-md-1";
  hourBlock2.setAttribute("aria-label", "save");

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