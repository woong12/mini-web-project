const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
setTimeout(getData, 2500);
function getData() {
    header.innerHTML =
        '<img src="https://source.unsplash.com/1600x900/?nature,water" alt="" />';
    title.innerHTML = "Dale Carnegie";
    excerpt.innerHTML =
        "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.";
    profile_img.innerHTML =
        '<img src="https://source.unsplash.com/1600x900/?nature,water" alt="" />';
    name.innerHTML = "WOONG";
    date.innerHTML = "30Aug 2022";
    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
