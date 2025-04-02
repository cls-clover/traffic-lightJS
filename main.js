// ------------- 1 --------------

const bgColor = prompt("Введите цвет").toLowerCase().trim();

const arr = ["red", "green", "blue", "purple", "pink", "yellow"]

if (arr.includes(bgColor)) {
    document.body.style.background = bgColor;
    document.getElementById("current_color").innerText = `Фон изменен на: ${bgColor}`;
} else {
    alert("Ошибка! Введите корректный цвет.")
}

// ------------- 2 --------------

const color = prompt("Введите цвет светофора").toLowerCase().trim();

const changeElem = (id, color, text) => {
    let elem = document.getElementById(id);
    elem.style.background = color;
    elem.innerHTML = `<h2>${text}</h2>`;
    elem.style.animation = `traffic-light-${color} 3s infinite`;
}

if (color === "red") {
    changeElem("red", "red", "STOP");
} else if (color === "yellow") {
    changeElem("yellow", "yellow", "WAIT");
} else if (color === "green") {
    changeElem("green", "green", "GO");
} else {
    alert("Ошибка! Введите корректный цвет светофора.")
}