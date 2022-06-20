const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

const menu_item = document.querySelectorAll(".menu .header nav ul li a");

menu_item.forEach(item =>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});




/*
1           "hole-in-one" 
<= par - 2  "eagle"
par-1       "birdie"
par         "par"
par+1       "bogey"
par+2       "double bogey"
>=par +3    "go home"




*/


var names = [
    "hole-in-one" ,
    "eagle",
    "birdie",
    "par",
    "bogey",
    "double bogey",
    "go home"];

function golf_score (par,strokes) {
    if (strokes == 1){
        return names[0];
    }else if (strokes <= par -2){
        return names[1];
    }else if (strokes == par -1){
        return names[2];
    }else if (strokes == par){
        return names[3];
    }else if (strokes == par +1){
        return names[4];
    }else if (strokes == par +2){
        return names[5];
    }else if (strokes >= par +3){
        return names[6];
    }
}

console.log(golf_score(5,7))