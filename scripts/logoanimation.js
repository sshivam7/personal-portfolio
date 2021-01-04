/*
 Author: Shivam Sood
 Date: 2020-07-14
 Description: Code to handle switching icon images
*/

// Get github and linkedin icons from the DOM
const github = document.querySelector(".github-logo");
const githubLink = document.querySelector(".github-link");
const linkedin = document.querySelector(".linkedin-logo");
const linkedinLink = document.querySelector(".linkedin-link");

// Github icons
function loadRedGithub() {
     github.src = "images/logos/icons8-github-48.png";
}

function loadWhiteGithub() {
     github.src = "images/logos/GitHub-Mark-Light-64px.png";
}

githubLink.addEventListener("mouseover", loadRedGithub);
githubLink.addEventListener("mouseout",loadWhiteGithub);
githubLink.addEventListener("focus", loadRedGithub);
githubLink.addEventListener("blur", loadWhiteGithub);

// Linked in Icons
function loadRedLinkedin() {
     linkedin.src = "images/logos/icons8-linkedin-48.png";
}

function loadWhiteLinkedin() {
     linkedin.src = "images/logos/linkedin-3-64.png";
}

linkedinLink.addEventListener("mouseover", loadRedLinkedin);
linkedinLink.addEventListener("mouseout", loadWhiteLinkedin);
linkedinLink.addEventListener("focus", loadRedLinkedin);
linkedinLink.addEventListener("blur", loadWhiteLinkedin);

