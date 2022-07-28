/* Exercises */
/* Write the jQuery selectors/code to do the following

Write the necessary to code wait for the DOM to load in jQuery.

Select the footer element.

Select the div with an id of "container".

Select all of the lis inside of the ul with a class of nav.

Select the third li inside of the div with a class of list-container.

Select only the last li in each of the uls. */

/* $(function () {
  console.log($("ul li:last-child"));
  let $footer = $("footer");
  let $container = $("#container");
  let $liOfUl = $(".nav .nav-item");
  let $thLiOfUl = $(".list-container .nav-item")[2];
  let $ltLiOfUls = $("ul li:last-child");
}); */

/* { jQuery Exercises. } */

/* When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"

Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

Remove the last paragraph in the article.

Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.

Add an item to the list; it can say whatever you want.

Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.

When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

Add an event listener so that when you click on the image, it is removed from the DOM. */

$(function () {
  console.log("Let's get ready to party with jQuery!");
  $("article img").addClass("image-center");
  $("article p:last-child").eq(0).remove();
  let random = Math.floor(Math.random() * 100);
  $("#title").css("font-size", random);
  console.log(random);
  $(".col-sm-4 ol").append($("<li>").text("blablablablabla"));
  $("aside").empty().append($("<p>").text("blablablablablabla"));
  $background = $("body");
  $("img").on("click", function (e) {
    $(e.target).remove();
  });
  /* $(".row input").on("click", function (ev) {
    colors($(ev.target));
  });
  function colors(ev) {
    console.log(ev.parent().text() == "Red");
    if (ev.parent().text() == "Red") {
      console.log(ev.val());
      console.log(ev.parent().text());
    } else if (ev.parent().text() == "Green") {
      console.log(ev.val());
      console.log(ev.parent().text());
    } else if (ev.parent().text() == "Blue") {
      console.log(ev.val());
      console.log(ev.parent().text());
    }
    $background.css("background-color", `rgb()`);
  } */
});
