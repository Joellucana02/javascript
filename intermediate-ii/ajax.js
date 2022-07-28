/* { AJAX Exercises. } */

/* Your application should do the following:

Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF

Once the Giphy API has responded with data, append the GIF to the page

Allow the user to search for as many GIFs as they would like and keep appending them to the page

Allow the user to remove all of the GIFs by clicking a button */

$(function () {
  console.log("Ajax exercises");
  $("body").css("background-color", "#314212");
  $(".search").on("click", function (e) {
    search($(e.target));
  });
  $(".remove").on("click", function (e) {
    removeA($(e.target));
  });
  function search(e) {
    let ina = $("input").val();
    let key = "mjmvphsp772pAvOi1GvvVMi8cb3Gwqg8";
    $.getJSON(
      `http://api.giphy.com/v1/gifs/search?q=${ina}&api_key=${key}&limit=1`
    ).then(function (res) {
      console.log(res);
      $(".container").append(
        $("<iframe>").attr("src", `${res.data[0].embed_url}`)
      );
    });
  }
  function removeA(e) {
    console.log($(".container"));
    $(".container").empty();
  }
});

/* $.ajax({
  url: `api.giphy.com/v1/gifs/search?q=${ina}&api_key=${key}`,
  jsonp: "callback",
  dataType: "jsonp",
}).then(function (data) {
  console.log(data);
}); */
