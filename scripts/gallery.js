/*
 Author: Shivam Sood
 Date: 2020-07-23
 Description: Code create the project gallery 
*/

"use strict";

// Get references to input elements and image containers
var prevBtn = document.querySelector(".prev-button");
var nextBtn = document.querySelector(".next-button");
var imageBar = document.querySelector(".image-bar");
var currentImg = document.querySelector(".current-img");

var numOfImages = 14; // Number of images located in the gallery

// Add all images form the gallery folder to the image bar
for (var i = 1; i <= numOfImages; i++) {
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/gallery/pic" + i + ".jpg");
  newImage.setAttribute(
    "alt",
    "Image number " + i + " in the image navigation bar"
  );
  newImage.setAttribute("tabindex", 0);
  imageBar.appendChild(newImage);
}

// Add click and keyboard enter event listeners for images
var imageList = document.querySelectorAll(".image-bar img");

var _loop = function _loop(_i) {
  imageList[_i].addEventListener("click", function () {
    return setCurrentImg(_i + 1);
  });

  imageList[_i].addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      setCurrentImg(_i + 1);
    }
  });
};

// Loop through images to add event listeners
for (var _i = 0; _i < imageList.length; _i++) {
  _loop(_i);
}

// Replace the current image with a new image
function setCurrentImg(imgNum) {
  currentImg.src = "images/gallery/pic" + imgNum + ".jpg";
  currentImg.alt = "Large image selected from image navigation bar shown here";
}

// Counter used to keep track of image location for previous and next buttons
var currentImgPos = 0;

// Move to the previous image when the previous button is clicked
prevBtn.addEventListener("click", function () {
  if (currentImgPos > 0) {
    currentImgPos--;
  } else {
    currentImgPos = numOfImages - 1;
  }

  currentImg.src = imageList[currentImgPos].src;
});

// Move to the next image when the next button is clicked
nextBtn.addEventListener("click", function () {
  if (currentImgPos < numOfImages - 1) {
    currentImgPos++;
  } else {
    currentImgPos = 0;
  }

  currentImg.src = imageList[currentImgPos].src;
});
