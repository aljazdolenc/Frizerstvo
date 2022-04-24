const meni = document.querySelector(".zvoncek");
const dropDown = document.querySelector(".drop-list");
const links = document.querySelectorAll(".menu-btn");

console.log(meni,dropDown,links);

meni.addEventListener("click", () => {
    dropDown.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("show");
    });
});
    links.forEach(link =>
    link.addEventListener("click", () => {
    dropDown.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("show");
    });
}));