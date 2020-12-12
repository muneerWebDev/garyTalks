//custom range slider



function getVals() {

    // Get slider values

    var parent = this.parentNode;

    var slides = parent.getElementsByTagName("input");

    var slide1 = parseFloat(slides[0].value);

    var slide2 = parseFloat(slides[1].value);

    // Neither slider will clip the other, so make sure we determine which is larger

    if (slide1 > slide2) {

        var tmp = slide2;

        slide2 = slide1;

        slide1 = tmp;

    }



    var displayElement = parent.getElementsByClassName("rangeValues")[0];

    displayElement.innerHTML = "<span class='min-val'>" + slide1 + " min </span> - <span class='max-val'>" + slide2 + " min </span>";

}



window.onload = function () {

    // Initialize Sliders

    var sliderSections = document.getElementsByClassName("range-slider");

    for (var x = 0; x < sliderSections.length; x++) {

        var sliders = sliderSections[x].getElementsByTagName("input");

        for (var y = 0; y < sliders.length; y++) {

            if (sliders[y].type === "range") {

                sliders[y].oninput = getVals;

                // Manually trigger event first time to display values

                sliders[y].oninput();

            }

        }

    }

}



//custom range slider script ends



$(document).ready(function () {

    var containerWidth = $('.container').width();

    $('.filters.by-duration .dropdown-menu').width(containerWidth);

});



// Comment show more/Show less.

$('button.show-more-cmnt').click(function () {

    jQuery("ol.comment-list").toggleClass("comment-list-outer");

});
