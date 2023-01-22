function navBar() {
    var nav = '<nav style="float:left;"><a href = index.html><button class = "button1">Home</button></nav></a>'; // This is the Nav variable that will always be present
    nav += '<nav style="float:left;"><a href = goodies.html><button class = "button1">Classics</button></nav></a>'; // This adds more to the nav variable, allowing for more buttons 
    nav += '<nav style="float:left;"><a href = about.html><button class = "button1">About Us</button></nav></a>';
    nav += '<nav style="float:left;"><a href = findus.html><button class = "button1">Find Us</button></nav></a>'
    nav += '<nav style="float:left;"><a href = contact.html><button class = "button1">Contact</button></nav></a>'
    nav += '<nav style="float:left;"><a href = opening.html><button class = "button1">Openings</button></nav></a>'
    return(nav)
}
document.getElementById("navBar").innerHTML = navBar(); // Look for element with the id navBar