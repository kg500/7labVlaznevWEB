alert(`Компьютер загадал предмет, выберите ваш предмет`)
let progValue = Math.ceil(Math.random() * 3);


document.querySelector("#rockUser").onclick = function(){
    const rockUser = 1;
    if (rockUser && progValue === 2)
        alert("Вы выиграли");
    else if (rockUser && progValue === 3)
        alert("Вы проиграли");
    else alert("Ничья");


    output();
}

document.querySelector("#scissorsUser").onclick = function(){
    const scissorsUser = 2;
    if (scissorsUser && progValue === 3)
        alert("Вы выиграли");
    else if (scissorsUser && progValue === 1)
        alert("Вы проиграли");
    else alert("Ничья");


    output();
}
document.querySelector("#paperUser").onclick = function(){
    const paperUser = 3;
    if (paperUser && progValue === 1)
        alert("Вы выиграли");
    else if (paperUser && progValue === 2)
        alert("Вы проиграли");
    else alert("Ничья");


    output();
}

function output(){
    let string;
    if (progValue === 1) 
    string = 'Камень';
    else if (progValue === 2)
    string = 'Ножницы';
    else string = 'Бумага';
    string;
    
    alert(`Предмет компьютера был: ${string}`);
    document.location.reload();
}

