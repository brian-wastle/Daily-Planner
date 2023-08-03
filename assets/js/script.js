let hourContainer = document.querySelector('#hour-container')
let dateAndTime = document.querySelector("#date-and-time");
dateAndTime.textContent = dayjs().format("MMM DD, YYYY");


if (dayjs().hour() > 17 ) {
  localStorage;
}


let localArray = {
  0:{time: 9, timeFormat:'9 AM', activity: ''},
  1:{time: 10, timeFormat:'10 AM', activity: ''},
  2:{time: 11, timeFormat:'11 AM', activity: ''},
  3:{time: 12, timeFormat:'12 PM', activity: ''},
  4:{time: 13, timeFormat:'1 PM', activity: ''},
  5:{time: 14, timeFormat:'2 PM', activity: ''},
  6:{time: 15, timeFormat:'3 PM', activity: ''},
  7:{time: 16, timeFormat:'4 PM', activity: ''},
  8:{time: 17, timeFormat:'5 PM', activity: ''}
}


if ((JSON.parse(localStorage.getItem("calendarArray")) === null) || (dayjs().hour() > 23 )) {
  localStorage.setItem("calendarArray", JSON.stringify(localArray));
}

let tempArray = JSON.parse(localStorage.getItem("calendarArray")) || [];


//generate each row as a new element
for (let i = 0; i < Object.keys(tempArray).length; i++) {    
  //create a div for each hour
  let hourBlock = document.createElement("div");

  hourBlock.id = "hour-" + tempArray[i].time;
  hourBlock.className = "row time-block past";
  hourBlock.setAttribute("data-time", tempArray[i].time);
  
  //create the row
  let hourBlock0 = document.createElement("div");
  hourBlock0.className = "col-2 col-md-1 hour text-center py-3";
  
  //add the left margin label
  hourBlock0.textContent = tempArray[i].timeFormat;
  
  //textarea
  let hourBlock1 = document.createElement("textArea");
  hourBlock1.className = "col-8 col-md-10 description";
  hourBlock1.id = tempArray[i].time;
  hourBlock1.setAttribute("rows", 3);
  hourBlock1.value = tempArray[i].activity;
  
  //button
  let hourBlock2 = document.createElement("button");
  hourBlock2.className = "btninput btn saveBtn col-2 col-md-1";
  hourBlock2.id = tempArray[i].time;
  hourBlock2.setAttribute("aria-label", "save");
  
  //i element
  let hourBlock3 = document.createElement("i");
  hourBlock3.className = "btninput fas fa-save";
  hourBlock3.id = tempArray[i].time;
  hourBlock3.setAttribute("aria-hidden", "true");

  //hourBlock1.value = localStorage.getItem(tempArray[i]);
  hourContainer.appendChild(hourBlock);
  hourBlock.appendChild(hourBlock0);
  hourBlock.appendChild(hourBlock1);
  hourBlock.appendChild(hourBlock2);
  hourBlock2.appendChild(hourBlock3);


  //compare time to current time to color code boxes
  let timeVar = parseInt(document.querySelectorAll(".row")[i].dataset.time);

  if ( timeVar > dayjs().hour() ) {
    hourBlock1.classList.add("future");
  }
  else if (timeVar < dayjs().hour()) {
    hourBlock1.classList.add("past");
  }
  else {
    hourBlock1.classList.add("present");
  }

};



$(function addListener() {

  hourContainer.addEventListener('click', function(event) {
    if (event.target.matches('.btninput')) {
      let newLog = document.getElementById(event.target.id);
      let newInt = parseInt(event.target.id);
      
      for (let i = 0; i < Object.keys(tempArray).length; i++) {
        if (newInt == tempArray[i].time) {
          tempArray[i].activity = newLog.value;
        }
        
      }
  
      localStorage.setItem("calendarArray", JSON.stringify(tempArray));
  
    }
  })

  
});



 