// Open Nav
let bars = document.querySelector('.fa-bars');
let ul = document.querySelector('ul');

bars.onclick = function () {
    ul.classList.toggle('active');
}

// Start Counting
let nums = document.querySelectorAll('.num');

function startCount(el) {
    let value = el.dataset.num;
    let start = setInterval(() => {
        el.textContent++;
        if (el.textContent === value) {
            clearInterval(start);
        }
    }, 2000 / value);
}


// Add active To Narbar, Start Counting, programming
let sectionCounting = document.querySelector('.counting');
let programming = document.querySelector('.programming');
let imgOfProgramming = document.querySelector('.programming .img');
let nav = document.querySelector('nav');
let started = false;

window.onscroll = function () {
    if (window.scrollY > 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
    if (scrollY > sectionCounting.offsetTop - 200) {
        if (!started) {
            nums.forEach((num) => {
                startCount(num);
            });
        }
        started = true
    }
    if (window.scrollY > programming.offsetTop - 200) {
        imgOfProgramming.classList.add('active');
    } else {
        imgOfProgramming.classList.remove('active');
    }
}

// Start reviews
let lis = document.querySelectorAll('.reviews .flex li');
let faArrowRight = document.querySelector('.fa-arrow-right');
let faArrowLeft = document.querySelector('.fa-arrow-left');

faArrowRight.onclick = removeActive;
faArrowLeft.onclick = removeActive;

function removeActive() {
    lis.forEach((li) => {
        if (li.classList.contains('active')) {
            li.classList.remove('active');
        } else {
            li.classList.add('active');
        }
    })
}