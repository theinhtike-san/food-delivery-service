const carouselItem1 = document.querySelector("#carouselItem1");
const carouselItem2 = document.querySelector("#carouselItem2");
const indicator1 = document.querySelector("#indicator1");
const indicator2 = document.querySelector("#indicator2");


const slide = () => {
    carouselItem1.classList.toggle("-translate-x-full");
    carouselItem2.classList.toggle("translate-x-full");
    console.log("slide");
}

indicator1.addEventListener("click",slide);


const cityDropdownBtn = document.querySelector(".city-dropdown-btn");
const cityDropdownContent = document.querySelector("#dropdown-content");

const showDropdown = () => {
  cityDropdownContent.classList.toggle("hidden")
  cityDropdownContent.classList.add("duration-1000");
}

cityDropdownBtn.addEventListener("mouseover",showDropdown);

cityDropdownBtn.addEventListener("mouseout",showDropdown);