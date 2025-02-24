// Get the element with the specified ID
var accordianClick = document.getElementById(section1ID)

// Function to toggle the display of accordion sections
function accordion_toggle(section) {

    // Log the section to the console for debugging
    console.log(section);
    // Get the element with the specified ID
    var selectedSection = document.getElementById(section);
    
    // Check if the section is currently displayed
    if (selectedSection.style.display == 'block') {
        // If it's displayed, hide it
        selectedSection.style.display = 'none';
    } else {
        // If it's not displayed, hide all other sections
        var allSections = document.getElementsByClassName('accordion-section');
        for (var i = 0; i < allSections.length; i++) {
            allSections[i].style.display = 'none';
        }
        // Display the selected section
        selectedSection.style.display = 'block';
    }    
}

