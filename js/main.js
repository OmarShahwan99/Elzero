// Fix Header On Scrolling
let ourSkills = document.querySelector(".skills");
let skillsProg = document.querySelectorAll(".skills .skill .prog span");

window.addEventListener("scroll", () => {
    if (this.scrollY > (ourSkills.offsetTop + ourSkills.offsetHeight - this.innerHeight)) {
        skillsProg.forEach(skill => {
            skill.style.width = skill.dataset.prog;
        })
    }
})

// Our Stats Counter Increase On Scrolling

let ourStats = document.querySelector(".stats");
let countSpan = document.querySelectorAll(".stats .box span");
let started = false

// Counter on Scroll
window.addEventListener("scroll", () => {
    if (this.scrollY > ourStats.offsetTop) {
        if (!started) {
            countSpan.forEach((span) => startCount(span));
        }
        started = true;
    }
})

// Counter To Target
function startCount (el) {
    let target = el.dataset.count;
    let counter = setInterval(function() {
        el.innerHTML++;
        if (el.innerHTML == target) {
            clearInterval(counter);
        }
    }, 2000 / target);
}

