var cityTypes = [
    "San Francisco",
    "New York City",
    "Austin",
    "Sydney",
    "Los Angeles"
];

var cityImages = [
    "sf.jpg",
    "nyc.jpg",
    "atx.jpg",
    "syd.jpg",
    "la.jpg"
];

for (var x in cityTypes) {
    var option = new Option(cityTypes[x], $('#city-type').length);
    $('#city-type').change(function(){
    $('body').css('background-image','url(images/' + cityImages[cityImage]);
}
})


// $('cityType').change(function(){
//     $('body').css('background-image','url(images/' + cityImages[cityImage]);
// })

// $(document).ready(function() {
//     $('form').on('submit', function(e) {
//         // Prevent default action on form submission.
//         e.preventDefault();

//         // Pull the name of the selected city out.
//         var selectedCity = $('#city-type').val();

//         // Otherwise, find the index of the selected city in the cityTypes array.
//         var cityImage = cityTypes.indexOf(selectedCity);

//         // If the city we have selected isn't valid (placeholder value as an example..), do nothing.
//         if (cityImage === -1)
//             return;

//         // Override background image with new image.
//         $('body').css('background-image','url(images/' + cityImages[cityImage]);
//     });
// });