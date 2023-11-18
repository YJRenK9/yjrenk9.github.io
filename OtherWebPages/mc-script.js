// used to change the image
var layer = document.getElementById("imageLayer");

// used to decrease the displayed y_position value
var descendVeritcally = document.getElementById("descend");
// used to increase the displayed y_position value
var ascendVeritcally = document.getElementById("ascend");

// used to display the y_postion on the webpage
var verticalPosition = document.getElementById("getVerticalPosition");

// used to get the name of the layer depending on the y_position
var location_name = document.getElementById("layerName");

// the vertical position
var y_position = 5;

// decreases the vertical position when the user clicks on the left arrow
descendVeritcally.addEventListener("click", function() {
    // decrease the y position
    y_position -= 1;
    
    //update the y position
    verticalPosition.innerHTML = "y = " + y_position;

    // frequently checks the y position in order to determine what layer the player is in
    if (y_position >= 20) {
        // sky background appears if the the vertical position is 20 or higher
        layer.src = "mc-images/Sky.jpg";
        location_name.innerHTML = "Layer: Above the Clouds";
    } else if (y_position >= 10) {
        // mountains background appears if the the vertical position is 10 ~ 19
        layer.src = "mc-images/mountains.webp";
        location_name.innerHTML = "Layer: Mountains";
    } else if (y_position >= 5) {
        // plains background appears if the the vertical position is 5 ~ 9
        layer.src = "mc-images/plains.jpg";
        location_name.innerHTML = "Layer: Plains";
    } else if (y_position >= 2) {
        // cave background appears if the the vertical position is 2 ~ 4
        layer.src = "mc-images/Cave.webp";
        location_name.innerHTML = "Layer: Caves";
    } else if (y_position >= 0) {
        // lava cave background appears if the the vertical position is 0 ~ 1
        layer.src = "mc-images/Lava_Cave.webp";
        location_name.innerHTML = "Layer: Lava Caves";
    } else {
        // when the y position is below 0
        layer.src = "mc-images/The_Void.webp";
        location_name.innerHTML = "Layer: Void";
    }
});

// increases the vertical position when the user clicks on the right arrow
ascendVeritcally.addEventListener("click", function() {
    // increase the y position
    y_position += 1;

    // update the y postion
    verticalPosition.innerHTML = "y = " + y_position;

    // frequently checks the y position in order to determine what layer the player is in
    if (y_position >= 20) {
        // sky background appears if the the vertical position is 20 or higher
        layer.src = "mc-images/Sky.jpg";
        location_name.innerHTML = "Layer: Above the Clouds";
    } else if (y_position >= 10) {
        // mountains background appears if the the vertical position is 10 ~ 19
        layer.src = "mc-images/mountains.webp";
        location_name.innerHTML = "Layer: Mountains";
    } else if (y_position >= 5) {
        // plains background appears if the the vertical position is 5 ~ 9
        layer.src = "mc-images/plains.jpg";
        location_name.innerHTML = "Layer: Plains";
    } else if (y_position >= 2) {
        // cave background appears if the the vertical position is 2 ~ 4
        layer.src = "mc-images/Cave.webp";
        location_name.innerHTML = "Layer: Caves";
    } else if (y_position >= 0) {
        // lava cave background appears if the the vertical position is 0 ~ 1
        layer.src = "mc-images/Lava_Cave.webp";
        location_name.innerHTML = "Layer: Lava Caves";
    } else {
        // when the y position is below 0
        layer.src = "mc-images/The_Void.webp";
        location_name.innerHTML = "Layer: Void";
    }
});

// if you put the if/else statement outside of the event listeners, then it'll only run once
