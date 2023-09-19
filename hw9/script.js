/*******task1.***********/

//1st variant
$(document).ready(function() {
  
$("h2.head").css("background-color", "green");
$(".inner").css("font-size", "35px");

});

//2nd variant

$(document).ready(function() {
    let headElements = $("h2.head");
        headElements.css("background-color", "green");
    let innerElements = headElements.find(".inner");

    innerElements.css("font-size", "35px");
});

/************************task2************ */

$(document).ready(function() {
    $("a").each(function() {
        let href = $(this).attr("href");
        if(href && href.startsWith("https://")) {
            $(this).attr("target", "_blank");
        }
    });
});

/**************Task 3 ****************/

$(document).ready(function() {
    $("h3 + div").each(function() {
        $(this).insertBefore($(this).prev("h3"));
    });  
});

/***********task 4 *************/

$(document).ready(function() {
    let checkboxes = $('input[type="checkbox"]');
    let maxChecked = 3;

    checkboxes.change(function () {
        let checkedCheckboxes = checkboxes.filter(":checked");
        if(checkedCheckboxes.length >= maxChecked) {
            checkboxes.not(":checked").prop("disabled", true);
        } else {
            checkboxes.prop("disabled", false);
        }
    });
});