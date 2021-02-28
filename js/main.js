const display = document.querySelector("#display");
const socials = document.querySelector(".socials");
const time = document.querySelector(".time");

//block right click
document.addEventListener("contextmenu", (event) => event.preventDefault());

display.addEventListener("click", () => {
    socials.className = "animated fadeIn";
});


document.getElementById("date").innerHTML = formatAMPM().toUpperCase();

function formatAMPM() {
    const d = new Date()
    const minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes();
    const hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours();
    const ampm = d.getHours() >= 12 ? 'pm' : 'am';
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Авгус', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}
function clock() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();


    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    date_time = hours + ":" + minutes + ":" + seconds;
    if (document.layers) {
        document.layers.doc_time.document.write(date_time).toUpperCase();
        document.layers.doc_time.document.close();
    } else document.getElementById("clock").innerHTML = date_time.toUpperCase();
    setTimeout("clock()", 10);
}
clock();