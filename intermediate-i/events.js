/* { Events Exercises. } */

/* Part 1
Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.

Replace the text "Change me" with "Hello World!".

When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

Create a new div element.

Give your new div a class of purple and style it so that it has a background color of purple.

Append your new div to the page to the section tag. */

document.addEventListener(DOMContentLoaded, main());

function main() {
  document.querySelector("#change_heading").innerText = "Hello World";
}
