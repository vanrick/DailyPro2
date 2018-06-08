What order the numbers (1,2,3,4) logged out in?


function logNumbers() {
  console.log(1);
  setTimeout(() => { console.log(2), 1000 });
  setTimeout(() => { console.log(3) }, 0);
  console.log(4); //runs instantly because it's not placed into the event loop
}


// event loop is a queu in all events taking in the browsers are placed.
click events
ajax calls
callbacks
etc..
these events are pushed into the event loop queu 