const gradeDateSet = "2024-03-17"

window.onload = function() {

    let gradeDate = new Date(gradeDateSet).getTime();
    let now = new Date().getTime();
    let diff = now - gradeDate;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days} <span class="smaller">Days</span>`
    document.getElementById("hours").innerHTML = `${hours} <span class="smaller">Hours</span>`
    document.getElementById("minutes").innerHTML = `${minutes} <span class="smaller">Minutes</span>`
    document.getElementById("seconds").innerHTML = `${seconds} <span class="smaller">Seconds</span>`

    let start = setInterval(daysSinceGrade, 1000);

}

function daysSinceGrade() {
    
    let gradeDate = new Date(gradeDateSet).getTime();
    let now = new Date().getTime();
    let diff = now - gradeDate;


    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days} <span class="smaller">Days</span>`
    document.getElementById("hours").innerHTML = `${hours} <span class="smaller">Hours</span>`
    document.getElementById("minutes").innerHTML = `${minutes} <span class="smaller">Minutes</span>`
    document.getElementById("seconds").innerHTML = `${seconds} <span class="smaller">Seconds</span>`
}