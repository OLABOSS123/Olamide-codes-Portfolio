// $(document).ready(function() {

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// alert("Screen Size: " + screenWidth + " x " + screenHeight);

    // var menu = document.getElementById("checkbox");
    // var navigation = document.getElementById("nav");
    // $(menu).click(function() {
    //     $(navigation).toggle(function() {
    //     });
    // });
// });


// Create a new Date object
const currentDate = new Date();

// Get the current date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Months are zero-based (0 = January, 11 = December)
const day = currentDate.getDate();

// Output the current date in a specific format (e.g., YYYY-MM-DD)
// const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

// Display the year in the console
// console.log(year);

function date() {
    return year;
}

 // Get a reference to the span element
 var spanElement = document.getElementById("year");

 // Call the function and set its result in the span's text content
 spanElement.textContent = date();
