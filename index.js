let homeCounterEl = document.getElementById("home-counter");
let guestCounterEl = document.getElementById("guest-counter");

let homeCount = 0;
let guestCount = 0;

function add1PointToHome() {
    homeCount += 1;
    homeCounterEl.textContent = homeCount;
}

function add2PointsToHome() {
    homeCount += 2;
    homeCounterEl.textContent = homeCount;
}

function add3PointsToHome() {
    homeCount += 3;
    homeCounterEl.textContent = homeCount;
}

function add1PointToGuest() {
    guestCount += 1;
    guestCounterEl.textContent = guestCount;
}

function add2PointsToGuest() {
    guestCount += 2;
    guestCounterEl.textContent = guestCount;
}

function add3PointsToGuest() {
    guestCount += 3;
    guestCounterEl.textContent = guestCount;
}

function newGame() {
    homeCount = 0;
    guestCount = 0;
    homeCounterEl.textContent = homeCount;
    guestCounterEl.textContent = guestCount;
}