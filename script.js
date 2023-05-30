alert(`Компьютер загадал предмет, выберите ваш предмет`)
let progValue = Math.ceil(Math.random() * 3);


document.querySelector("#rockUser").onclick = function(){
    const rockUser = 1;
    if (rockUser && progValue === 2)
        alert("Вы выиграли");
    else if (rockUser && progValue === 3)
        alert("Вы проиграли");
    else alert("Ничья");
    alert(`Предмет компьютера был ${progValue}`)
    alert(`Нажмите на кнопку: начать игру заново`)
}

document.querySelector("#scissorsUser").onclick = function(){
    const scissorsUser = 2;
    if (scissorsUser && progValue === 3)
        alert("Вы выиграли");
    else if (scissorsUser && progValue === 1)
        alert("Вы проиграли");
    else alert("Ничья");
    alert(`Предмет компьютера был ${progValue}`)
    alert(`Нажмите на кнопку: начать игру заново`)
}
document.querySelector("#paperUser").onclick = function(){
    const paperUser = 3;
    if (paperUser && progValue === 1)
        alert("Вы выиграли");
    else if (paperUser && progValue === 2)
        alert("Вы проиграли");
    else alert("Ничья");
    alert(`Предмет компьютера был  ${progValue}`)
    alert(`Нажмите на кнопку: начать игру заново`)
}

document.querySelector("#reload").onclick = function(){
    document.location.reload();
}