const containere = document.querySelectorAll(".rating-score span");
const btn = document.querySelector(".btn");
const rate_point = document.getElementById("rate");
const rating = document.querySelector(".rating-star");
const thankSection = document.querySelector(".thank-section");

let rate = null;


containere.forEach((containers) => {
    containers.addEventListener("click", (e) => {
        const active = document.querySelector('.check');
        if(active) {
            active.classList.remove("check")
        }
        const container = e.target;
        container.classList.add("check");
        rate = e.target.innerText;
    })
}) 

btn.addEventListener("click", () => {
    if(rate) {
        rate_point.innerText = rate;
        rating.classList.add("show");
        thankSection.classList.remove("show");
    }
})